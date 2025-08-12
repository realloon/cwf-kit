<script setup lang="ts">
const { code } = defineProps<{ label: string; code: unknown }>()
import { ref, onMounted, computed } from 'vue'
import { codeToHtml } from 'shiki'

const json = computed(() => JSON.stringify(code, null, 2))
const highlighted = ref<string | null>(null)
onMounted(async () => {
  highlighted.value = await codeToHtml(json.value, {
    lang: 'json',
    theme: 'min-light',
  })
})
</script>

<template>
  <div class="stat-display" v-if="code">
    <span>{{ label }}</span>
    <pre v-if="!highlighted">{{ json }}</pre>
    <div v-else v-html="highlighted"></div>
  </div>
</template>

<style scoped>
.stat-display {
  background-color: white;
  padding: 8px;
  border-radius: 4px;
}

span {
  font-size: 0.875rem;
  font-weight: bold;
}
</style>
