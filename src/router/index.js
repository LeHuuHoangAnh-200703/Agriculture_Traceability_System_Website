import { createRouter, createWebHistory } from 'vue-router';
import Introduce from '../views/Client/Introduce.vue';
import Agricultural_information from '../views/Client/Agricultural_information.vue';
import Admin_Introduce from '../views/Admin/Admin_Introduce.vue';

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
    {
        path: '/admin/Admin_Introduce',
        name: 'Admin_Introduce',
        component: Admin_Introduce
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

export default router;