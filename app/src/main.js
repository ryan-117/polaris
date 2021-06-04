import Vue from 'vue';
import App from './App';
import router from './router/index';
import store from './store';
import { getCookie } from '@/util/utils';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const token = !!getCookie('token');
    if (!token && this.$route.name !== 'login') {
      this.$router.push({ name: 'login' });
    }
  }
}).$mount('#app');
