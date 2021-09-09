import axios from 'axios';
import { getCookie } from './utils.js';
// axios post请求默认Content-type是 application/json
axios.defaults.timeout = 10000; // 10s没响应则认为该请求失败
axios.defaults.withCredentials = true; // 跨域时如果要带上cookie话则需要设置

const responseSuccessHandler = (res) => {
  const { code, message } = res.data;
  if (code === 400) {
    throw new Error(message);
  }
  if (code === 401) {
    throw new Error('登录失效，请重新登陆');
  }
  if (code === 404) {
    throw new Error('接口不存在，请验证');
  }
  if (code === 500) {
    throw new Error('服务器异常，请稍后再试');
  }
  return res.data;
};

const responseFailedHandler = (err) => {
  if ((err.message || '').startsWith('timeout of')) {
    return Promise.reject(new Error('请求超时，请稍后再试'));
  }
  if (err.message === 'Network Error') {
    return Promise.reject(new Error('请求失败，请检查网络或登录状态'));
  }
  return Promise.reject(err);
};

// http request 拦截器 所有请求发出前都需要执行以下代码
axios.interceptors.request.use(
  request => {
    const token = getCookie('token');
    request.headers.Authorization = token;
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(responseSuccessHandler, responseFailedHandler);

export default axios;
