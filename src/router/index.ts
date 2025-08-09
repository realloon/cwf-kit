import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home/HomeView.vue'
import OffsetCalcView from '@/views/OffsetCalc/OffsetCalcView.vue'
import ModulesView from '@/views/Modules/ModulesView.vue'

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
  {
    path: '/modules',
    name: 'modules',
    component: ModulesView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
