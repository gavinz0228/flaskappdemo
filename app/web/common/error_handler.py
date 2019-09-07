from app.web.common import error_response
from flask import current_app as app
from werkzeug.exceptions import InternalServerError

def handle_invalid_file_upload_error(e):
    return error_response(e.description, e.code)
#@app.errorhandler(InternalServerError)
def handle_generic_error(e):
    original_error = getattr(e, "original_exception", None)
    return error_response(original_error, 500)