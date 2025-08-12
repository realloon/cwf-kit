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
    background-color: #0e0ebd;
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
    background-color: #efefef;
  }

  span {
    font-size: 0.875rem;
    font-family: monospace;
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
