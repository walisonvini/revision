from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from ..serializers.user import UserSerializer
from ..permissions import IsActive

class UserDetailsView(RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsActive]

    def get_object(self):
        return self.request.user

user_details = UserDetailsView.as_view()