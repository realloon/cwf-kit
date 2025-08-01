<script setup lang="ts">
import TextureCanvas from './components/TextureCanvas.vue'
import TexSet from './components/TexSet.vue'
import { useOffsetStore } from '@/stores/offset'
const store = useOffsetStore()
</script>

<template>
  <main>
    <section class="left-view">
      <TextureCanvas />
      <TexSet :texture="store.backTex" />
    </section>

    <section class="right-view">
      <template v-for="partTex in store.partTexs">
        <TexSet :texture="partTex" is-offsetable />
      </template>
    </section>
  </main>

</template>

<style scoped>
main {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.left-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}

.right-view {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>