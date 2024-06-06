import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '@/components/Tabs.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/PageHome.vue')
      },
      {
        path: 'map',
        component: () => import('@/views/PageMap.vue')
      },
      {
        path: 'list',
        component: () => import('@/views/PageList.vue')
      }
    ]
  },
  {
    path: '/settings',
    component: () => import('@/views/PageSettings.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
