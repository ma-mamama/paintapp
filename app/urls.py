from django.urls import path

from . import views

urlpatterns = [
    path('', views.title, name='title'),
    path('index', views.index, name='index'),
    path('next', views.next, name='next'),
    path('delete/<int:num>', views.delete, name='delete')
]