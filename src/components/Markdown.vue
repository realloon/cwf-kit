<script setup lang="ts">
import { parse } from 'marked'
defineProps<{ markdown: string }>()
</script>

<template>
  <article class="markdown" v-html="parse(markdown)" />
</template>
