import { createRouter, createWebHistory } from 'vue-router';
import Introduce from '../views/Client/Introduce.vue';
import Agricultural_information from '../views/Client/Agricultural_information.vue';

const routes = [
    {
        path: '/',
        name: 'Introduce',
        component: Introduce
    },
    {
        path: '/Agricultural_information',
        name: 'Agricultural_information',
        component: Agricultural_information
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

export default router;