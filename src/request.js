import axios from 'axios';//axios 基于promise

axios.interceptors.request.use(function(config){//给请求加拦截器
    config.headers.a=1;//每次请求加上一个头
    return config;
});
//拦截器就是promise  返回成功 把结果作为下一次promise的结果
axios.interceptors.response.use(function(res){
    if(res.data.code===0){//code为0的时候 返回数据
        return res.data.users
    }else{//code不为0 走reject
        return Promise.reject('错误');
    }
});

export default axios;