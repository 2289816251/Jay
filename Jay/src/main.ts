import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import mitt from 'mitt'

import App from './App.vue'
import router from './router'

// 引入图片懒加载
import lazyPlugin from 'vue3-lazy'

const app = createApp(App)

// 配置懒加载
lazyPlugin.install(app, {
  loading: '/src/assets/images/loading.gif',
  error: '/src/assets/images/error.png'
})

app.use(createPinia())
app.use(router)

app.config.globalProperties.$mybus = mitt()

app.mount('#app')
