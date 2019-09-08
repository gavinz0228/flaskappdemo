          
from app.api.common import response
from app.data import UploadTask, DataType

from flask import Blueprint
import uuid
bp = Blueprint('data', __name__, url_prefix='/data')


@bp.route('/data_types/', methods = ['GET'])
def data_types():
    result = DataType.get_all_data_types()
    return response(result)

@bp.route('/data_types/search/', methods = ['GET'])
@bp.route('/data_types/search/<string:search_text>', methods = ['GET'])
def search_data_types(search_text = ""):
    search_result =  DataType.search_data_types(search_text)
    return response(search_result)
