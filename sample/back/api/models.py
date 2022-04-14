from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=15)
    price = models.FloatField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }

