from django.contrib import admin
from .models import Task  # Update the import statement to reference the correct module

# Register your models here.
admin.site.register(Task)  # Use admin.site.register to register the Task model
