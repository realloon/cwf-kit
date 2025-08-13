<script setup lang="ts">
import { Texture } from '@/modules/Texture'
defineProps<{ backTex: Texture; partTexs: Array<Texture> }>()
</script>

<template>
  <section class="canvas">
    <img
      v-show="backTex.isDisplay"
      class="base"
      :class="backTex.isMasked && 'is-masked'"
      :src="backTex.src"
      alt=""
    />

    <template v-for="part in partTexs">
      <img
        v-show="part.isDisplay"
        class="module"
        :style="part.style"
        :src="part.src"
        alt=""
      />
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
