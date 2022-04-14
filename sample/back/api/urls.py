from api.views import *

from django.urls import path

urlpatterns = [
    path('products/', product_list),
    path('products/<int:product_id>', product_item)
]