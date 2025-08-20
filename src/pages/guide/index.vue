<script setup lang="ts">
import guide from '@/contents/guide.md?raw'
</script>

<template>
  <main>
    <Markdown :markdown="guide" has-toc />
  </main>
</template>