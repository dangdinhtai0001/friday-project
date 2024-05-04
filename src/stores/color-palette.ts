import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePaletteStore = defineStore('palette-store', () => {
  const currentPalette = ref('')

  function setPalette(newPalette: string) {
    currentPalette.value = newPalette
  }

  return { currentPalette, setPalette }
})
