<script setup lang="ts">
import introduce from '@/assets/contents/introduce.md?raw'
import Markdown from '@/components/Markdown.vue'
</script>

<template>
  <Markdown :markdown="introduce" />
</template>