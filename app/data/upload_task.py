import uuid
from datetime import datetime

class UploadTask:
    all_tasks = []
    all_uploads = []
    @staticmethod
    def create_upload_task(device_id, device_type, file_num, manual_uploader):
        if not device_id and not manual_uploader:
            pass
            #raise exception

        task = {
            "taskId": str(uuid.uuid4()),
            "manualUploader": manual_uploader,
            "deviceId": device_id, 
            "deviceType": device_type, 
            "fileNum": file_num,  
            "files":[],
            "startTime": datetime.now(),
            "uploadStatus":"TaskCreated",
            "processingStatus": None}

        UploadTask.all_tasks.append(task)
        return task["taskId"]

    @staticmethod
    def add_upload(task_id, filePath, error):

        tasks = list(filter(lambda t: t["taskId"] == task_id, UploadTask.all_tasks))
        num_file_left = 0
        if len(tasks) == 0:
            pass # upload task not found, raise exception

        task = tasks[0]
        upload_id = str(uuid.uuid4())
        upload_info = {
            "uploadId": upload_id,
            "taskId": task_id,
            "archivePath": filePath,
            "uploadError": error
        }
        UploadTask.all_uploads.append(upload_info)

        task["files"].append(upload_info)
        if len(task["files"]) == task["fileNum"]:
            task["uploadStatus"] = "TaskCompleted"
        else:
            task["uploadStatus"] = "FileBeingUploaded"
            num_file_left = task["fileNum"] - len(task["files"])

        return  upload_id, num_file_left

    @staticmethod
    def get_in_complete_tasks():
        tasks = list( filter(lambda t: t["uploadStatus"] == "TaskCompleted" and t["processingStatus"] != "ProcessingComplete"), UploadTask.all_tasks)
        return tasks

    @staticmethod
    def get_all_tasks():
        return UploadTask.all_tasks

    @staticmethod 
    def seed():
        for i in range(10):
            task_id = UploadTask.create_upload_task(str(uuid.uuid4()), f"device type {i}", 1, "")
            UploadTask.add_upload(task_id, str(uuid.uuid4())+".json", None)
            UploadTask.add_upload(task_id, str(uuid.uuid4())+".json", None)

        for i in range(10):
            task_id = UploadTask.create_upload_task(str(uuid.uuid4()), f"device type {i}", 1, "")
            UploadTask.add_upload(task_id, str(uuid.uuid4())+".json", None)

UploadTask.seed()
