<script setup lang="ts">
defineProps<{ label: string; code: unknown }>()
</script>

<template>
  <div class="stat-display" v-if="code">
    <span>{{ label }}</span>
    <pre>{{ code }}</pre>
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

pre {
  background-color: transparent;
}
</style>
