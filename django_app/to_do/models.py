from django.db import models

class Todo(models.Model):
    PRIORITY_CHOICES = [
        (1,'低'),
        (2,'中'),
        (3,'高'),
    ]

    title = models.CharField(max_length=140,blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    priority = models.IntegerField(choices=PRIORITY_CHOICES,default=1)
    deadline = models.DateTimeField(null=True,blank=True)
    completed = models.BooleanField(default=False)
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return self.title