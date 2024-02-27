<template>
  <div>
    <h1>Login page</h1>
    <br />
    <input placeholder="Email" v-model="email" type="email" /> <br />
    <br />
    <input placeholder="Password" v-model="password" type="password" /> <br />
    <br />
    <button @click="signIn()">Sign in</button>
  </div>
</template>

<script setup>
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

<style scoped></style>
