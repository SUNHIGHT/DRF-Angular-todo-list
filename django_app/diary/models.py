from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Diary(models.Model):
    title = models.CharField(max_length=140, blank=False)
    content = models.CharField(max_length=140, blank=False,default='ここに記入！！')
    date = models.DateTimeField(auto_created=True)
    photo = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    evaluation = models.IntegerField(
        validators=[
            MinValueValidator(0),
            MaxValueValidator(10)
        ]
    )

    def __str__(self) -> str:
        return self.title
