import {BaseApi} from './BaseApi'
import axios from 'axios'
import sha1 from 'sha1'
export class AuthApi extends BaseApi{
    static login(userName, password){
        return axios.post(AuthApi.BASE_API_URL + 'auth/login', 
            {
                userName: userName,
                password: sha1(password)
            }
        );
    }
}