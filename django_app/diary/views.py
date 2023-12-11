from django.shortcuts import render
from .models import Diary
from .serializer import DiarySerializer
from rest_framework import viewsets

class DiaryViewSet(viewsets.ModelViewSet):
    queryset = Diary.objects.all().order_by('-created_at')
    serializer_class = DiarySerializer