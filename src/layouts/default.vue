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
  max-width: 1080px;
  margin-inline: auto;
}
</style>
