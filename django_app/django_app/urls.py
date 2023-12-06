from django.urls import path, include 
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/to_do/', include('to_do.urls')),
    path('api/quote/', include('quote.urls')),
]
