import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.scss'
import './style/icon.css'
import './iconfont/iconfont.js'

createApp(App).use(store).use(router).mount('#app')
