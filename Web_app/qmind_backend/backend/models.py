from django.db import models

# Create your models here.

class backend(models.Model):
    name = models.CharField(max_length=100, default='Unnamed')
    image = models.ImageField(upload_to='post_images', default='C:/Users/siyun/OneDrive/Desktop/QMIND 2024/Web_app/qmind_backend/007-0004-000.jpg')

    def _str_(self):
        return self.title