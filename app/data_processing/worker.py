
import time
from data_processor import DataProcessor 
class Worker:
    def __init__(self):
        self.data_processor = DataProcessor()
        self.config = None #loads from config file
    def get_message_from_queue(self):
        message = None
        return message

    def remove_message_from_queue(self, message):
        pass

    def process_message(self, message):
        upload_info = message["uploadInfo"]
        fileInfo = upload_info["fileInfo"]
        success, error = self.data_processor.process_file(fileInfo)
        #save error message if there's any
        return success

    def search_and_process(self):
        while True:
            time.sleep(self.config["worker"]["workerSleepInterval"])
            message = self.get_message_from_queue()
            if message:
                success = self.process_message(message)
                if success:
                    self.remove_message_from_queue(message)