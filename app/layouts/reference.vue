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
  box-sizing: border-box;
  width: var(--width-max);
  padding-inline: var(--gap-page);
  margin-inline: auto;

  display: flex;
  align-items: flex-start;
  gap: 24px;
}
</style>
