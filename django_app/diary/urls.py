from django.urls import path, include
from rest_framework import routers
from .views import DiaryViewSet

router = routers.DefaultRouter()
router.register(r'',DiaryViewSet)

urlpatterns = [
    path('',include(router.urls)),
]