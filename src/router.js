// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/mission-search',
        name: 'MissionSearch',
        component: MissionSearch
    },
    {
        path: '/user-profile',
        name: 'UserProfile',
        component: UserProfile
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
