import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './page/AppHome.vue';
import ProjectList from './page/ProjectList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectList
        },
    ]
});

export { router };