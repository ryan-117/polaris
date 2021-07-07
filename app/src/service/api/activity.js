import axios from '@/util/axios';

export const getActivityAll = () => {
  return axios.get('/jl-api/activity/all');
};
export const getActivity = id => {
  return axios.get(`/jl-api/activity/${id}`);
};
export const addActivity = params => {
  return axios.post('/jl-api/activity/add', params);
};
export const removeActivity = id => {
  return axios.delete(`/jl-api/activity/delete/${id}`);
};
export const editActivity = (id, params) => {
  return axios.put(`/jl-api/activity/edit/${id}`, params);
};
