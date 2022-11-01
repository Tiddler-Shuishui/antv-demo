import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { X6 } from './components/X6'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { G6demo } from './components/G6demo'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/X6' },
  { path: '/X6', component: X6 },
  { path: '/G6', component: G6demo },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
