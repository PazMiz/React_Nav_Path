from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    image = models.ImageField(upload_to='photos', null=True, blank=True, default='placeholder.png')

    def __str__(self):
        return f"{self.title} - Completed: {self.completed}"
