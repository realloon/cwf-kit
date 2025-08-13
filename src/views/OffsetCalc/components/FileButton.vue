<script setup lang="ts">
import { IconImage } from '@/components/icons'
import { Texture } from '@/modules/Texture'
defineProps<{ texture: Texture }>()
</script>

<template>
  <label>
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
