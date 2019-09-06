from flask import Flask
from app.web.auth import bp as auth_bp
def create_app():
    app = Flask(__name__)
    app.register_blueprint(auth_bp)
    return app