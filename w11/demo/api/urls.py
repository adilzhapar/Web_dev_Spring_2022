from django.urls import path

from api.views import *

urlpatterns = [
    path('categories/', category_list),
    path(r'categories/<int:category_id>/', category_detail),
]