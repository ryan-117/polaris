import ListArticle from '@/views/Article/ListArticle.vue';
import CreateArticle from '@/views/Article/CreateArticle.vue';
import EditArticle from '@/views/Article/EditArticle.vue';

const routes = [
  {
    path: '/articles/index',
    name: 'list-articles',
    component: ListArticle
  },
  {
    path: '/articles/create',
    name: 'create-articles',
    component: CreateArticle
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-articles',
    component: EditArticle
  }
];

export default routes;