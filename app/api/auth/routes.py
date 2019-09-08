          
from app.api.common import response
from flask import Blueprint
import uuid
bp = Blueprint('auth', __name__, url_prefix='/auth')
@bp.route('/login', methods = ['POST'])
def login():
    return response({"sessionToken": uuid.uuid4()})
