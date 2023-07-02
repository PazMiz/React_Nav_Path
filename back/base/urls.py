# tasks/urls.py
from django.urls import path
from . import views
from .views import register
from rest_framework_simplejwt.views import TokenObtainPairView
from django.conf import settings
from django.conf.urls.static import static
from .views import get_photo_data



urlpatterns = [
    path('tasks/', views.task_list, name='task_list'),
    path('tasks/create/', views.task_create, name='task_create'),
    path('tasks/update/<int:pk>/', views.task_update, name='task_update'),
    path('tasks/delete/<int:pk>/', views.task_delete, name='task_delete'),
    path('api/register', register, name='register'),
    path('login/', TokenObtainPairView.as_view()),
    path('api/photos/', get_photo_data, name='get_photo_data'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


