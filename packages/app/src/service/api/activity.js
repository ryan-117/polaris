import apiService from '@/util/apiService';

export const getActivityAll = () => apiService.get('/jl-api/activity/all');
export const getActivity = id => apiService.get(`/jl-api/activity/${id}`);
export const addActivity = params => apiService.post('/jl-api/activity/add', params);
export const removeActivity = id => apiService.delete(`/jl-api/activity/delete/${id}`);
export const editActivity = (id, params) => apiService.put(`/jl-api/activity/edit/${id}`, params);
