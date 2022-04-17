from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token


from api.views import *
from api.views.views_generic_v2 import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    # path('categories/', category_list),
    # path(r'categories/<int:category_id>/', category_detail),

    path('login/', obtain_jwt_token),


    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),

    path('products/', ProductListAPIView.as_view()),
    path('products/<int:pk>/', ProductDetailAPIView.as_view())
]