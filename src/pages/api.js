var axios = require('axios')
const baseURL = process.env.baseURL || "/api"
const create = function() {
    let http = axios.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
    // 请求拦截器
    http.interceptors.request.use(config => {
        // debugger;
        // if (config.method === 'post') {
        //     config.data = JSON.stringify(config.data)
        // }
        // const token = localStorage.getItem('token');
        // if(token){
        //     config.headers = {
        //         cookie: `token=${token}`
        //     }
        // }

        return config
    }, error => {
        return Promise.reject(error)
    })

    // 响应拦截器
    http.interceptors.response.use(response => {
        // debugger;
        // 响应状态统一处理
        return response;
        // if (response.data.retCode == 200) {
        //     return response;
        // } else if (response.data.retCode == -200) {
        //     window.location.replace('/sangjie/panel/login');
        //     // Vue.prototype.$router.replace('/login');
        // }
    }, error => {
        return Promise.reject(error)
    })

    return http
}
const instance = create();

// const get = (url) => {
//     return (data) => {
//         return (config) => {
//             return instance.get(url, data, config);
//         }
//     }
// };
const post = (data) => {
    return (data) => {
        return (config) => {
            return instance.post(url, data, config);
        }
    }
}
const apis = {
    //官网注册电话号码领优惠
    network: post('/merchant/network')
}
const request = function(name, data, config) {
    return apis[name](data)(config)
}
export default request