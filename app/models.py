from django.db import models

class Imagebook(models.Model):
    title = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    Image = models.CharField(max_length=1000000)
    #Image = models.ImageField(upload_to='Imagebook')

    def __str__(self):
        return 'paintID:' + str(self.id)
# Create your models here.

