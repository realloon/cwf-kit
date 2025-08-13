import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home/HomeView.vue'
import GuideView from '@/views/Guide/GuideView.vue'
import ModulesView from '@/views/Modules/ModulesView.vue'
import OffsetCalcView from '@/views/OffsetCalc/OffsetCalcView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuideView,
    },
    {
      path: '/modules',
      name: 'modules',
      component: ModulesView,
    },
    {
      path: '/offset-calc',
      name: 'offset-calc',
      component: OffsetCalcView,
    },
  ],
})

export default router
