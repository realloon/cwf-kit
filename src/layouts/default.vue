<script setup lang="ts">
import AppHeader from './components/AppHeader/AppHeader.vue'
</script>

<template>
  <app-header />

  <main>
    <router-view />
  </main>
</template>

<style scoped>
main {
  width: min(1080px, 100%);
  margin-inline: auto;
}
</style>
