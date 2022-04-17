from django.http.response import HttpResponse, JsonResponse
from django.http.request import HttpRequest

from datetime import datetime, timedelta

def hello(request):
    return HttpResponse("<h1>Hello view function response</h1>")

def show_time(request, hours):
    print(hours)
    current_time = datetime.now() + timedelta(hours=int(hours))
    return HttpResponse(f'<h1>{current_time}</h1>')


# def product_list(request):
#     return HttpResponse("<h1>Product list</h1>")

# def product_detail(request, product_id):
#     return HttpResponse(f"<h1>Product detail: {product_id}</h1>")

products =[
    {
        'id': i,
        'name': f'Product {i}',
        'price': i* 1000
    }
    for i in range(1, 10)
    
]

def product_list(request):
    return JsonResponse(products, safe=False)

def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'message': 'Product ID is not found'})