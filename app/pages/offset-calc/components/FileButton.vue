<script setup lang="ts">
const model = defineModel<string>({ required: true })

function handle(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  model.value = URL.createObjectURL(file)
}
</script>

<template>
  <label class="file-button">
    <icon v-show="!model" name="mdi:file-image-plus-outline" />
    <icon v-show="model" name="mdi:file-image-outline" />
    <input @change="handle" hidden type="file" name="load" />
  </label>
</template>

<style>
.file-button {
  height: 28px;
  width: 34px;
  border-radius: 4px;

  background-color: #efefef;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}
</style>
