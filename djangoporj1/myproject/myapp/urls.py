from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,name="home"),
     path('say/',views.say_hello),
     path('date/',views.display_date),
     path('green/',views.menu)
     
]
