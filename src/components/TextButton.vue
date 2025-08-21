<script setup lang="ts">
defineProps<{ to?: string }>()
</script>

<template>
  <button @click="to && $router.push(to)" class="text-btn">
    <slot />
  </button>
</template>

<style scoped>
.text-btn {
  font-weight: bold;
  padding: 6px 14px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #e5e5e5;
  }
}
</style>
