import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import AboutView from '@/views/AboutView/AboutView.vue'
import ApiView from '@/views/ApiView/ApiView.vue'
import PageOne from '../../views/PageView/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/apiView',
      name: 'apiView',
      component: ApiView
    },
    {
      path: '/page1',
      name: 'users',
      component: PageOne
    },
  ]
})

export default router
