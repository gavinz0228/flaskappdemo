from flask import Flask, Blueprint, send_from_directory, send_file
from flask_cors import CORS
from app.api.auth import bp as auth_bp
from app.api.upload import bp as upload_bp
from app.api.stats import bp as stats_bp
from app.api.data import bp as data_bp
from os import path, pardir

from app.api.common import InvalidFileUploadError,NoFilePartFoundError, handle_invalid_file_upload_error

def get_static_blueprint():
    static_bp = Blueprint('static', __name__, url_prefix='')
    curr_dir = path.dirname(path.abspath(__file__))
    static_dir = path.abspath(path.join(curr_dir, pardir,'static/build'))
    print(static_dir)
    @static_bp.route('/')
    def serve_root():
        return send_from_directory(static_dir, 'index.html')
    @static_bp.route('/manifest.json')
    def serve_manifest():
        return send_from_directory(static_dir, 'manifest.json')
    @static_bp.route('/css/<path:css_path>')
    def serve_css(css_path):
        return send_file(path.join(static_dir, "css", css_path))
    @static_bp.route('/js/<path:static_path>')
    def serve_js(static_path):
        return send_file(path.join(static_dir,"js", static_path))
    @static_bp.route('/static/<path:static_path>')
    def serve_static(static_path):
        return send_file(path.join(static_dir,"static", static_path))
    @static_bp.route('/static/js/<path:static_path>')
    def serve_static_js(static_path):
        return send_file(path.join(static_dir,"static","js", static_path))
    @static_bp.route('/static/css/<path:static_path>')
    def serve_static_css(static_path):
        return send_file(path.join(static_dir,"static","css", static_path))
    return static_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(auth_bp)
    app.register_blueprint(upload_bp)
    app.register_blueprint(stats_bp)
    app.register_blueprint(data_bp)
    app.register_blueprint(get_static_blueprint())

    CORS(app)
    app.register_error_handler(InvalidFileUploadError, handle_invalid_file_upload_error)
    app.config.from_object('config.Config')



    return app