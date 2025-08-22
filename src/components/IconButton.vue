<script setup lang="ts"></script>

<template>
  <button class="icon-btn">
    <slot />
  </button>
</template>

<style scoped>
.icon-btn {
  width: 34px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--color-page);
  cursor: pointer;
}

.icon-btn:disabled {
  cursor: unset;
}
</style>
