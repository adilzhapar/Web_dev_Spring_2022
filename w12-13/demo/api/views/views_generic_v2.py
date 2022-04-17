from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated

from api.serializers import CategorySerializer2, ProductSerializer
from core.models import Category, Product


class CategoryListAPIView(generics.ListCreateAPIView):

    def get_queryset(self):
        return Category.objects.all()
    # queryset = Category.objects.all()
    serializer_class = CategorySerializer2
    permission_classes = (IsAuthenticated,)


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2


class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
