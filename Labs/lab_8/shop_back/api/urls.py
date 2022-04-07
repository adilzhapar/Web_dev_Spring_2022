from django.urls import path

from api.views import *

urlpatterns = [
    path('products/', product_list),
    path(r'products/<int:product_id>/', product_item),
    path('categories/', category_list),
    path(r'categories/<int:category_id>/', category_item),
    path('categories/<int:category_id>/products', def_product_list)
    
]