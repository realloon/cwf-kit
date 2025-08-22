<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { useColorScheme } from '@/hooks/useColorScheme'
const { code } = defineProps<{ code: string }>()

const { isDark } = useColorScheme()

const highlighted = ref<string | null>(null)
onMounted(async () => {
  highlighted.value = await codeToHtml(code, {
    lang: 'json',
    theme: isDark.value ? 'min-dark' : 'min-light',
  })
})
</script>

<template>
  <pre v-if="!highlighted">{{ code }}</pre>
  <div v-else v-html="highlighted"></div>
</template>
