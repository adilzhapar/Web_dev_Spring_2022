# Generated by Django 4.0.3 on 2022-04-17 08:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_category_product_category'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'Category', 'verbose_name_plural': 'Categories'},
        ),
    ]