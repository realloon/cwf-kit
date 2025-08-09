import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Texture } from '@/modules/Texture'

export const useOffsetStore = defineStore('offset', () => {
  const backTex = ref<Texture>(new Texture('Background'))
  const partTexs = ref<Texture[]>([
    new Texture('Receiver'),
    new Texture('Sight'),
    new Texture('Barrel'),
    new Texture('Grip'),
    new Texture('Magazine'),
    new Texture('Stock'),
    new Texture('Underbarrel'),
  ])

  return { backTex, partTexs }
})
