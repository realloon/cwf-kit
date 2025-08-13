<script setup lang="ts">
import {
  IconEye,
  IconSet,
  IconVertical,
  IconHorizontal,
} from '@/components/icons'
import FileButton from './FileButton.vue'
import { Texture } from '@/modules/Texture'
const { texture, isMinify = false } = defineProps<{
  texture: Texture
  isMinify?: boolean
}>()
</script>

<template>
  <section class="tex-set">
    <header>
      <section class="left">
        <h3>{{ texture.name }}</h3>
      </section>

      <section class="right">
        <FileButton :texture="texture" />

        <label style="display: flex; align-items: center; cursor: pointer">
          <input
            v-model="texture.shouldDisplay"
            :disabled="!texture.src"
            type="checkbox"
            name="checkbox"
            hidden
          />
          <IconEye />
        </label>

        <label style="display: flex; align-items: center; cursor: pointer">
          <input
            v-model="texture.isMasked"
            :disabled="!texture.src"
            type="checkbox"
            name="checkbox"
            hidden
          />
          <IconSet />
        </label>
      </section>
    </header>

    <div v-if="!isMinify" class="offset-wrapper">
      <label>
        <IconHorizontal />
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
        <IconVertical />
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
    </div>
  </section>
</template>

<style scoped>
.tex-set {
  display: flex;
  flex-direction: column;
  gap: 4px;

  border: 1px solid gray;
  padding: 8px;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left,
  .right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  h3 {
    font-weight: bold;
    opacity: 0.3;

    &.is-active {
      opacity: 1;
    }
  }
}

.offset-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    display: flex;
    align-items: center;
    gap: 4px;

    input[type='number'] {
      width: 5ch;
      font-family: monospace;
    }
  }
}
</style>
