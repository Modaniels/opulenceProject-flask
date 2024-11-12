# restaurant_app/app.py

from opulenceWebsite import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True, port=5001)
