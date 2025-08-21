<script setup lang="ts">
import introduce from '@/contents/introduce.md?raw'
import Header from './components/Header.vue'
definePage({ path: '/' })
</script>

<template>
  <Header />
  <Markdown :markdown="introduce" />
</template>
