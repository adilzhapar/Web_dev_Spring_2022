from django.http.response import JsonResponse

from api.models import *

def companies_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]

    return JsonResponse(companies_json, safe=False)

def get_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message: {str(e)}'})
        # return JsonResponse({'Pusto bratan'})
    return JsonResponse(company.to_json(), safe=False)

def comp_vacancies(request, company_id):
    vacancies_json = [vacancy.to_json() for vacancy in Vacancy.objects.all() if vacancy.company.id == company_id]
    return JsonResponse(vacancies_json, safe=False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)

def get_vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message: {str(e)}'})
    return JsonResponse(vacancy.to_json())

def top_ten(request):
    vacancies = Vacancy.objects.all().order_by('salary')[:10]
    return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)

    

