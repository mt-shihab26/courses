import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/views/ContactView.vue'),
        },
        {
            path: '/food',
            name: 'food',
            component: () => import('@/views/FoodView.vue'),
        },
    ],
})

export default router
