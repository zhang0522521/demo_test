const modeUrlObj = {
    'production': {
        baseURL: 'api/',
        authBaseURL: ''
    },
    'development': {
        baseURL: 'api/',
        authBaseURL: ''
    },
    'test': {
        baseURL: 'http://192.168.0.128/visitor/',
        authBaseURL: ''
    }
}
console.log('api/')
console.log(process.env.NODE_ENV)
export default modeUrlObj[process.env.NODE_ENV];