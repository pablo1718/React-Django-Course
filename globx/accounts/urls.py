from django.urls import path, include 
from .api import registerApi,loginApi, userApi
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    #Generics Views 
    path('api/auth/register', registerApi.as_view()),
    path('api/auth/login', loginApi.as_view()),
    path('api/auth/user', userApi.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name="knox_logout")
]