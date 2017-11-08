from django.db import models
from django.contrib.auth.models import AbstractUser


def profile_image_upload_handler(instance, filename):
    return "{username}/profile_image/{file}".format(username=instance.username, file=filename)


class User(AbstractUser):
    phone_number = models.CharField(max_length=255, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    profile_image = models.ImageField(upload_to=profile_image_upload_handler, blank=True, null=True)

    def get_full_name(self):
        if self.first_name and self.last_name:
            return "{} {}".format(self.first_name, self.last_name)
        else:
            return self.username

    def __str__(self):
        return self.get_full_name()


# class Person(models.Model):
#     name = models.CharField(max_length=255)
#     phone = models.CharField(max_length=255, default='000-000-000')
# 
#     def __str__(self):
#         return self.name


class Report(models.Model):
    note = models.TextField()
    person = models.ForeignKey(User, related_name='reports')

    def __str__(self):
        return 'Note for {}'.format(self.person.name)
