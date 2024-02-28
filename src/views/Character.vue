<template>
    <div>
      <h1>character list</h1>
      <br />
      <!-- <li v-for="character in characters" :key="character.id">{{ character }}</li> -->
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
                        <button @click="send()" class="mt-10 border-b-highlight">Enregistrer</button>
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
  getSession();
  
  const characters = ref([]);
  const skills = ref([]);
  const physical = ref([]);
  const mental = ref([]);
  const social = ref([]);
  const name = ref("");
  const profession = ref("");
  const autorisation = ref("");
  const hero_points = ref(1);
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
//   async function getcharter() {
//     const { data, error } = await supabase.from("Characters").select();
    
//     if (error) {
//      console.error('Error inserting data into Characters:', error.message);
//     }else{
//         characters.value = data;
//     }
//     // console.log(data)

//   }
  async function send() {
  try {
    const { data, error } = await supabase
      .from('Characters')
      .upsert([{ name: name.value,user_id:account.value, profession: profession.value , physical_traits: physical.value, social_traits: social.value,
        mental_traits: mental.value, physical_resistance: rp.value, social_resistance: rs.value,
        mental_resistance: rm.value, ms: MS.value, ps: PS.value, ss: MS.value, hero_points: hero_points.value}]);

    if (error) {
    //   console.error('Error inserting data into Characters:', error.message);
    } else {
    //   console.log('Data inserted successfully:', data);
    }
  } catch (error) {
    console.error('Error inserting data into Characters:', error.message);
  }
}
  async function getSkills() {
  try {
    const { data, error } = await supabase.from("Skills").select();
    if (error) {
      console.error('Error fetching skills:', error.message);
    } else {
      skills.value = data;
    }
    // console.log(skills.value)

  } catch (error) {
    console.error('Error fetching skills:', error.message);
  }
}
  
  onMounted(() => {
    // getcharter();
    getSkills();
  });
  
  async function getSession() {
      const session = await supabase.auth.getSession();
      account.value = session.data.session.user.id
        console.log(account.value)
  }
  

  </script>
  
  <style scoped></style>
  