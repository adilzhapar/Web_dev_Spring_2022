from django.db import models

# Create your models here.
class Product(models.Model): # database
    name = models.CharField(max_length=100)
    price = models.FloatField(default=0)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }