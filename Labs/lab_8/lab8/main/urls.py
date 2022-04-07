from django.urls import path, re_path

from main.views import *

urlpatterns = [
    path('hi/', hello),
    re_path(r'time/plus/(\d{1,2})/', show_time),
    path('products/', product_list),
    path(r'products/<int:product_id>/', product_detail),
]