<template>
  <div>
    <h1>Mission Search page</h1>
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
  import * as openaiapi from "openai";

  const npcs = ref([]);
  const news = ref([]);

  const newsSelected = ref({});
  const scenario = ref("");

  async function getNpcs() {
    const { data } = await supabase.from("npc").select();
    npcs.value = data;
  }

  onMounted(() => {
    getNpcs();
  });

  async function generateNews() {
    fetch(
      "https://api.worldnewsapi.com/search-news?api-key=" +
        import.meta.env.VITE_NEWS_KEY +
        "&language=fr&earliest-publish-date=2024-02-20 00:00:00"
    )
      .then((response) => response.json()) //2
      .then((news) => {
        for (let i = 0; i < 9; i++) {
          this.news.push({
            id: i,
            title: news.news[i].title,
            content: news.news[i].text,
          });
        }
      });
  }

  async function askGPT(content) {
    news.value = [];
    scenario.value = "loading";
    const prompt = `Vous êtes le narrateur d'un jeu de rôle, écris un scénario pour le jeu de rôle autour de cette actualité : ${content}`;

    const openai = new openaiapi.OpenAI({
      apiKey: import.meta.env.VITE_GPT_KEY,
      dangerouslyAllowBrowser: true,
    });

    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content }],
      model: "gpt-3.5-turbo",
    });

    scenario.value = response.choices[0].message.content;
  }
</script>

<style scoped></style>
