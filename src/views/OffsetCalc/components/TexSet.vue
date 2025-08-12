<script setup lang="ts">
import { IconEye } from '@/components'
import FileButton from './FileButton.vue'
import { Texture } from '@/modules/Texture'
const { texture } = defineProps<{
  texture: Texture
  isOffsetable?: boolean
}>()
</script>

<template>
  <form @submit.prevent>
    <header>
      <FileButton :label="texture.name" :texture="texture" />

      <label style="display: flex; align-items: center">
        <input
          v-model="texture.shouldDisplay"
          :disabled="!texture.src"
          type="checkbox"
          name="checkbox"
          hidden
        />
        <IconEye />
      </label>
    </header>

    <div class="view">
      <section :class="!isOffsetable && 'large'">
        <label v-if="!isOffsetable">
          <input
            v-model="texture.isMasked"
            :disabled="!texture.src"
            type="checkbox"
            name="checkbox"
          />
          <span>Mask</span>
        </label>
      </section>

      <section
        v-if="isOffsetable"
        style="z-index: 10; display: flex; flex-direction: column"
      >
        <label>
          <input
            v-model="texture.x"
            :disabled="!texture.src"
            type="range"
            min="-72"
            max="320"
            name="x"
          />
          <input
            v-model="texture.x"
            :disabled="!texture.src"
            type="number"
            min="-72"
            max="320"
            name="x"
          />
        </label>

        <label>
          <input
            v-model="texture.y"
            :disabled="!texture.src"
            type="range"
            min="-72"
            max="320"
            name="y"
          />
          <input
            v-model="texture.y"
            :disabled="!texture.src"
            type="number"
            min="-72"
            max="320"
            name="y"
          />
        </label>
      </section>
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  padding: 8px;
  outline: 1px solid gray;
}

header {
  display: flex;
  align-items: center;
  gap: 8px;
}

h3 {
  font-weight: bold;
  cursor: pointer;
  opacity: 0.3;

  &.is-active {
    opacity: 1;
  }
}

.view {
  display: flex;
  align-items: center;
  gap: 8px;
}

input[type='number'] {
  width: 5ch;
  font-family: monospace;
}

.large {
  width: 320px;
  display: flex;
  gap: 12px;
}
</style>
