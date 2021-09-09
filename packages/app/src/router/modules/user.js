const routes = [
  {
    path: '/user/list',
    name: 'userList',
    component: () => import('@/views/User/ListUser')
  },
  {
    path: '/user/create',
    name: 'create-user',
    component: () => import('@/views/User/CreateUser')
  },
  {
    path: '/user/edit/:id',
    name: 'editUser',
    component: () => import('@/views/User/EditUser')
  }
];

export default routes;
