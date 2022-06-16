import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/joy' : {
        target: 'http://api.pingcc.cn/',
        changeOrigin: true,
        rewrite: path => {
          console.log(path, path.replace(/^\/joy/, ''));
          return path.replace(/^\/joy/, '')
        }
      }
    }
  }
})
