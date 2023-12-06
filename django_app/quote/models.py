from django.db import models

class Quote(models.Model):
    quote = models.CharField(max_length=100,blank=False)
    author = models.CharField(max_length=20,blank=False)
    # created_at=models.DateTimeField(auto_created=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.quote
    
    