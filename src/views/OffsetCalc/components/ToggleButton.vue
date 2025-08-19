<script setup lang="ts">
const model = defineModel<boolean>({ required: true })
</script>

<template>
  <IconButton @click="model = !model" class="toggle-btn">
    <slot name="open" v-if="model" />
    <slot name="close" v-else />
  </IconButton>
</template>