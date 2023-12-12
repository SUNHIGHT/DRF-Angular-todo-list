from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include 
from django.contrib import admin



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/to_do/', include('to_do.urls')),
    path('api/quote/', include('quote.urls')),
    path('api/diary/', include('diary.urls')),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)