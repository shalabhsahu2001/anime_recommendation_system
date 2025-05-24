# backend/anime/urls.py
from django.urls import path
from .views import UserRegistrationView
from .views import (
    AnimeSearchView,
    AnimeRecommendationsView,
    UserPreferencesListCreateView,
    UserPreferenceDetailView,
)

urlpatterns = [
    # Registration endpoint
    path('auth/register/', UserRegistrationView.as_view(), name='user_register'),
    path('anime/search/', AnimeSearchView.as_view(), name='anime_search'),
    path('anime/recommendations/', AnimeRecommendationsView.as_view(), name='anime_recommendations'),
    path('user/preferences/', UserPreferencesListCreateView.as_view(), name='user_preferences'),
    path('user/preferences/<int:id>/', UserPreferenceDetailView.as_view(), name='user_preference_detail'),
]
