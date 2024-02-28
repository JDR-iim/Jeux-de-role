// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Game from './views/Game.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import MissionSearch from './views/MissionSearch.vue';
import UserProfile from './views/UserProfile.vue';
import { supabase } from './lib/supabaseClient';

let localUser;

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home ,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/mission-search',
        name: 'MissionSearch',
        component: MissionSearch,
        meta: { requiresAuth: true }
    },
    {
        path: '/Game',
        name: 'Game',
        component: Game,
        meta: { requiresAuth: true }
    },
    {
        path: '/profile',
        name: 'UserProfile',
        component: UserProfile,
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

async function getUser(next) {
    localUser = await supabase.auth.getSession();
    if(localUser.data.session == null) {
        next('/login');
    } else {
        next();
    }
}

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth) {
        getUser(next);
    } else {
        next();
    }
});


export default router;
