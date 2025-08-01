import { ref } from 'vue'

export function useTitle() {
  function setTitle(newTitle: string) {
    document.title = newTitle
  }

  return { setTitle }
}
