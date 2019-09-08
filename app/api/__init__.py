from flask import Flask
from flask_cors import CORS
from app.api.auth import bp as auth_bp
from app.api.upload import bp as upload_bp
from app.api.stats import bp as stats_bp
from app.api.data import bp as data_bp

from app.api.common import InvalidFileUploadError,NoFilePartFoundError, handle_invalid_file_upload_error
def create_app():
    app = Flask(__name__)
    app.register_blueprint(auth_bp)
    app.register_blueprint(upload_bp)
    app.register_blueprint(stats_bp)
    app.register_blueprint(data_bp)
    CORS(app)
    app.register_error_handler(InvalidFileUploadError, handle_invalid_file_upload_error)

    app.config.from_object('config.Config')
    return app