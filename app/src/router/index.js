import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import ListUser from '../views/ListUser.vue'
import CreateUser from '../views/CreateUser.vue'
import ListArticle from '../views/ListArticle.vue'
import CreateArticle from '../views/CreateArticle.vue'
import EditArticle from '../views/EditArticle.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.VUE_APP_URL,
  routes: [
    {
      path: '/',
      name: 'main',
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
        {
          path: '/user/list',
          name: 'list-user',
          component: ListUser
        },
        {
          path: '/user/create',
          name: 'create-user',
          component: CreateUser
        },
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
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
