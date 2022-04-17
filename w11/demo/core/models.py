from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=20)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
    
    def __str__(self):
        return f'{self.id}: {self.name}'


class Product(models.Model): # database
    name = models.CharField(max_length=100)
    price = models.FloatField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }
    
    def __str__(self):
        return f'{self.id}: {self.name} | {self.price}'