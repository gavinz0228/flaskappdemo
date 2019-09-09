import {BaseApi} from './BaseApi'
import axios from 'axios'

export class FileUploadApi extends BaseApi{
    static uploadFile(taskId, file, progressChangeCallback){

        let formData = new FormData();
        formData.append('file', file);

        return axios.post(
            FileUploadApi.BASE_API_URL + 'upload/perform_task/'+ taskId,
            formData,
            {
                headers: {
                'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressChangeCallback
            }
        );
    }
    static getUploadStats(){
        return axios.get(FileUploadApi.BASE_API_URL + 'upload/successful_upload_stats');
    }
    static getAllUploadTasks(){
        return axios.get(FileUploadApi.BASE_API_URL + 'upload/tasks');
    }
    static createUploadTask(deviceId, deviceType, fileNum, technicianId){
        return axios.post(FileUploadApi.BASE_API_URL + 'upload/tasks', 
        {
            "deviceId" : deviceId,
            "deviceType" : deviceType,
            "fileNum" : fileNum,
            "manualUploader": technicianId
        },
        {
            headers: {'Access-Control-Allow-Origin': '*'}
        });
    }
}