<template>
  <div class="navbar bg-background border border-black-10">
    <a class="btn btn-ghost text-xl">daisyUI</a>

    <div class="dropdown dropdown-bottom dropdown-end">
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTheme, themeDefs } from '@/hooks'
import type { ThemeDef } from '@/hooks'

import { IconColorSwatch } from '@tabler/icons-vue'

const { setTheme } = useTheme()

const handleOnChangeTheme = (theme: ThemeDef) => {
  setTheme(theme.name)
}
</script>
