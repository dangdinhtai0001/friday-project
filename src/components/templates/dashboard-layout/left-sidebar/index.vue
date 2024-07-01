<template>
  <div v-motion ref="sidebarContainerTarget">sidebar {{ isCollapsed }}</div>
</template>
<script lang="ts" setup>
import { inject, ref, watch } from 'vue'
import { useMotion } from '@vueuse/motion'

const isCollapsed = inject<boolean>('isCollapsed')

const sidebarContainerTarget = ref<HTMLElement>()

const motionInstance = useMotion(sidebarContainerTarget, {
  initial: { width: '212px' },
  collapsed: { width: '80px' },
  expanded: { width: '212px' }
})

watch(isCollapsed, (newValue) => {
  if (newValue) {
    // Nếu isCollapsed là true, thay đổi width
    motionInstance.apply('collapsed')
    motionInstance.variant.value = 'collapsed'
  } else {
    // Nếu isCollapsed là false, thay đổi width
    motionInstance.apply('expanded')
    motionInstance.variant.value = 'expanded'
  }
})
</script>
