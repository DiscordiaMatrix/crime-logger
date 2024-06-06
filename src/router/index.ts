import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/PageHome.vue'),
    meta: { name: 'home', icon: 'home', label: 'Home', href: '/home' }
  },
  {
    path: '/map',
    component: () => import('@/views/PageMap.vue'),
    meta: { name: 'map', icon: 'map', label: 'Map', href: '/map' }
  },
  {
    path: '/list',
    component: () => import('@/views/PageList.vue'),
    meta: { name: 'list', icon: 'list', label: 'List', href: '/list' }
  },
  {
    path: '/settings',
    component: () => import('@/views/PageSettings.vue'),
    meta: { name: 'settings', icon: 'cog', label: 'Settings', href: '/settings' }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router