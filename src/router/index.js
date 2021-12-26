import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SendMailToMSE from '@/views/SendMailToMSE.vue'
import Manager from '@/views/Manager.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sendMailToMSE',
    name: 'SendMailToMSE',
    component: SendMailToMSE
  },
  {
    path: '/manager',
    name: 'Manager',
    component: Manager
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
