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
  color: var(--color-ui-font);
  background-color: var(--color-ui-back);
  font-weight: bold;
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #e5e5e5;

    @media (prefers-color-scheme: dark) {
      background-color: #252932;
    }
  }
}
</style>
