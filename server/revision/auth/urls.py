from django.urls import path
from ..auth import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'auth'
urlpatterns = [
    path('user/', views.user_details, name='user'),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]