# Generated by Django 4.0.3 on 2022-04-17 08:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_category_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name': 'Product', 'verbose_name_plural': 'Products'},
        ),
    ]
