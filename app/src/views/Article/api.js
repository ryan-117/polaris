import axios from '@/util/axios';

export const getArticleAll = () => {
  return axios.get('/jl-api/article/all');
};
export const getArticle = id => {
  return axios.get(`/jl-api/article/${id}`);
};
export const addArticle = article => {
  return axios.post('/jl-api/article/add', article);
};
export const removeArticle = id => {
  return axios.delete(`/jl-api/article/${id}/delete`);
};
export const editArticle = (id, article) => {
  return axios.put(`/jl-api/article/${id}/edit`, article);
};
