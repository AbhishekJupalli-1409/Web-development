from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from datetime import datetime




def home(request):
    content = '<html><body><h1>Welcome to little lemon</h1></body></html>'
    return HttpResponse(content)
def say_hello(request):
    return HttpResponse('<html><body><h1>Hello from abhishek</h1></body></html>')
def display_date(request):
    date_joined = datetime.today().year
    time = datetime.now()
    return HttpResponse(f'<html><body><h1>Todays date is {date_joined} and time is  {time}</h1></body></html>')
def menu(request):
    text= """<h1 style="color:green;">This is a Green little lemon</h1>"""
    return HttpResponse(f'{text}')