from ast import Is
import json
from django.http.response import JsonResponse

from api.models import *
from api.serializers import CompanySerializer, VacancySerializer

from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import Http404
from rest_framework.permissions import IsAuthenticated

# for fbv:
from rest_framework.decorators import api_view, permission_classes

# for cbv:
from rest_framework.views import APIView


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': f'{str(e)}'}, status=400)

    if request.method == 'GET': 
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer(instance=company, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    
    elif request.method == 'DELETE': 
        company.delete()
        return JsonResponse({'message': 'deleted company'}, status=204)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def comp_vacancies(request, company_id):
    if request.method == 'GET':
        vacancies = [i for i in Vacancy.objects.all() if i.company.id == company_id]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def top_ten(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class VacancyListAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get_object(self, pk):
        try:
            return Vacancy.objects.get(id=pk)
        except Vacancy.DoesNotExist as e:
            raise Http404
    
    def get(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    
    def put(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def delete(self, request, pk=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response({'message': 'deleted vacancy'}, status=204)