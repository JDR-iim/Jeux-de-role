<template>
  <div>
    <h1>Mission Search page</h1>
    <ul>
      <li v-for="npc in npcs" :key="npc.id">{{ npc.name }}</li>
      <li>Test</li>
    </ul>
  </div>
    <div>
        <h1>Mission Search page</h1>
        <CarouselVue/>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";
import MissionCarousel from '../components/MissionCarousel.vue';
import CarouselVue from "../components/three/Carousel.vue";

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
