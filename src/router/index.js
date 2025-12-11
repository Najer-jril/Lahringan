import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ServicePage from '../views/ServicePage.vue'
import LocationPage from '../views/LocationPage.vue'
import LocationDetailPage from '../views/LocationDetailPage.vue'
import NewsPage from '../views/NewsPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import NewsDetailPage from '../views/NewsDetailPage.vue'
import COTSPage from '@/views/COTSPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/service',
      name: 'service',
      component: ServicePage,
    },
    {
      path: '/location',
      name: 'location',
      component: LocationPage,
    },
    {
      path: '/location/:id',
      name: 'location-detail',
      component: LocationDetailPage,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsPage,
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: NewsDetailPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/cots',
      name: 'cots',
      component: COTSPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth'}
    }
  },
})

export default router
