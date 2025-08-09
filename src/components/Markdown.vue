<script setup lang="ts">
import { parse } from 'marked'
defineProps<{ markdown: string }>()
</script>

<template>
  <article v-html="parse(markdown)" />
</template>

<style scoped>
article {
  line-height: 1.5;
}

article:deep(h1) {
  font-size: 1.5rem;
  font-weight: bold;
  color: #27a6ba;
}

article:deep(h2) {
  font-weight: bold;
}

article:deep(p) {
  margin-block-end: 0.5rem;
}

article:deep(ul, ol) {
  padding-inline-start: 2rem;
}
</style>
