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
export const editUser = params => {
  const { userName, phone, password } = params;
  return axios.post(`/blogapi/user/edit/${params.id}`, {
    userName,
    phone,
    password
  });
};
export const getUser = id => {
  return axios.get(`/blogapi/user/${id}`);
};
export const deleteUser = id => {
  return axios.post(`/blogapi/user/delete/${id}`);
};
