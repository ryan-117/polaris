import ListUser from '@/views/User/ListUser.vue';
import CreateUser from '@/views/User/CreateUser.vue';

const routes = [
  {
    path: '/user/list',
    name: 'list-user',
    component: ListUser
  },
  {
    path: '/user/create',
    name: 'create-user',
    component: CreateUser
  }
];

export default routes;