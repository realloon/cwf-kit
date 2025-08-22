<script setup lang="ts">
import TextureCanvas from './components/TextureCanvas.vue'
import TexSet from './components/TexSet.vue'
import { useTexs } from './hooks/useTexs'

const { backTex, partTexs } = useTexs()
</script>

<template>
  <section class="offset-calc">
    <div class="left">
      <TextureCanvas :back-tex="backTex" :part-texs="partTexs" />
      <TexSet style="width: 12rem" :texture="backTex" is-minify />
    </div>

    <div class="right">
      <TexSet v-for="partTex in partTexs" :texture="partTex" is-offsetable />
    </div>
  </section>
</template>

<style scoped>
.offset-calc {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}

.right {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
