import os
from flask import jsonify
from app import create_app

app = create_app(os.getenv('FLASK_CONFIG') or 'default')


@app.route('/')
def coming_soon():
    return jsonify(
        message="The clearly API does not exist yet. Please check back soon.")
