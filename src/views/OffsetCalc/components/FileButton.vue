<script setup lang="ts">
import { IconImage } from '@/components'
import { Texture } from '@/modules/Texture'
defineProps<{ label: string; texture: Texture }>()
</script>

<template>
  <label>
    <span :style="!texture.src && 'opacity: 0.5;'">{{ label }}</span>
    <IconImage />
    <input @change="texture.update($event)" type="file" name="baseTex" hidden />
  </label>
</template>

<style scoped>
label {
  display: flex;
  align-items: cenbter;
  gap: 4px;
  user-select: none;
  cursor: pointer;
}

span {
  font-weight: bold;
}
</style>
