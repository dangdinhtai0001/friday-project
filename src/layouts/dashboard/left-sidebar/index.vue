<template>
  <div class="left-sidebar h-full border" ref="containerRef">left sidebar {{ isCollapsed }}</div>
</template>

<script lang="ts" setup>
import { inject, ref, watch } from 'vue'
import { SIDEBAR_STATE_COLLAPSED } from '../config'
import { useMotion, type MotionVariants } from '@vueuse/motion'

const isCollapsed = inject(SIDEBAR_STATE_COLLAPSED)

const containerRef = ref<HTMLElement>()

const variants: MotionVariants<string> = {
  initial: {
    width: '80px'
  },
  collapsed: {
    width: '212px'
  },
  expanded: {
    width: '80px'
  }
}
const { apply } = useMotion(containerRef, variants)

watch(isCollapsed, async (newVal) => {
  if (newVal) {
    await apply('collapsed')
  } else {
    await apply('expanded')
  }
})
</script>
