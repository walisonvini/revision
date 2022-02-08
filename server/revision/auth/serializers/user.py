from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer

class UserSerializer(ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = [
            'id',
            'username',
            'password',
            'first_name',
            'last_name',
            'email',
            'groups',
            'user_permissions'
        ]