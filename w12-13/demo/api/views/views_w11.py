from unicodedata import category
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
from core.models import Category

@csrf_exempt
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        # print(categories)
        # categories = Category.objects.filter(name='category 5')
        # categories = Category.objects.filter(name__startswith='cat')
        # categories = Category.objects.filter(name__endswith='ed')
        # categories = Category.objects.filter(name__contains='update')
        # categories = Category.objects.filter(id__in=[1, 2, 3, 4])
        # categories = Category.objects.filter(name__contains='5').order_by('-id')
        category_json = [category.to_json() for category in categories]
        return JsonResponse(category_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        category = Category.objects.create(name=data['name'])
        return JsonResponse(category.to_json())

@csrf_exempt
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(category.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        category.name = data['name']
        category.save()
        return JsonResponse(category.to_json())
    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({'message': 'deleted'}, status=204)