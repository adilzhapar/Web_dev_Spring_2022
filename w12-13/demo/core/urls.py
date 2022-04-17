from django.urls import path

from core.views import *

urlpatterns = [
    path('products/', product_list),
    path(r'products/<int:product_id>/', product_detail),
]