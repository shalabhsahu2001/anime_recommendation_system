from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserRegistrationSerializer
from .models import Preference
from .serializers import PreferenceSerializer

from collections import OrderedDict #for remooving duplicates

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
import requests

class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer

class AnimeSearchView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        name = request.query_params.get('name')
        genre = request.query_params.get('genre')

        query = """
          query ($search: String, $genre: String) {
            Page(perPage: 10) {
              media(search: $search, genre: $genre, type: ANIME) {
                id
                title {
                  romaji
                  english
                  native
                }
                genres
                description
                popularity
              }
            }
          }
        """
        variables = {'search': name, 'genre': genre}
        response = requests.post("https://graphql.anilist.co", json={'query': query, 'variables': variables})
        if response.status_code == 200:
            return Response(response.json().get('data', {}))
        return Response({"detail": "Error fetching anime."}, status=response.status_code)
    
class AnimeRecommendationsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Retrieve user preferences; assumes a related name "preferences" on the User model.
        prefs = request.user.preferences.all()
        if not prefs.exists():
            return Response({"detail": "No preferences set. Please update your preferences."},
                            status=status.HTTP_400_BAD_REQUEST)
        # For this example, we use the favorite_genre of the first preference.
        favorite_genre = prefs.first().favorite_genre
        query = """
          query ($genre: String) {
            Page(perPage: 10) {
              media(genre: $genre, type: ANIME, sort: POPULARITY_DESC) {
                id
                title {
                  romaji
                  english
                  native
                }
                genres
                description
                popularity
              }
            }
          }
        """
        variables = {"genre": favorite_genre}
        response = requests.post("https://graphql.anilist.co", json={'query': query, 'variables': variables})
        if response.status_code == 200:
            return Response(response.json().get("data", {}))
        return Response({"detail": "Error fetching recommendations."}, status=response.status_code)


class UserPreferencesListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PreferenceSerializer

    def get_queryset(self):
        return Preference.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserPreferenceDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PreferenceSerializer
    lookup_field = 'id'

    def get_queryset(self):
        return Preference.objects.filter(user=self.request.user)
