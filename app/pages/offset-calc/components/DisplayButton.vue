<script setup lang="ts">
const model = defineModel<boolean>({ required: true })
</script>

<template>
  <button @click="model = !model" class="display-button">
    <icon v-show="model" name="mdi:eye-outline" />
    <icon v-show="!model" name="mdi:eye-closed" />
  </button>
</template>

<style>
.display-button {
  font-size: 1rem;

  height: 28px;
  width: 34px;
  padding: 0;
  border: none;
  border-radius: 4px;

  background-color: #efefef;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}
</style>
