<script setup lang="ts"></script>

<template>
  <layout-header />
  <main>
    <layout-reference-nav />
    <slot />
  </main>
</template>

<style scoped>
main {
  padding-inline: var(--gap-page);

  display: flex;
  align-items: flex-start;
  gap: 24px;
}
</style>
