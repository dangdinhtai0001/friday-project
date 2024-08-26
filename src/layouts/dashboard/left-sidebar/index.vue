<template>
  <div class="left-sidebar h-full border" ref="containerRef">left sidebar {{ isCollapsed }}</div>
</template>

<script lang="ts" setup>
import { inject, ref, watch } from 'vue'
import { LEFT_SIDEBAR_COLLAPSED_STATE_KEY } from '../config'
import { useMotion, type MotionVariants } from '@vueuse/motion'

const isCollapsed = inject<boolean>(LEFT_SIDEBAR_COLLAPSED_STATE_KEY)
const collapseState = ref(isCollapsed)

const containerRef = ref<HTMLElement>()

const variants: MotionVariants<string> = {
  initial: {
    width: '212px'
  },
  collapsed: {
    width: '212px'
  },
  expanded: {
    width: '80px'
  }
}
const { apply } = useMotion(containerRef, variants)

watch(collapseState, async (newVal) => {
  if (newVal) {
    await apply('expanded')
  } else {
    await apply('collapsed')
  }
})
</script>
