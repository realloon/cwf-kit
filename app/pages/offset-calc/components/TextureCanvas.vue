<script setup lang="ts">
defineProps<{
  backTexture: Texture
  partTextures: Array<Texture>
}>()
</script>

<template>
  <div class="texture-canvas">
    <img
      v-show="backTexture.isDisplay"
      :class="backTexture.isMask && 'is-mask'"
      :src="backTexture.src"
      alt=""
    />

    <img
      v-for="texture in partTextures"
      v-show="texture.isDisplay"
      :class="texture.isMask && 'is-mask'"
      :src="texture.src"
      :style="texture.style"
      alt=""
    />
  </div>
</template>

<style scoped>
.texture-canvas {
  width: 512px;
  height: 512px;
  border: 2px dashed #ccc;

  position: relative;
}

img {
  position: absolute;

  &.is-mask {
    opacity: 0.7;
  }
}
</style>
