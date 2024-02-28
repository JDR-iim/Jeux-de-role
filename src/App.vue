<template>
  <div id="app" class="mx-16 m-10">
    <Header :isActive="isActive" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isActive = computed(() => store.state.isActive);
</script>

<style></style>
