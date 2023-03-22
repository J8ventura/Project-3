from django.shortcuts import render
from .models import Product, ShoppingCart



def index(request):
    featured_products = Product.objects.filter
    return render(request, 'products/index.html', {'featured_products': featured_products})

def kitchen(request):
    return render(request, 'products/kitchen.html')

def office(request):
    return render(request, 'products/office.html')

def shopping_cart(request):
    cart_items = ShoppingCart.objects.all()
    return render(request, 'products/shopping_cart.html', {'cart_items': cart_items})

def homedecor(request):
    return render(request, 'products/homedecor.html')

def throw_pillows(request):
    return render(request, 'products/throw_pillows.html')

def stools(request):
    return render(request, 'products/stools.html')

def pencils(request):
    return render(request, 'products/pencils.html')

def rugs(request):
    return render(request, 'products/rugs.html')

def dishes(request):
    return render(request, 'products/dishes.html')

def desk_chairs(request):
    return render(request, 'products/desk_chairs.html')