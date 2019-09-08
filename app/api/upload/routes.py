from flask import Blueprint, request, jsonify
from flask import current_app as app
from app.data import UploadTask
from app.api.common import response, is_file_allowed
from app.api.common import NoFileNameFoundError, NoFileNameFoundError, FileFormatNotAllowedError, NoFilePartFoundError
from os import path
import uuid

bp = Blueprint('upload', __name__, url_prefix='/upload')

@bp.route('/tasks', methods = ['POST', 'GET'])
def tasks():
    if request.method == "POST":
        task_info = request.json
        task_id = UploadTask.create_upload_task(task_info["deviceId"], task_info["deviceType"], task_info["fileNum"], None )
        response({"taskId": task_id})
    return response(UploadTask.get_all_tasks())

@bp.route('/perform_task/<task_id>', methods = ['POST'])
def perform_task(task_id):
    if 'file' not in request.files:
        raise NoFilePartFoundError()

    file = request.files['file']
    if file.filename == "":
        raise NoFileNameFoundError()

    if not is_file_allowed(file.filename):
        raise FileFormatNotAllowedError()

    archive_location = path.join(app.config["TEMP_UPLOAD_PATH"], file.filename)
    file.save(archive_location)
    upload_id = UploadTask.add_successful_upload(task_id, archive_location)

    return response({"uploadId": upload_id })


