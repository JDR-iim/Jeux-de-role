<template>
    <div class="flex justify-between">
        <div class="w-3/12 mt-5">
            <h1>Inscription</h1>
            <p class="mt-5">Rejoignez nos d'agents et plonger au cœur de l'action !</p>
            <div class="mt-10">
                <div>
                    <label for="username">Nom complet</label>
                    <input class="block mt-4 border-b-2 w-full mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="username" type="text" v-model="username" />
                </div>
                <div>
                    <label for="email">Adresse e-mail</label>
                    <input class="block mt-4 border-b-2 w-full mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="email" type="email" v-model="email" />
                </div>
                <div>
                    <label for="password">Mot de passe</label>
                    <input class="block mt-4 border-b-2 w-full mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="password" type="password" v-model="password" />
                </div>
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
    import DescBox from '../components/DescBox.vue'
    import Button from '../components/Button.vue'

    import { ref } from "vue";
    import { supabase } from "../lib/supabaseClient";
    import { useRouter } from "vue-router";

    const username = ref("");
    const email = ref("");
    const password = ref("");
    const router = useRouter();

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
            console.log("Sign up successful");
            router.push("/mission-search");
        }
    }
</script>
