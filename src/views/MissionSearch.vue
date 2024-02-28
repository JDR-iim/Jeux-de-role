<template>
  <div>
    <h1>Mission Search page</h1>
    <br />
    <br />
    <button @click="generateNews()">Generate last 10 news</button> <br /><br />
    <button
      @click="askGPT(newsSelected.content)"
      :disabled="!newsSelected.title"
      :class="newsSelected.title ? 'text-green-500' : 'text-red-500'"
    >
      Générer un scénario
      {{
        newsSelected.title
          ? `à partir de l'article "${newsSelected.title}"`
          : ""
      }}
    </button>
    <br /><br />
    <ul>
      <li
        v-for="n in news"
        :key="n.title"
        class="mt-14 cursor-pointer hover:border-2 p-5 border-green-300"
        @click="newsSelected = n"
      >
        <h3 class="pb-5 text-xl">{{ n.title }}</h3>
        <p class="text-xs">{{ n.content }}</p>
      </li>
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
