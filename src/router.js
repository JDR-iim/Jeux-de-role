// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import MissionSearch from './views/MissionSearch.vue';
import UserProfile from './views/UserProfile.vue';

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
