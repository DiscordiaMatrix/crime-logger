import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/PageHome.vue'),
    meta: { name: 'home', icon: 'home', label: 'Home', href: '/home' }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/PageMap.vue'),
    meta: { name: 'map', icon: 'map', label: 'Map', href: '/map' }
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/PageList.vue'),
    meta: { name: 'list', icon: 'list', label: 'List', href: '/list' }
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/PageSettings.vue'),
    meta: { name: 'settings', icon: 'cog', label: 'Settings', href: '/settings', requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/PageLogin.vue'),
    meta: { name:'login', icon: 'user', label: 'Login', href: '/login', requiresAuth: false }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router