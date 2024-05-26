import { usePaletteStore } from '@/stores'
import { ref, watch } from 'vue'

const DEFAULT_THEME_NAME = 'pastel-light'
type DefaultThemeName = typeof DEFAULT_THEME_NAME

/** Registered theme names, where DefaultThemeName is required */
export type ThemeName = DefaultThemeName | 'pastel-dark' | 'bright-light' | 'bright-dark'

export interface ThemeDef {
  title: string
  name: ThemeName
}

/** List of themes */
export const themeDefs: ThemeDef[] = [
  {
    title: 'Pastel light',
    name: DEFAULT_THEME_NAME
  },
  {
    title: 'Pastel dark',
    name: 'pastel-dark'
  },
  {
    title: 'Bright light',
    name: 'bright-light'
  },
  {
    title: 'Bright dark',
    name: 'bright-dark'
  }
]

function getThemeByName(inputName: string): ThemeDef | undefined {
  return themeDefs.find((theme) => theme.name === inputName)
}

/** Theme hook */
export function useTheme() {
  const paletteStore = usePaletteStore()

  const currentTheme = ref(getThemeByName(paletteStore.currentPalette))

  function initializeTheme() {
    setTheme(DEFAULT_THEME_NAME)
  }

  function setTheme(value: string) {
    paletteStore.setPalette(value)
  }

  function getTheme(): ThemeDef | undefined {
    const _currentPalette = paletteStore.currentPalette

    return getThemeByName(_currentPalette)
  }

  // Sử dụng watch để lắng nghe sự thay đổi của currentPalette trong paletteStore
  watch(
    () => paletteStore.currentPalette,
    (newPalette) => {
      currentTheme.value = getThemeByName(newPalette)
    }
  )

  return {
    currentTheme,
    initializeTheme,
    setTheme,
    getTheme
  }
}
