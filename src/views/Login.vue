<template>
    <div class="flex justify-between">
        <div class="w-3/12 mt-5">
            <h1>Identification</h1>
            <p class="mt-5">Bon retour, agent. Veuillez saisir vos informations d'identification ci-dessous.</p>
            <div class="mt-10">
                <Input inputType="email"  v-model="email" labelText="Identifiant (mail)"  class="mb-10" />
                <Input inputType="password" v-model="password" labelText="Mot de passe"  />
                <Button @click="signIn()" class="mt-10">Je me connecte</Button>
            </div>
            <div class="w-full text-center mt-8">
                <router-link class=" underline underline-offset-1" to="/register">Rejoindre l'agence</router-link>
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
    import { useRouter } from "vue-router";

    const email = ref("");
    const password = ref("");
    const router = useRouter();

    async function signIn() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });

        if (error) {
            alert("Error logging in : " + error.message);
        } else {
            router.push("/");
        }
    }
</script>

