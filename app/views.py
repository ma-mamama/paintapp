from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Imagebook
from .forms import Imageform
from django.core.files.base import ContentFile

import base64
import psycopg2
import os

def title(request):
    return render(request, 'imgapp/title.html')

def index(request):
    if request.method=="POST":

        ImageURI = request.POST['Imagepaint']
        title = request.POST['title']
        name = request.POST['name']
        imagebook = Imagebook(title=title,name=name,Image=ImageURI)
        imagebook.save()
        return redirect('title')
    
    params = {
        'title': 'paint',
        'goto' : 'next',
    }

    return render(request, 'imgapp/index.html', params)
    
def next(request):
    images = Imagebook.objects.all()
    params = {
        'images': images,
        'goto': 'title'
    }
    return render(request, 'imgapp/show.html', params)

def delete(request, num):
    image = Imagebook.objects.get(id=num)
    if (request.method == 'POST'):
        image.delete()

        return redirect('next')
    params = {
        'images': images,
        'goto': 'index'
    }
    return render(request, 'imgapp/show.html', params)



