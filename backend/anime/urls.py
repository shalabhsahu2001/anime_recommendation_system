# backend/anime/urls.py
from django.urls import path
from .views import UserRegistrationView

urlpatterns = [
    # Registration endpoint
    path('auth/register/', UserRegistrationView.as_view(), name='user_register'),
]
