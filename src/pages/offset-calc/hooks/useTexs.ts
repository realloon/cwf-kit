import { ref } from 'vue'
import { Texture } from '@/modules/Texture'

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

export function useTexs() {
  return { backTex, partTexs }
}
