import {BaseApi} from './BaseApi'
import axios from 'axios'

export class StatsApi extends BaseApi{
    static getUploadStatsByDate(){
        return axios.get(StatsApi.BASE_API_URL + 'stats/upload_stats_by_date');
    }
    static getErrorStatsByDeviceTypes(){
        return axios.get(StatsApi.BASE_API_URL + 'stats/error_stats_by_device_types');
    }
}