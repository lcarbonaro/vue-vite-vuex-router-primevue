import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/components/Home.vue';
import About from '/src/components/About.vue';

const routes = [ 
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

const router = createRouter({
    history: createWebHashHistory(),   // was: createWebHistory(), which gave issues on deployment
    routes,
});

export default router;
