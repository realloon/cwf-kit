<script setup lang="ts">
import guide from '@/assets/contents/guide.md?raw'
import { Markdown } from '@/components'
</script>

<template>
  <Markdown :markdown="guide" />
</template>

<style scoped></style>
