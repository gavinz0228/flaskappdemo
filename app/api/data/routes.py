          
from app.api.common import response
from flask import Blueprint
import uuid
bp = Blueprint('data', __name__, url_prefix='/data')

@bp.route('/data_types/', methods = ['GET'])
def data_types():
    return response(all_data_types)

@bp.route('/data_types/search/', methods = ['GET'])
@bp.route('/data_types/search/<string:search_text>', methods = ['GET'])
def search_devices(search_text = ""):
    search_text = search_text.lower()
    def search(data_type):
        if search_text in data_type["dataTypeName"].lower() or search_text in data_type["deviceBrand"].lower() or search_text in data_type["deviceType"].lower()  or search_text in data_type["dataType"].lower():
            return True
        return False
    if search_text:
        result = list(filter(search, all_data_types))
    else:
        result = all_data_types
    return response(result)

all_data_types = [
    {
        "dataTypeId": 1,
        "dataTypeName": "Fitbit Watch Sleep Data",
        "deviceBrand": "Fitbit",
        "deviceType": "Smart Watch",
        "dataType": "Sleep Data"
    },
    {
        "dataTypeId": 2,
        "dataTypeName": "Fitbit Watch Sleep Hear Rate Data",
        "deviceBrand": "fitbit",
        "deviceType": "Smart Watch",
        "dataType": "Heart Rate Data"
    },
    {
        "dataTypeId": 3,
        "dataTypeName": "Awesome Sleep Monitor",
        "deviceBrand": "Awesome Company",
        "deviceType": "Sleep Monitor",
        "dataType": "Sleep Data"
    },
    {
        "dataTypeId": 4,
        "dataTypeName": "Iphone Sleep Data",
        "deviceBrand": "Apple",
        "deviceType": "Mobile Phone",
        "dataType": "Sleep Data"
    },
    {
        "dataTypeId": 5,
        "dataTypeName": "Android Sleep Data",
        "deviceBrand": "Google",
        "deviceType": "Mobile Phone",
        "dataType": "Sleep Data"
    }
]