from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from pages.models import User
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login


def login_view(request):
    if request.method == "POST":
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)
        next_url = request.POST.get('next', None)
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            if next_url:
                return HttpResponseRedirect(next_url)
            else:
                return HttpResponseRedirect('/')
        else:
            return HttpResponse('Something went wrong.')
    return render(request, 'registration/login2.html', {})


def home(request):
    people = User.objects.all()
    return render(request, 'pages/home.html', {'p': people})


def about(request):
    return render(request, 'pages/about.html', {})


@login_required
def profile(request):
    # person = get_object_or_404(User, username=face)
    # person = Person.objects.get(name=face)
    return render(request, 'pages/profile.html', {})
