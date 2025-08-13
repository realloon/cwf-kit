<script setup lang="ts">
import TextureCanvas from './components/TextureCanvas.vue'
import TexSet from './components/TexSet.vue'
import { useOffsetStore } from '@/stores/offset'
const store = useOffsetStore()
</script>

<template>
  <main>
    <section class="left">
      <TextureCanvas />
      <TexSet style="width: 12rem;" :texture="store.backTex" is-minify />
    </section>

    <section class="right">
      <TexSet
        v-for="partTex in store.partTexs"
        :texture="partTex"
        is-offsetable
      />
    </section>
  </main>
</template>

<style scoped>
main {
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
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 12px;
}
</style>
