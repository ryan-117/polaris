import apiService from '@/util/apiService';

export const login = params => {
  return apiService.post('/jl-api/user/login', params);
};
export const getUserAll = () => {
  return apiService.get('/jl-api/user/all');
};
export const addUser = params => {
  return apiService.post('/jl-api/user/add', params);
};
export const register = params => {
  return apiService.post('/jl-api/user/add', params);
};
export const editUser = params => {
  const { userName, phone, password, avatar } = params;
  return apiService.post(`/jl-api/user/edit/${params.id}`, {
    userName,
    phone,
    password,
    avatar
  });
};
export const getUser = id => {
  return apiService.get(`/jl-api/user/${id}`);
};
export const deleteUser = id => {
  return apiService.post(`/jl-api/user/delete/${id}`);
};
export const getUserInfo = () => {
  return apiService.get(`/jl-api/user/getUserInfo`);
};
