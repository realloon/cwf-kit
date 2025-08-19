<script setup lang="ts">
import { IconImage, IconImagePlus } from '@/components/icons'
import { Texture } from '@/modules/Texture'
defineProps<{ texture: Texture }>()
</script>

<template>
  <label>
    <IconImagePlus v-if="!texture.src" />
    <IconImage v-else />
    <input @change="texture.update($event)" type="file" name="baseTex" hidden />
  </label>
</template>

<style scoped>
label {
  width: 34px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;

  &:not(:disabled) {
    cursor: pointer;
  }
}
</style>
