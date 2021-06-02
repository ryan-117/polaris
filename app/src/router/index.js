import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Main from '../views/Main.vue';
import Login from '../views/Login.vue';
import User from './modules/user';
import Article from './modules/article';

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
        ...Article
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});

export default router;
