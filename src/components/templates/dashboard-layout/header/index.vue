<template>
  <div class="navbar flex justify-between border-b-1 border border-black-10 p-0">
    <!------------------------------------------------- || Breadcrumb group || ------------------------------------------------->
    <div class="flex gap-8">
      <button class="btn border-0 bg-transparent shadow-transparent" @click="handleOnToggleSidebar">
        <IconLayoutSidebarLeftCollapse v-motion ref="target" />
      </button>

      <Breadcrumb />

      <!------------------------------------------------- || Breadcrumb group || ------------------------------------------------->
    </div>

    <!-- <div class="dropdown dropdown-bottom dropdown-end">
      <div tabindex="0" role="button" class="btn m-1">
        <IconColorSwatch :size="20" />
      </div>
      <ul
        tabindex="0"
        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[200px]"
      >
        <li
          v-for="(theme, index) in themeDefs"
          :key="index"
          class="flex flex-row justify-between hover:bg-primary-light bg-primary-background gap-[1px]"
          :data-theme="theme.name"
          @click="handleOnChangeTheme(theme)"
        >
          <div class="text-primary-brand">{{ theme.title }}</div>
          <div class="flex items-center justify-center gap-[1px]">
            <div class="w-2 h-5 border border-black-40 rounded bg-secondary-indigo" />
            <div class="w-2 h-5 border border-black-40 rounded bg-secondary-mint" />
            <div class="w-2 h-5 border border-black-40 rounded bg-secondary-orange" />
            <div class="w-2 h-5 border border-black-40 rounded bg-secondary-red" />
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'

import Breadcrumb from './breadcrumb/index.vue'
// import { useTheme, themeDefs } from '@/hooks'
// import type { ThemeDef } from '@/hooks'

import IconLayoutSidebarLeftCollapse from '@/assets/icons/layout-sidebar-left-collapse.svg'
// import IconColorSwatch from '@/assets/icons/color-swatch.svg'

const toggleSidebar = inject<() => void>('toggleSidebar')
const isCollapsed = inject<boolean>('isCollapsed')

import { useMotion } from '@vueuse/motion'

const target = ref<HTMLElement>()

const motionInstance = useMotion(target, {
  'rotate-180': {
    transform: 'rotate(180deg)'
  },
  'rotate-0': {
    transform: 'rotate(0deg)'
  },
  initial: {
    transform: 'rotate(0)'
  }
})

const handleOnToggleSidebar = async () => {
  if (toggleSidebar) {
    toggleSidebar()
  }

  if (isCollapsed!.value) {
    await motionInstance.apply('rotate-180')
    motionInstance.variant.value = 'rotate-180'
  } else {
    await motionInstance.apply('rotate-0')
    motionInstance.variant.value = 'rotate-0'
  }
}

// const { setTheme } = useTheme()

// const handleOnChangeTheme = (theme: ThemeDef) => {
//   setTheme(theme.name)
// }
</script>

<style scoped></style>
