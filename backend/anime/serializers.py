from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Preference

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, 
        required=True, 
        style={'input_type': 'password'}
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    
    def create(self, validated_data):
        #creates new user
        user = User(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password']) #Hashes password
        user.save()
        return user

class PreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preference
        fields = ["id", "favorite_genre"]
