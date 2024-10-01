import { createRouter, createWebHistory } from 'vue-router';
import Introduce from '../views/Client/Introduce.vue';

const routes = [
    {
        path: '/',
        name: 'Introduce',
        component: Introduce
    },
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

export default router;