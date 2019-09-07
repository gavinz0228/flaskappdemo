from flask import Flask
from app.web.auth import bp as auth_bp
from app.web.upload import bp as upload_bp
from app.web.common import InvalidFileUploadError,NoFilePartFoundError, handle_invalid_file_upload_error
def create_app():
    app = Flask(__name__)
    app.register_blueprint(auth_bp)
    app.register_blueprint(upload_bp)

    app.register_error_handler(InvalidFileUploadError, handle_invalid_file_upload_error)

    app.config.from_object('config.Config')
    return app