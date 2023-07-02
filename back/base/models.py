from django.db import models
from django.db import models
from django.contrib.auth.models import User
from django import forms
from django.template.defaultfilters import truncatechars 
from django.utils.safestring import mark_safe
from django.db import models
from django.template.defaultfilters import truncatechars 
from django.utils.safestring import mark_safe

class Task(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    image = models.ImageField(upload_to='photos', null=True, blank=True, default='placeholder.png')

    def __str__(self):
        return f"{self.title} - Completed: {self.completed}"
        

class Product(models.Model):
    image = models.ImageField(upload_to='photos', null=True, blank=True, default='/placeholder.png')
    desc = models.CharField(max_length=50, null=True, blank=True)
    price = models.IntegerField()
    createdTime = models.DateTimeField(auto_now_add=True)

    @property
    def short_description(self):
        return truncatechars(self.desc, 20)

    def admin_photo(self):
        return mark_safe('<img src="{}" width="100" />'.format(self.image.url))

    admin_photo.short_description = 'Image'
    admin_photo.allow_tags = True

    def __str__(self):
        return f'{self.desc} {self.price} {self.image}'
    
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    desc = models.CharField(max_length=50, null=True, blank=True)
    price = models.IntegerField()
    amount = models.IntegerField()
    createdTime = models.DateTimeField(auto_now_add=True)
 
    def __str__(self):
        return f'{self.desc}'