<script setup lang="ts">
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
  padding: 8px;
  border-radius: 4px;
  border: 2px solid var(--color-border);
  background-color: var(--color-page);
}

span {
  font-size: 0.875rem;
  font-weight: bold;
}
</style>
