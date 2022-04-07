from django.http.response import JsonResponse

from api.models import *

def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def product_item(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message: {str(e)}'})
    
    return JsonResponse(product.to_json())


def category_list(request):
    categories = Category.objects.all()
    cetagories_json = [category.to_json() for category in categories]
    return JsonResponse(cetagories_json, safe=False)


def category_item(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message: {str(e)}'})
    
    return JsonResponse(category.to_json())


def def_product_list(request, category_id):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products if product.category.id == category_id]
    return JsonResponse(products_json, safe=False)