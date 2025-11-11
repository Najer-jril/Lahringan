import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/About.vue'),
    // },
    // {
    //   path: '/service',
    //   name: 'service',
    //   component: () => import('../views/Service.vue'),
    // },
    // {
    //   path: '/location',
    //   name: 'location',
    //   component: () => import('../views/Location.vue'),
    // },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: () => import('../views/News.vue'),
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../views/Contact.vue'),
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
