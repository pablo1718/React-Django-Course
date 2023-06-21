from rest_framework import generics, permissions 
from rest_framework.response import Response 
from knox.models import AuthToken
from .serializers import userSerializer, registerSerializer, loginSerializer
from django.contrib.auth.models import User 

#Register Api View
class registerApi(generics.GenericAPIView):
    serializer_class = registerSerializer

    #Could take more arguments 
    def post(self, request, *args, **kwargs):
        # Everything its come it pass to the serializer 
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception = True)
        user = serializer.save()
        # Create token using knox per each user 
        return Response({
            "user": userSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

    def get(self, request):
        return Response(User.objects.values())

#Login Api
class loginApi(generics.GenericAPIView):

    serializer_class = loginSerializer

    #Could take more arguments 
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": userSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })

#User Api (Loook at the token an retur the user asociated to that token
# Get User API
class userApi(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = userSerializer

  def get_object(self):
    return self.request.user

