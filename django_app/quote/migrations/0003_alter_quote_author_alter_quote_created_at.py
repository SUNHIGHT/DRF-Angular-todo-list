# Generated by Django 4.2.7 on 2023-12-06 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quote', '0002_alter_quote_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quote',
            name='author',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='quote',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
