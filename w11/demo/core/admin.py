from django.contrib import admin

# Register your models here.

from core.models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'category',)
    search_fields = ('name', 'price',)
    list_filter = ('category',)

