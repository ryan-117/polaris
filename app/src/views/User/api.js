import axios from '@/util/axios';

export const login = params => {
  return axios.post('/blogapi/user/login', params);
};
export const getUserAll = () => {
  return axios.get('/blogapi/user/all');
};
export const addUser = userinfo => {
  return axios.post('/blogapi/user/add', userinfo);
};
export const register = userinfo => {
  return axios.post('/blogapi/user/add', userinfo);
};
