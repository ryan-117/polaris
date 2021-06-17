const routes = [
  {
    path: '/articles/index',
    name: 'list-articles',
    component: () => import('@/views/Article/ListArticle')
  },
  {
    path: '/articles/create',
    name: 'create-articles',
    component: () => import('@/views/Article/CreateArticle')
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-articles',
    component: () => import('@/views/Article/EditArticle')
  }
];

export default routes;
