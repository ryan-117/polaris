import axios from 'axios';
import utils from './utils.js';
// axios post请求默认Content-type是 application/json
axios.defaults.timeout = 10000; // 10s没响应则认为该请求失败
axios.defaults.withCredentials = true; // 跨域时如果要带上cookie话则需要设置withCrendentials
// http request 拦截器 所有请求发出前都需要执行以下代码
axios.interceptors.request.use(
  request => {
    const token = utils.getCookie('token');
    request.headers.Authorization = token;
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

// http response 拦截器 所有请求返回结果后都需要执行以下代码
axios.interceptors.response.use(
  response => {
    // 此处可对token过期等公用错误状态码进行处理
    if (response.data.code === 999) {
      console.log('token过期');
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
