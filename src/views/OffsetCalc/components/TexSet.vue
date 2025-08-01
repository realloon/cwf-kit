<script setup lang="ts">
import { Texture } from '@/types';
const { texture } = defineProps<{
  texture: Texture,
  isOffsetable?: boolean
}>()
</script>

<template>
  <form @submit.prevent>
    <header>
      <h3 :class="texture.src && 'is-active'">{{ texture.name }}</h3>
    </header>

    <div class="view">
      <section :class="!isOffsetable && 'large'">
        <label>
          <span class="btn">Texture</span>
          <input @change="texture.update($event)" type="file" name="baseTex" hidden>
        </label>

        <label>
          <input v-model="texture.shouldDisplay" :disabled="!texture.src" type="checkbox" name="checkbox">
          <span>Display</span>
        </label>

        <label v-if="!isOffsetable">
          <input v-model="texture.isMasked" :disabled="!texture.src" type="checkbox" name="checkbox">
          <span>Mask</span>
        </label>
      </section>

      <section v-if="isOffsetable">
        <label>
          <input v-model="texture.x" :disabled="!texture.src" type="range" min="-64" max="256" name="x">
          <input v-model="texture.x" :disabled="!texture.src" type="number" min="-64" max="256" name="x">
        </label>

        <label>
          <input v-model="texture.y" :disabled="!texture.src" type="range" min="-64" max="256" name="y">
          <input v-model="texture.y" :disabled="!texture.src" type="number" min="-64" max="256" name="y">
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

label {
  display: flex;
  align-items: center;
  gap: 4px;
  user-select: none;
}

input[type="number"] {
  width: 5ch;
  font-family: monospace;
}

.btn {
  display: block;
  cursor: pointer;
  border: 1px solid black;
  padding: 4px 6px 6px;
  border-radius: 2px;
  font-size: 0.875rem;
}

.large {
  width: 320px;
  display: flex;
  gap: 12px;
}
</style>