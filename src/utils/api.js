import http from '../utils/http';
import config from '@/config/index';


export function login(params) {
    return http.post(config.baseURL + 'manager/login ', params)
}