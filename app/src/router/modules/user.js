import ListUser from '@/views/User/ListUser.vue';
import CreateUser from '@/views/User/CreateUser.vue';
import EditUser from '@/views/User/EditUser';

const routes = [
  {
    path: '/user/list',
    name: 'userList',
    component: ListUser
  },
  {
    path: '/user/create',
    name: 'create-user',
    component: CreateUser
  },
  {
    path: '/user/edit/:id',
    name: 'editUser',
    component: EditUser
  }
];

export default routes;
