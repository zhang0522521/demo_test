import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */


export function login(params) {
    return http.post('api/manager/login ', params)
}