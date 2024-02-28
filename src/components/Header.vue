<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "vue-router";

const router = useRouter();

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
const account = ref();
getSession();

async function getSession() {
  account.value = await supabase.auth.getSession();
  console.log(account);
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

<template>
  <div class="flex full justify-between items-center mb-6">
    <div>Logo à venir</div>
    <div class="flex items-center" v-if="requiresAuth">
      <div class="mr-4 relative">
        <p
          v-if="account"
          class="cursor-pointer"
          @click="toggleDropdown"
          :class="{ 'blue-text': isDropdownVisible }"
        >
          Agent {{ account.data.session.user.user_metadata.username }}
        </p>
        <div
          v-if="isDropdownVisible"
          class="profilDropdown bg-white text-black p-2 absolute top-8 right-0"
        >
          <router-link class="w-full py-2 px-10 cursor-pointer" to="/profile"
            >Profil</router-link
          >
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
  background: url("../assets/img/profil.jpeg");
  background-size: contain;
  border: 2px solid #0a98ff;
}

.blue-text {
  color: #0a98ff;
}

p:hover,
a:hover {
  color: #0a98ff;
}
</style>
