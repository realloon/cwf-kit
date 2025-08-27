<script setup lang="ts">
const model = defineModel<number>({ required: true })
</script>

<template>
  <label class="offset-editor">
    <slot />
    <input v-model="model" type="range" :min="-72" :max="256" name="" />
    <input v-model="model" type="number" name="" />
  </label>
</template>

<style scoped>
.offset-editor {
  display: flex;
  align-items: center;
}

input[type='number'] {
  width: 5.5ch;
}
</style>
