<template>
  <div class="app-main h-screen w-screen flex f-text-regular-14">
    <left-sidebar />
    <div class="border flex flex-col w-full h-full">
      <Header />
      <div class="app-content overflow-auto">
        {{ isCollapsed }}
        <router-view v-slot="{ Component, route }">
          <div v-motion ref="target">
            <component :is="Component" :key="route.path" />
          </div>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref, provide } from 'vue'
import { useRoute } from 'vue-router'
import { useMotion } from '@vueuse/motion'
import type { MotionVariants } from '@vueuse/motion'

import Header from './header/index.vue'
import LeftSidebar from './left-sidebar/index.vue'
import { LEFT_SIDEBAR_COLLAPSED_STATE_KEY } from './config'

const target = ref<HTMLElement>()
const isCollapsed = ref<boolean>(false)

const variants: MotionVariants<string> = {
  initial: {
    scale: 0,
    opacity: 0
  },
  enter: {
    scale: 1,
    opacity: 1
  }
}
const { apply } = useMotion(target, variants)

const route = useRoute()

watch(route, async (_) => {
  await apply('initial')
  await apply('enter')
})

provide(LEFT_SIDEBAR_COLLAPSED_STATE_KEY, isCollapsed)
</script>
