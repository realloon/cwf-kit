<script setup lang="ts">
const model = defineModel<boolean>({ required: true })
</script>

<template>
  <button @click="model = !model" class="opacity-button">
    <icon
      class="icon"
      :class="model && 'is-active'"
      name="mdi:circle-opacity"
    />
  </button>
</template>

<style>
.opacity-button {
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

.icon {
  transition: 0.2s;

  &.is-active {
    transform: rotate(180deg);
  }
}
</style>
