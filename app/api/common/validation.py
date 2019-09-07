from flask import current_app as app
from os import path


def is_file_allowed(file_name):
    extension = path.splitext(file_name)[1]
    return extension.lower() in app.config["ALLOWED_UPLOAD_FILE_FORMAT"]