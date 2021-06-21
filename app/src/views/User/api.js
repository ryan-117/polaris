import axios from '@/util/axios';

export const login = params => {
  return axios.post('/jl-api/user/login', params);
};
export const getUserAll = () => {
  return axios.get('/jl-api/user/all');
};
export const addUser = params => {
  return axios.post('/jl-api/user/add', params);
};
export const register = params => {
  return axios.post('/jl-api/user/add', params);
};
export const editUser = params => {
  const { userName, phone, password } = params;
  return axios.post(`/jl-api/user/edit/${params.id}`, {
    userName,
    phone,
    password
  });
};
export const getUser = id => {
  return axios.get(`/jl-api/user/${id}`);
};
export const deleteUser = id => {
  return axios.post(`/jl-api/user/delete/${id}`);
};
