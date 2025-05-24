
# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Preference(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="preferences")
    favorite_genre = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.user.username} - {self.favorite_genre}"
