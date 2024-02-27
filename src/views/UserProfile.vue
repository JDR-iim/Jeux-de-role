<template>
  <div>
    <h1>User profile page</h1>
    <br />
    <p v-if="account">
      Hello
      {{
        account.data.session.user.user_metadata.username
          ? account.data.session.user.user_metadata.username
          : account.data.session.user.email
      }}
    </p>
    <br />
    <button @click="logout()">Logout</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "vue-router";

const account = ref();
const router = useRouter();
getSession();

async function getSession() {
  account.value = await supabase.auth.getSession();
}

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert("Error logging out: " + error.message);
  } else {
    router.push("/login");
  }
}
</script>

<style scoped></style>
