from django.http.response import JsonResponse

from api.models import *
# Create your views here.
def product_list(request):
    products = Product.objects.all()
    j_products = [product.to_json() for product in products]
    return JsonResponse(j_products, safe=False)


def product_item(request, product_id):
    product = Product.objects.get(id=product_id)
    return JsonResponse(product.to_json())