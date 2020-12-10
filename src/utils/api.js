import http from '../utils/http';



export function login(params) {
    return http.post('api/manager/login ', params)
}