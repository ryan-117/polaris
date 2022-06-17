import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import '@/assets/styles/reset.less'
import 'element-plus/dist/index.css'
import App from './App.vue'

createApp(App).use(ElementPlus).mount('#app')
