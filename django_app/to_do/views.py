from django.utils import timezone
from rest_framework import viewsets

from .models import Todo
from .serializer import TodoSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_queryset(self):
        sort_by = self.request.query_params.get('sort_by')
        queryset = super().get_queryset()  # 初期化
        
        if sort_by == 'deadline':
            queryset = queryset.filter(deadline__gte=timezone.now()).order_by('deadline')
        elif sort_by == 'priority':
            queryset = queryset.order_by('-priority')
        elif sort_by == 'completed':
            queryset = queryset.order_by('completed')
        elif sort_by == 'favorite':
            queryset = queryset.order_by('-is_favorite')
        else:
            queryset = queryset.order_by('-created_at')

        return queryset
