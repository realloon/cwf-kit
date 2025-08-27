<script setup lang="ts"></script>

<template>
  <layout-header />

  <main>
    <slot />
  </main>
</template>

<style>
main {
  padding-inline: var(--gap-page);
}
</style>
