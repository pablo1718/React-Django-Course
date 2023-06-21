from backend.models import Student
from rest_framework import viewsets, permissions
from .serializers import StudentSerializer

# Student Viewset Get, Post, Put & Delete request
class StudentViewSet(viewsets.ModelViewSet):

    #queryset = Student.objects.all()

    permission_classes = [
        #permissions.AllowAny
        permissions.IsAuthenticated
    ]

    serializer_class=StudentSerializer

    def get_queryset(self):
        #return self.request.user.students.all()
        return Student.objects.all()
    
    #Save the student owner when we create a new student
    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)
