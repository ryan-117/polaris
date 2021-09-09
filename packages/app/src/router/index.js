import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Main from '@/views/Main';
import User from './modules/user';
import Activity from './modules/activity';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.VUE_APP_URL,
  routes: [
    {
      path: '/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        ...User,
        ...Activity
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/workspace/:id',
      name: 'workspace',
      component: () => import('@/views/Activity/Workspace')
    }
  ]
});

export default router;
