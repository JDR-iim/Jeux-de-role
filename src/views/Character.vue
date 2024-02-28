<template>
    <div>
      <h1>character list</h1>
      <br />
      <li v-for="character in characters" :key="character.id">{{ character }}</li>
  
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
        <div>05</div>

        <div>
            <Button @click="send()" class="mt-10">Enregistrer</Button>
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
  const physical = ref([]);
  const mental = ref([]);
  const social = ref([]);

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
  
  onMounted(() => {
    getcharter();
  });
  
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
  