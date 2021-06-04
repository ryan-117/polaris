import axios from '@/util/axios';

export const getArticleAll = () => {
  return axios.get('/blogapi/article/all');
};
export const getArticle = id => {
  return axios.get(`/blogapi/article/${id}`);
};
export const addArticle = article => {
  return axios.post('/blogapi/article/add', article);
};
export const removeArticle = id => {
  return axios.delete(`/blogapi/article/${id}/delete`);
};
export const editArticle = (id, article) => {
  return axios.put(`/blogapi/article/${id}/edit`, article);
};
