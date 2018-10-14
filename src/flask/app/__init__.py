from flask import Flask
from flask_cors import CORS
from config import config


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    # init extensions
    CORS(app)

    # register blueprints here

    return app
