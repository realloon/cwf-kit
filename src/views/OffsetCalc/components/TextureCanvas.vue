<script setup lang="ts">
import { useOffsetStore } from '@/stores/offset'
const store = useOffsetStore()
</script>

<template>
  <section class="canvas">
    <img v-show="store.backTex.isDisplay" class="base" :class="store.backTex.isMasked && 'is-masked'"
      :src="store.backTex.src" alt="">

    <template v-for="part in store.partTexs">
      <img v-show="part.isDisplay" class="module" :style="part.style" :src="part.src" alt="">
    </template>
  </section>
</template>

<style scoped>
.canvas {
  width: 512px;
  height: 512px;
  outline: 2px dashed gray;
  position: relative;
}

.base {
  position: absolute;
  z-index: -1;
}

.module {
  position: absolute;
}


.is-masked {
  opacity: 0.8;
}
</style>