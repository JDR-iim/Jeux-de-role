<template>
  <div>
    <h1>Register page</h1>
    <br />
    <input placeholder="Username" v-model="username" type="text" /> <br />
    <br />
    <input placeholder="Email" v-model="email" type="email" /> <br />
    <br />
    <input placeholder="Password" v-model="password" type="password" /> <br />
    <br />
    <button @click="signUp()">Sign up</button>
  </div>
</template>

<script setup>
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

<style scoped></style>
