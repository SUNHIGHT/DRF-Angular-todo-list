# Generated by Django 4.2.7 on 2023-12-11 07:44

import django.core.validators
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('diary', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='diary',
            name='content',
            field=models.CharField(default='ここに記入！！', max_length=140),
        ),
        migrations.AddField(
            model_name='diary',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='diary',
            name='evaluation',
            field=models.IntegerField(default=5, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(10)]),
            preserve_default=False,
        ),
    ]
