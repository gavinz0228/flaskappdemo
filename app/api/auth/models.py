import uuid
class User:
    @staticmethod
    def authenticate(user_name, password):
        return uuid.uuid4(), True