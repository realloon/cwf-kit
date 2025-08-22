<script setup lang="ts">
defineProps<{ name: string; to: string }>()
</script>

<template>
  <li class="nav-item">
    <router-link class="nav-btn" :to="to">
      <slot class="icon" />
      <span>{{ name }}</span>
    </router-link>
    <div class="line"></div>
  </li>
</template>

<style scoped>
.nav-item {
  display: flex;
  flex-direction: column;
  gap: 2px;

  &:has(.router-link-active) .line {
    background-color: var(--color-color);
  }
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-radius: 4px;

  &:hover {
    text-decoration: none;
    background-color: var(--color-ui-back);
  }

  span {
    font-size: 0.875rem;
    font-family: var(--font-mono);
  }
  &.router-link-active span {
    font-weight: bold;
  }
}

.line {
  height: 2px;
  background-color: transparent;
}
</style>
