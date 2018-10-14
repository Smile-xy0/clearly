import os
from flask import jsonify
from app import create_app

app = create_app(os.getenv('FLASK_CONFIG') or 'default')


@app.route('/magic')
def magic_word():
    return jsonify(magic_word='Alakazam!')
