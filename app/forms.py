from django import forms
from django.forms import ModelForm
from .models import Imagebook

class Imageform(forms.Form):
    title = forms.CharField(max_length=100)
    name = forms.CharField(max_length=100)
    Imagepaint = forms.CharField(
        label='',
        widget = forms.Textarea(
            attrs={
                'id': 'Imagepaint',
                "rows": 1,
                "cols": 1,
                'type': 'hidden',
            }
        )
    )