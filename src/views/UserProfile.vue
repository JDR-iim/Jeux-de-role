<template>
  <div>
    <h1 class="text-center mb-12"> Votre Profil </h1>
    <div class="flex h-full justify-between">
      <div class="w-4/12 bg-primary">
        <!-- Agent Info  -->
        <div class="border-2 py-5 px-6 border-highlight">
          <h3 class="text-xl">Informations Agent</h3>
          <div class="flex mt-5 justify-between">
            <p class="subtitle">Nom complet</p>
            <p> {{ account.data.session.user.user_metadata.username }}</p>
          </div>
          <div class="flex my-3 justify-between">
            <p class="subtitle">Adresse mail</p>
            <p> {{ account.data.session.user.email }}</p>
          </div>
          <div class="flex mb-5 justify-between">
            <p class="subtitle">Mot de passe</p>
            <p> ********</p>
          </div>
          <Button>Modifier</Button>
        </div>
        <!-- Agent missions  -->
        <div class="mt-9">
          <h3 class="text-xl">Missions actuelles</h3>
        </div>
      </div>
      <!-- Current Character -->
      <div class="w-6/12 h-fit grid grid-cols-2 gap-10 py-5 px-6 bg-primary border-2 border-highlight">
        <div class=" h-full">
          <h3 class="text-xl mb-5">Personnage actuel</h3>
          <div class="p-3 flex justify-between border-2 border-highlight">
            <p class="subtitle">Physique</p>
            <p>Agile, fort</p>
          </div>
          <div class="p-3 my-4 flex justify-between border-2 border-highlight">
            <p class="subtitle">Mental</p>
            <p>Intelligent, Rusé</p>
          </div>
          <div class="p-3 flex justify-between border-2 border-highlight">
            <p class="subtitle">Social</p>
            <p>charismatique</p>
          </div>
          <div class="p-3 pb-5 mt-4 h-auto border-2 border-highlight">
            <p class="subtitle mb-4">Skills - Compétences</p>
            <p>Combat au corps à corps, Négociation, Tir de précision, Médecine d'urgence.</p>
          </div>
        </div>
        <div class="bg-primary border-2 border-highlight py-5 px-6">
          <div class="flex justify-between">
            <p class="subtitle mb-4">Nom</p>
            <p>-</p>
          </div>
          <div class="flex justify-between">
            <p class="subtitle mb-4">Profession</p>
            <p>-</p>
          </div>
          <div class="flex justify-between">
            <p class="subtitle mb-4">Autorisation</p>
            <p>-</p>
          </div>
          <div class="flex mt-2 justify-between">
            <p class="subtitle mb-4">Résistance Physique</p>
            <p>-</p>
          </div>
          <div class="flex justify-between">
            <p class="subtitle mb-4">Résistance Mental</p>
            <p>-</p>
          </div>
          <div class="flex justify-between">
            <p class="subtitle mb-4">Résistance Social</p>
            <p>-</p>
          </div>
          <div class="flex mt-2 justify-between">
            <div class="flex">
              <p>MP:</p>
              <p class="underline ml-3 underline-offset-2">-</p>
            </div>
            <div class="flex">
              <p>PS:</p>
              <p class="underline ml-3 underline-offset-2">-</p>
            </div>
            <div class="flex">
              <p>MS:</p>
              <p class="underline ml-3 underline-offset-2">-</p>
            </div>
          </div>
          <div>
            <h3 class="text-xl text-center my-6">Points Héroïque : 0/27</h3>
          </div>
          <Button>Télécharger la fiche</Button>
        </div>
      </div>
    </div>
    <p class="hidden" v-if="account">
      Hello
      {{
        account.data.session.user.user_metadata.username
          ? account.data.session.user.user_metadata.username
          : account.data.session.user.email
      }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

import Button from '../components/Button.vue'


const account = ref();
const user_id = ref();
getSession();

const characters = ref([]);

async function getcharter() {
  const { data } = await supabase.from("Characters").select().eq('user_id',user_id.value );
  console.log(data)
  characters.value = data;
}

onMounted(() => {
  getcharter();
});

async function getSession() {
  account.value = await supabase.auth.getSession();
  user_id.value = account.value.data.session.user.id
}
</script>
<style scoped></style>
