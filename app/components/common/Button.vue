<script setup lang="ts"></script>

<template>
  <button class="common-button">
    <slot />
  </button>
</template>

<style scoped>
.common-button {
  font-size: inherit;

  padding: 6px 12px;
  border: none;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.common-button:deep(a) {
  text-decoration: unset;
}
</style>
