<script setup lang="ts"></script>

<template>
  <layout-header />

  <main>
    <slot />
  </main>
</template>

<style scoped>
main {
  width: var(--width-max);
  padding-inline: var(--gap-page);
  margin-inline: auto;
}
</style>
