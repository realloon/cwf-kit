<script setup lang="ts">
import guide from '@/contents/guide.md?raw'
</script>

<template>
  <Markdown :markdown="guide" has-toc />
</template>
