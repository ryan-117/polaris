import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import utils from './utils/utils.js'
import api from '@/utils/api.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$utils = utils
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    const token = !!this.$utils.getCookie('token')
    if (!token && this.$route.name !== 'login') {
      this.$router.push({ 'name': 'login' })
    }
  }
}).$mount('#app')
