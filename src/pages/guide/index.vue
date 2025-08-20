<script setup lang="ts">
import guide from '@/assets/contents/guide.md?raw'
</script>

<template>
  <main>
    <Markdown :markdown="guide" has-toc />
  </main>
</template>