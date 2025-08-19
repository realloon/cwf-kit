<script setup lang="ts">
import { CodeBlock } from '@/components'
const { code } = defineProps<{ label: string; code: unknown }>()

const json = computed(() => JSON.stringify(code, null, 2))
</script>

<template>
  <div class="stat-display" v-if="code">
    <span>{{ label }}</span>
    <CodeBlock :code="json" />
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
