# restaurant_app/app/__init__.py

from flask import Flask

from .routes import main

def create_app():
    app = Flask(__name__)

    


    app.register_blueprint(main)  # Register the blueprint with routes

    return app
