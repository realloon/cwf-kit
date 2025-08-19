<script setup lang="ts">
const model = defineModel<boolean>({ required: true })
</script>

<template>
  <IconButton @click="model = !model" class="opacity-btn">
    <IconOpacity :class="model && 'opacity'" />
  </IconButton>
</template>

<style scoped>
svg {
  transition: 0.2s;

  &.opacity {
    transform: rotate(180deg);
  }
}
</style>
