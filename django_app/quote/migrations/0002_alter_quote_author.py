# Generated by Django 4.2.7 on 2023-12-06 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quote', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quote',
            name='author',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]