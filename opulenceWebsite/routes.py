# restaurant_app/opulenceWebsite/routes.py

from flask import Blueprint, render_template


main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('index2.html')

@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/contact')
def contact():
    return render_template('contact.html')

@main.route('/footer')
def footer():
    return render_template('footer.html')

@main.route('/gallery')
def gallery():
    return render_template('gallery.html')

@main.route('/menu')
def menu():
    return render_template('menu.html')

@main.route('/reservation')
def reservation():
    return render_template('reservation.html')