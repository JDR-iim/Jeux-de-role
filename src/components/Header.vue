<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { supabase } from "../lib/supabaseClient";

    // Initialize dropdown visibility
    const isDropdownVisible = ref(false);

    // Get current route using useRoute
    const route = useRoute();

    // Function to toggle dropdown visibility
    function toggleDropdown() {
        isDropdownVisible.value = !isDropdownVisible.value;
    }

    const routesToHide = ['Login', 'Register', 'Home'];

    async function logout() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            alert("Error logging out: " + error.message);
        } else {
            router.push("/login");
        }
    }

    const { isActive } = defineProps({
        isActive: Boolean,
    });

</script>

<template>
    <div class="flex full justify-between items-center mb-6">
        <div class="flex items-center">
            <img src="../assets/img/logo-sentinelle.svg" alt="" :class="{ 'rotate': isActive }" @click="test">
                <span id="text"
                :class="['text-red', 'font-oswald', 'text-xl', 'font-medium', 'ml-3', { 'opacity': isActive }]">{{ isActive ?
                    'SENTINEL' : 'TINSEL' }}</span>
        </div>
        
        <div class="flex items-center" v-if="!routesToHide.includes(route.name)" >
            <div class="mr-4 relative">
                <p class="cursor-pointer" @click="toggleDropdown"
                    :class="{ 'blue-text': isDropdownVisible }">Bonjour Agent
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
}

</style>
