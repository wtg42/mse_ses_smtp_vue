import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SendMailToMSE from '../views/SendMailToMSE'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sendMailToMSE',
    name: 'sendMailToMSE',
    component: SendMailToMSE
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
