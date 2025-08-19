<script setup lang="ts">
import { codeToHtml } from 'shiki'
const { code } = defineProps<{ code: string }>()

const highlighted = ref<string | null>(null)
onMounted(async () => {
  highlighted.value = await codeToHtml(code, {
    lang: 'json',
    theme: 'min-light',
  })
})
</script>

<template>
  <pre v-if="!highlighted">{{ code }}</pre>
  <div v-else v-html="highlighted"></div>
</template>
