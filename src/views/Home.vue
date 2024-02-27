<template>
    <div>
        <h1 class="text-6xl mb-20">Découvrez l'actualité dans le monde </h1>
    </div>
    <div class="flex flex-wrap gap-8">
        <NewsComponent
            title="Découverte Étonnante : Les Chats Capables de Communiquer par Télépathie avec Leurs Propriétaires"
            text="Une étude révolutionnaire menée par des chercheurs de renom a révélé que les chats peuvent en fait communiquer avec leurs propriétaires par télépathie. Selon les résultats de l'étude, les chats sont capables de transmettre des pensées simples à leurs humains, comme des demandes de nourriture ou des désirs de câlins."
            bg="cat" width="6" />

        <NewsComponent title="Un Nouveau Continent Émergerait au Milieu de l'Océan Pacifique, Selon les Scientifiques"
            text="Des scientifiques de l'Institut de Géologie Marine ont annoncé la découverte d'un nouveau continent émergeant au milieu de l'océan Pacifique. Les premières observations suggèrent que ce nouveau continent pourrait avoir des caractéristiques uniques, y compris une biodiversité extraordinaire et des ressources naturelles inexploitées."
            bg="beach" width="5" />
    </div>

    <div class="flex flex-wrap gap-8 mt-8">


        <NewsComponent title="Des Archéologues Découvrent une Cité Perdue Sous les Glaces de l'Antarctique"
            text="Une équipe d'archéologues a fait une découverte extraordinaire en Antarctique en mettant au jour les ruines d'une ancienne cité perdue sous les glaces. Les premières estimations suggèrent que cette cité aurait été habitée il y a des milliers d'années par une civilisation avancée, remettant en question nos connaissances sur l'histoire de l'humanité."
            bg="ice" width="5" />


        <div class="p-6 bg-center border border-highlight text-left"
            :style="{ 'background-image': 'url(\'src/assets/img/home-tulip.jpg\')', 'flex': '3' }">
            <p class="text-2xl font-oswald mb-4">Ils recherchent un gardien d’outils pour les tulipes</p>
            <input type="text" name="secret-code" v-model="secretCodeInput"
                class="bg-transparent border-b w-full border-highlight">
            <ButtonComponent v-model="secretCodeBtn" @click="submit()" title="Valider" class="w-full" />
        </div>

        <NewsComponent title="Des Astronomes Détectent des Signaux Mystérieux en Provenance d'une Galaxie lointaine"
            text="Une équipe d'astronomes a capté des signaux étranges en provenance d'une galaxie lointaine, suscitant l'excitation et la spéculation dans la communauté scientifique. Ces signaux, d'une nature encore inconnue, défient toute explication conventionnelle et pourraient potentiellement provenir d'une civilisation extraterrestre avancée."
            bg="earth" width="6" />
    </div>
</template>

<script setup>
import ButtonComponent from '../components/ButtonComponent.vue';
import NewsComponent from '../components/NewsComponent.vue';
import { useRouter } from "vue-router";
import { ref } from 'vue';
import { useStore } from 'vuex';
import * as openaiapi from "openai";

const router = useRouter();
const secretCodeInput = ref("");
const store = useStore();

async function askGPT(content) {
  const openai = new openaiapi.OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content }],
    model: "gpt-3.5-turbo",
  });

  alert(response.choices[0].message.content);
}

const submit = () => {
    if (secretCodeInput.value === 'S.E.N.T.I.N.E.L') {
        store.dispatch('setIsActive', true);
        router.push('/login')
    } else {
        store.dispatch('setIsActive', false);
    }
};
</script>
<style scoped></style>