from django.shortcuts import render
from djangi.http import HttpResponse
# Create your views here.


def main(request):
    return HttpResponse("Hello")
