from flask import Blueprint, request, jsonify
from flask import current_app as app
from app.api.common.response import response
bp = Blueprint('stats', __name__, url_prefix='/stats')

@bp.route('/upload_stats_by_date', methods = ['GET'])
def upload_stats_by_date():
    stats = {
        "labels":["09/07/2019", "09/08/2019", "09/09/2019", "09/10/2019", "09/11/2019"],
        "datasets": 
        [{
            "label": "Successful Upload Stats",
            "data":[90, 91, 95, 98, 100],
            "borderColor": "green"
        },
        {
            "label": "Error Upload Stats",
            "data":[20, 12, 9, 7, 5],
            "borderColor": "red"
        }
        ]
    }
    return response(stats)
@bp.route('/error_stats_by_device_types', methods = ['GET'])
def error_stats_by_device_types():
    stats = {
        "labels":["Smart Watch", "Sleep Device", "IPhone", "Android", "PC"],
        "datasets": 
        [{
            "label": "Data Upload Stats",
            "data":[90, 91, 95, 98, 100],
            "backgroundColor": ["yellow", "red", "green", "brown", "purple"]
        }]
    }
    return response(stats)
