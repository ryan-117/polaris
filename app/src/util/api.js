import axios from '@/util/axios';
const api = {
  login(params) {
    return axios.post('/blogapi/user/login', params);
  },
  getUserAll() {
    return axios.get('/blogapi/user/all');
  },
  addUser(userinfo) {
    return axios.post('/blogapi/user/add', userinfo);
  },
  register(userinfo) {
    return axios.post('/blogapi/user/add', userinfo);
  },
  getArticleAll() {
    return axios.get('/blogapi/article/all');
  },
  getArticle(id) {
    return axios.get(`/blogapi/article/${id}`);
  },
  addArticle(article) {
    return axios.post('/blogapi/article/add', article);
  },
  removeArticle(id) {
    return axios.delete(`/blogapi/article/${id}/delete`);
  },
  editArticle(id, article) {
    return axios.put(`/blogapi/article/${id}/edit`, article);
  }
};
export default api;
