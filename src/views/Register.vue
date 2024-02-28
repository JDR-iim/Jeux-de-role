<template>
    <div class="flex justify-between">
        <div class="w-3/12 mt-5">
            <h1>Inscription</h1>
            <p class="mt-5">Rejoignez nos d'agents et plonger au cœur de l'action !</p>
            <div class="mt-10">
                <Input inputType="text" v-model="username" labelText="Nom complet"  class="mb-10" />
                <Input inputType="email" v-model="email" labelText="Adresse e-mail"  class="mb-10" />
                <Input inputType="password" v-model="password" labelText="Mot de passe"  />
                <Button class="mt-10" @click="signUp()">Je me connecte</Button>
            </div>
            <div class="w-full text-center mt-8">
                <router-link class=" underline underline-offset-1" to="/login">S'identifier</router-link>
            </div>
        </div>
        <div class="w-5/12 pb-10">
            <DescBox />
        </div>
    </div>
</template>

<script setup>
    import Input from '../components/Input.vue'
    import DescBox from '../components/DescBox.vue'
    import Button from '../components/Button.vue'

    import { ref } from "vue";
    import { supabase } from "../lib/supabaseClient";

    const username = ref("");
    const email = ref("");
    const password = ref("");

    async function signUp() {
        const { data, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            options: {
            data: {
                username: username.value,
            },
            },
        });

        if (error) {
            console.error("Error signing up:", error);
            alert("Error signing up : " + error.message);
        } else {
            alert("Sign up successful");
        }
    }
</script>
