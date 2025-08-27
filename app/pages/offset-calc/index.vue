<script setup lang="ts">
import TextureCanvas from './components/TextureCanvas.vue'
import TextureData from './components/TextureData.vue'

function makeTexture(part: string): Texture {
  return {
    name: part,
    src: '',
    x: 0,
    y: 0,
    scale: 0,
    isDisplay: true,
    isMask: false,

    get style() {
      return `left: ${this.x}px; bottom: ${this.y}px;`
    },
  }
}

const parts = [
  'Receiver',
  'Sight',
  'Barrel',
  'Grip',
  'Magazine',
  'Stock',
  'Underbarrel',
]

const backTexture = ref(makeTexture('Background'))
const partTextures = ref(parts.map(makeTexture))
</script>

<template>
  <section class="offset-calc">
    <div class="left">
      <texture-canvas
        :back-texture="backTexture"
        :part-textures="partTextures"
      />
      <texture-data :texture="backTexture" :has-editor="false" />
    </div>

    <div class="right">
      <texture-data v-for="texture in partTextures" :texture="texture" />
    </div>
  </section>
</template>

<style scoped>
.offset-calc {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.right {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
