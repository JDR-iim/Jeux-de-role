<!-- ChildComponent.vue -->
<template>
    <div>
    <label :for="inputId">{{ labelText }}</label>
    <input :type="inputType" :id="inputId" v-model="value" />
    </div>
</template>

<script>
export default {
    props: {
    inputType: {
        type: String,
        default: 'text' // Définir le type par défaut comme 'text'
    },
    labelText: {
        type: String,
        default: 'Label' // Définir le label par défaut
    }
    },
    data() {
    return {
        value: ''
    };
    },
    computed: {
    inputId() {
        // Générer un ID unique pour l'input basé sur le texte du label
        return `input-${this.labelText.toLowerCase().replace(/\s/g, '-')}`;
    }
    }
};
</script>
