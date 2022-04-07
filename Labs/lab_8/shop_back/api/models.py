from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=20)

    def to_json(self):
        return {
            'id' : self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=20)
    price = models.FloatField(null=True, blank=True)
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE,null=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'category': self.category.name
        }