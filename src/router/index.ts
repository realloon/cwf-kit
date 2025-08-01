import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/home/HomeView.vue'
import OffsetCalcView from '@/views/OffsetCalc/OffsetCalcView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/offset-calc',
    name: 'offset-calc',
    component: OffsetCalcView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
