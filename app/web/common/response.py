from flask import jsonify,Response

def response(data):
    res = {}
    res["data"] = data
    res["errorMessage"] = None
    res["statusCode"] = 200
    return jsonify(res), 200, {'ContentType':'application/json'}
def error_response(error_msg, status_code):
    res = {}
    res["data"] = ""
    res["errorMessage"] = error_msg
    res["statusCode"] = status_code
    return jsonify(res), status_code, {'ContentType':'application/json'}