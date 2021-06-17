import axios from '@/util/axios';

export const getActivityAll = () => {
  return axios.get('/blogapi/activity/all');
};
export const getActivity = id => {
  return axios.get(`/blogapi/activity/${id}`);
};
export const addActivity = params => {
  return axios.post('/blogapi/activity/add', params);
};
export const removeActivity = id => {
  return axios.delete(`/blogapi/activity/${id}/delete`);
};
export const editActivity = (id, params) => {
  return axios.put(`/blogapi/activity/${id}/edit`, params);
};
