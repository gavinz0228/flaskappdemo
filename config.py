from os import path
curr_dir = path.abspath(path.dirname(__file__))

class Config(object):
    DEBUG = True
    TEMP_UPLOAD_PATH = path.join(curr_dir, 'app', 'archive')
    ALLOWED_UPLOAD_FILE_FORMAT = set([".csv", ".json"])


class ProductionConfig(Config):
    DEBUG = False