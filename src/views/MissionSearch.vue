<template>
  <div>
    <h1>Mission Search page</h1>
    <ul>
      <li v-for="npc in npcs" :key="npc.id">{{ npc.name }}</li>
      <li>Test</li>
    </ul>
  </div>
  <div>
      <CarouselVue/>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";
import CarouselVue from "../components/Carousel.vue";

const npcs = ref([]);

async function getNpcs() {
  const { data } = await supabase.from("npc").select();
  npcs.value = data;
}

onMounted(() => {
  getNpcs();
});
</script>

<style scoped></style>
