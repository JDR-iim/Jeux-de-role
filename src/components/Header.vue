
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from "../lib/supabaseClient";

const { isActive } = defineProps({
    isActive: Boolean,
});


// Initialize dropdown visibility
const isDropdownVisible = ref(false);

// Get current route using useRoute
const route = useRoute();

// Function to toggle dropdown visibility
function toggleDropdown() {
    isDropdownVisible.value = !isDropdownVisible.value;
}
// Get current route name
const currentRouteName = route.name;

// Check if current route requires authentication
const requiresAuth = route.meta.requiresAuth || true;
</script>

<template>
    <div class="flex full justify-between items-center mb-6">
        <div class="flex items-center">
            <img src="../assets/img/logo-sentinelle.svg" alt="" :class="{ 'rotate': isActive }" @click="test">
            <span id="text"
                :class="['text-red', 'font-oswald', 'text-xl', 'font-medium', 'ml-3', { 'opacity': isActive }]">{{ isActive ?
                    'SENTINEL' : 'TINSEL' }}</span>
        </div>
        <div class="flex items-center" v-if="requiresAuth">
            <div class="mr-4 relative">
                <p v-if="account" class="cursor-pointer" @click="toggleDropdown"
                    :class="{ 'blue-text': isDropdownVisible }">Agent {{ account.data.session.user.user_metadata.username }}
                </p>
                <div v-if="isDropdownVisible" class="profilDropdown bg-white text-black p-2 absolute top-8 right-0">
                    <router-link class=" w-full py-2 px-10 cursor-pointer" to="/profile">Profil</router-link>
                    <p class="cursor-pointer py-2 px-5" @click="logout()">Deconnexion</p>
                </div>
            </div>
            <div class="profilImg"></div>
        </div>
    </div>
</template>

<style scoped>
* {
    transition: all 0.2s ease-out;
}

.profilImg {
    background-color: antiquewhite;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: url('../assets/img/profil.jpeg');
    background-size: contain;
    border: 2px solid #0A98FF;
}

.blue-text {
    color: #0A98FF;
}

p:hover {
    color: #0A98FF;
}

.rotate {
    animation: rotateAnimation 1.5s linear forwards;
}

@keyframes rotateAnimation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(180deg);
    }
}

.opacity {
    animation: opacityAnimation 1.5s linear forwards;
}

@keyframes opacityAnimation {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}</style>
