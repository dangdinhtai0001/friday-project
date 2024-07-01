<template>
  <div
    class="flex flex-col gap-8 justify-between border-r border-black-10 px-16 py-28"
    v-motion
    ref="sidebarContainerTarget"
  >
    <!-- ----------------------------------------- || Sidebar items || ----------------------------------------- -->
    <div>sidebar</div>
    <!-- ----------------------------------------- || Sidebar items  || ----------------------------------------- -->
    <!-- ----------------------------------------- || Name badge || ----------------------------------------- -->
    <div><SidebarItem :is-collapsed="isCollapsed" /></div>
    <!-- ----------------------------------------- || Name badge || ----------------------------------------- -->
  </div>
</template>
<script lang="ts" setup>
import { inject, ref, watch } from 'vue'
import { useMotion } from '@vueuse/motion'

import SidebarItem from './sidebar-item.vue'

const isCollapsed = inject<boolean>('isCollapsed')

const sidebarContainerTarget = ref<HTMLElement>()

const motionInstance = useMotion(sidebarContainerTarget, {
  initial: { width: '212px' },
  collapsed: { width: '80px' },
  expanded: { width: '212px' }
})

// @ts-ignore: Unreachable code error
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
