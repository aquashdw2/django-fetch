from django.urls import path
from blog import views


urlpatterns = [
    path("", views.index),
    path("post/lorem/", views.read_lorem),
    path("post/create/", views.create_post),
]
