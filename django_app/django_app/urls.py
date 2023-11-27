from django.urls import include, path
from django.contrib import admin

from to_do.urls import router as to_do_router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(to_do_router.urls)),
]
