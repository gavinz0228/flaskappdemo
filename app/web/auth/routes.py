from flask import Blueprint, request

bp = Blueprint('auth', __name__, url_prefix='/auth')
@bp.route('/login', methods = ('GET', 'POST'))
def login():
    if request.method == "POST":
        return "hello"
    return "Welcome to login"
