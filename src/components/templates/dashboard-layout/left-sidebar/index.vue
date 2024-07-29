<template>
  <div
    class="flex flex-col justify-between border-r border-black-10 px-16 py-20 gap-16"
    v-motion
    ref="sidebarContainerTarget"
  >
    <!-- ----------------------------------------- || Sidebar items || ----------------------------------------- -->
    <NameBadge />
    <div class="h-full"><Menu /></div>
    <!-- ----------------------------------------- || Sidebar items  || ----------------------------------------- -->
    <!-- ----------------------------------------- || Logo || ----------------------------------------- -->
    <SidebarLogo />
    <!-- ----------------------------------------- || Logo || ----------------------------------------- -->
  </div>
</template>
<script lang="ts" setup>
import { inject, ref, watch } from 'vue'
import { useMotion } from '@vueuse/motion'

import SidebarLogo from './logo.vue'
import NameBadge from './name-badge.vue'
import Menu from './menu/index.vue'

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
