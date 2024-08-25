<template>
  <div class="app-main h-screen w-screen flex f-text-regular-14">
    <div class="left-sidebar w-[212px] h-full border">left sidebar</div>

    <div class="border flex flex-col w-full h-full">
      <div class="app-header border-b px-28 py-20">header</div>
      <div class="app-content overflow-auto">
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
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useMotion } from '@vueuse/motion'
import type { MotionVariants } from '@vueuse/motion'

const target = ref<HTMLElement>()

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
// Get the variant from target motion instance.
const { apply } = useMotion(target, variants)

const route = useRoute()

watch(route, async (_) => {
  await apply('initial')
  await apply('enter')
})
</script>
