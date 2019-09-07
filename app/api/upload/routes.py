from flask import Blueprint, request, jsonify
from flask import current_app as app
from app.api.common import response, is_file_allowed
from app.api.common import NoFileNameFoundError, NoFileNameFoundError, FileFormatNotAllowedError, NoFilePartFoundError
from os import path

bp = Blueprint('upload', __name__, url_prefix='/upload')

@bp.route('/add_task', methods = ['POST'])
def add_task():
    task_info = request.json
    return response(task_info)

@bp.route('/perform_task', methods = ['POST'])
def perform_task():
    print(request.files)
    if 'file' not in request.files:
        raise NoFilePartFoundError()

    file = request.files['file']
    if file.filename == "":
        raise NoFileNameFoundError()

    if not is_file_allowed(file.filename):
        raise FileFormatNotAllowedError()

    file.save(path.join(app.config["TEMP_UPLOAD_PATH"], file.filename))
    return response("File is successfully uploaded")