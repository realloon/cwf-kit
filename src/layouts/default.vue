<script setup lang="ts">
import { AppHeader } from '@/containers'
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
