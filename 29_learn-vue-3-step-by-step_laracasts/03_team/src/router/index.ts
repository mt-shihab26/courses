import TeamView from '@/views/TeamView.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/team',
            name: 'team',
            component: TeamView,
        },
    ],
});

export default router;
