from flask import jsonify


def register(app):
    ''' Given the flask application object, register the application routes '''

    @app.route('/')
    def coming_soon():
        return jsonify(
            message=
            "The clearly API does not exist yet. Please check back soon.")
