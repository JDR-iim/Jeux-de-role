
<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

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
    const requiresAuth = route.meta.requiresAuth || false;
</script>

<template>
    <div class="flex full justify-between items-center mb-6">
        <div>Logo à venir</div>
        <div class="flex items-center" v-if="requiresAuth">
            <div class="mr-4 relative">
                <p class="cursor-pointer" @click="toggleDropdown" :class="{ 'blue-text': isDropdownVisible }">Agent Adam</p>
                <div v-if="isDropdownVisible" class="profilDropdown bg-white text-black p-2 absolute top-8 right-0">
                    <p class="mb-2 cursor-pointer">Mon profil</p>
                    <p class="cursor-pointer">Deconnexion</p>
                </div>
            </div>
            <div class="profilImg"></div>
        </div>
    </div>
</template>

<style scoped>

*{
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

p:hover{
    color: #0A98FF;
}
</style>
