<template>
  <div id="app">
    <router-link to="/">Accueil</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/mission-search">Mission Search</router-link>
    <router-link to="/user-profile">User profile</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// Importez les composants nécessaires de Vue Router
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  // Vous pouvez ajouter des scripts ou des méthodes ici si nécessaire
});
</script>

<style>
/* Ajoutez votre CSS ici */
</style>
