from django.db import models

class Diary(models.Model):
    title = models.CharField(max_length=140,blank=False)
    date = models.DateTimeField(auto_created=True)
    photo = models.CharField(max_length=100)
    