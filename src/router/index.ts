import { createRouter, createWebHistory } from 'vue-router'
import OverviewView from '@/views/OverviewView.vue'
import PlansView from '@/views/PlansView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/overview',
      name: 'overview',
      component: OverviewView
    },
    {
      path: '/',
      name: 'home',
      component: PlansView
    }
  ]
})

export default router
