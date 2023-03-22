from django.urls import path
from .import views


urlpatterns = [
    path('', views.index, name='index'),
    path('kitchen/', views.kitchen, name='kitchen'),
    path('office/', views.office, name='office'),
    path('shopping-cart/', views.shopping_cart, name='shopping_cart'),
    path('homedecor/', views.homedecor, name='homedecor'),
    path('throw_pillows/', views.throw_pillows, name='throw_pillows'),
    path('stools/', views.stools, name='stools'),
    path('pencils/', views.pencils, name='pencils'),
    path('rugs/', views.rugs, name='rugs'),
    path('dishes/', views.dishes, name='dishes'),
    path('desk_chairs/', views.desk_chairs, name='desk_chairs'),
]