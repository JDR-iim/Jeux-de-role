<template>
    <div>
      <h1>character list</h1>
      <br />
      <li v-for="character in characters" :key="character.id">{{ character }}</li>
      <li v-for="skill in skills" :key="skill.id">{{ skill.name }}</li>
  
      <br />
  
      <div class="grid grid-cols-3  gap-4">
        <div class="traits">
            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div>
                    <h2>Physique</h2>
                    <div>
                        <ul class="grid grid-rows-2 grid-flow-col gap-2">
                            <li v-for="(caracteristique, index) in physical" :key="index">
                                <input type="checkbox" :id="'checkbox' + index" v-model="caracteristique.checked">
                                <label :for="'checkbox' + index">{{ caracteristique.nom }}</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Mental</h2>
                    <div>
                        <ul class="grid grid-rows-2 grid-flow-col gap-2">
                            <li v-for="(caracteristique, index) in mental" :key="index">
                                <input type="checkbox" :id="'checkbox' + index" v-model="caracteristique.checked">
                                <label :for="'checkbox' + index">{{ caracteristique.nom }}</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Social</h2>
                    <div>
                        <ul class="grid grid-rows-2 grid-flow-col gap-2">
                            <li v-for="(caracteristique, index) in social" :key="index">
                                <input type="checkbox" :id="'checkbox' + index" v-model="caracteristique.checked">
                                <label :for="'checkbox' + index">{{ caracteristique.nom }}</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>Skills</h2>
            <div>
                <ul class="grid grid-rows-2 grid-flow-col gap-2">
                    <li v-for="(caracteristique, index) in social" :key="index">
                        <input type="checkbox" :id="'checkbox' + index" v-model="caracteristique.checked">
                        <label :for="'checkbox' + index">{{ caracteristique.nom }}</label>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div class=" justify-between">
                <div>
                    <div>
                        <div>
                            <label for="name">Nom complet</label>
                            <input class="block mt-4 border-b-2 w-full mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="name" type="text" v-model="name" />
                        </div>
                        <div>
                            <label for="profession">Profession</label>
                            <input class="block mt-4 border-b-2 w-full mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="profession" type="text" v-model="profession" />
                        </div>
                        <div>
                            <label for="autorisation">Autorisation</label>
                            <input class="block mt-4 border-b-2 w-full mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="autorisation" type="text" v-model="autorisation" />
                        </div>
                        <div>
                            <label for="rp">Résistance physique</label>
                            <input class="block mt-4 border-b-2 w-full mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="rp" type="number" v-model="rp" />
                        </div>
                        <div>
                            <label for="rm">Résistance Mentale</label>
                            <input class="block mt-4 border-b-2 w-full mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="rm" type="number" v-model="rm" />
                        </div>
                        <div>
                            <label for="rs">Résistance social</label>
                            <input class="block mt-4 border-b-2 w-full mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="rs" type="number" v-model="rs" />
                        </div>
                        <div class="flex justify-between">
                            <div>
                                <label for="MP">MP</label>
                                <input class="block mt-4 border-b-2 w-7 mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="MP" type="number" v-model="MP" />
                            </div>
                            <div>
                                <label for="PS">PS</label>
                                <input class="block mt-4 border-b-2 w-7 mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="PS" type="number" v-model="PS" />
                            </div>
                            <div>
                                <label for="MS">MS</label>
                                <input class="block mt-4 border-b-2 w-7 mb-10 border-b-highlight bg-transparent focus:outline-none pb-2" id="MS" type="number" v-model="MS" />
                            </div>
                        </div>
                        <Button @click="send()" class="mt-10 border-b-highlight">Enregistrer</Button>
                    </div>
                </div>
                <div class="w-5/12 pb-10">
                    <DescBox />
                </div>
            </div>
        </div>
      </div>

    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { supabase } from "../lib/supabaseClient";
  import { useRouter } from "vue-router";
  
  const account = ref();
  const router = useRouter();
  getSession();
  
  const characters = ref([]);
  const skills = ref([]);
  const physical = ref([]);
  const mental = ref([]);
  const social = ref([]);
  const name = ref("");
  const profession = ref("");
  const autorisation = ref("");
  const rp = ref("");
  const rm = ref("");
  const rs = ref("");
  const MP = ref("");
  const PS = ref("");
  const MS = ref("");

  physical.value = [
  { nom: 'Agile', checked: false },
  { nom: 'Robuste', checked: false },
  { nom: 'Souple', checked: false },
  { nom: 'Rapide', checked: false },
  { nom: 'Endurant', checked: false },
  { nom: 'Athlétique', checked: false },
  // ... Ajoutez les autres caractéristiques avec checked initialisé à false
];
mental.value = [
  { nom: 'Rusé', checked: false },
  { nom: 'Intelligent', checked: false },
  { nom: 'Observateur', checked: false },
  { nom: 'Perspicace', checked: false },
  { nom: 'Analytique', checked: false },
  { nom: 'Ingénieux', checked: false },
  // ... Ajoutez les autres caractéristiques avec checked initialisé à false
];
social.value = [
  { nom: 'Charismatique', checked: false },
  { nom: 'Leader naturel', checked: false },
  { nom: 'Diplomate', checked: false },
  { nom: 'Manipulateur', checked: false },
  { nom: 'Discret', checked: false },
  { nom: 'Eloquent', checked: false },
  // ... Ajoutez les autres caractéristiques avec checked initialisé à false
];
  async function getcharter() {
    const { data } = await supabase.from("Characters").select();
    console.log(data)
    characters.value = data;
  }
  async function getSkills() {
    const { skillsdata } = await supabase.from("Skills").select();
    console.log(skillsdata)
    skills.value = data;
  }
  onMounted(() => {
    getcharter();
    getSkills();
  });
  
  async function getSession() {
    account.value = await supabase.auth.getSession();
  }
  

  </script>
  
  <style scoped></style>
  