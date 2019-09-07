from werkzeug.exceptions import HTTPException
class InvalidFileUploadError(HTTPException):
    code = 400
    description = "File upload error"

class NoFilePartFoundError(InvalidFileUploadError):
    description = "No file part was found in the request"

class NoFileNameFoundError(InvalidFileUploadError):
    description = "No file was sent from the client side"

class FileFormatNotAllowedError(InvalidFileUploadError):
    description = "File format is not allowed"