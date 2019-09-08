import {BaseApi} from './BaseApi'
import axios from 'axios'

export class DataApi extends BaseApi{
    static getAllDataTypes(){
        return axios.get(DataApi.BASE_API_URL + 'data/data_types/');
    }
    static searchDataTypes(text){
        return axios.get(DataApi.BASE_API_URL+ 'data/data_types/search/'+ encodeURI(text))
    }
}