<script setup lang="ts">
import introduce from '@/assets/contents/introduce.md?raw'
</script>

<template>
  <main>
    <Markdown :markdown="introduce" />
  </main>
</template>

<style scoped>
main {
  max-width: 1080px;
  margin-inline: auto;
}
</style>
