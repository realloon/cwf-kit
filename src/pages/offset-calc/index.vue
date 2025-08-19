<script setup lang="ts">
import TextureCanvas from './components/TextureCanvas.vue'
import TexSet from './components/TexSet.vue'
import { useTexs } from './hooks/useTexs'

const { backTex, partTexs } = useTexs()
</script>

<template>
  <main>
    <section class="left">
      <TextureCanvas :back-tex="backTex" :part-texs="partTexs" />
      <TexSet style="width: 12rem" :texture="backTex" is-minify />
    </section>

    <section class="right">
      <TexSet v-for="partTex in partTexs" :texture="partTex" is-offsetable />
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  max-width: 1080px;
  margin-inline: auto;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}

.right {
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 12px;
}
</style>
