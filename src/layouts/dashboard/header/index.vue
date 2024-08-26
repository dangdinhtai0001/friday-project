<template>
  <div class="app-header flex border-b px-28 py-20">
    <Button
      ref="menuButtonRef"
      class="border flex rounded-8 w-28 h-28 p-4 gap-4"
      @click="handleOnClickMenuButton"
    >
      <icon-layout-sidebar-right-collapse class="w-20 h-20 rounded-8" />
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import { useMotion, type MotionVariants } from '@vueuse/motion'
import { Button } from '@/components/atoms/ui/button'
import IconLayoutSidebarRightCollapse from '@/assets/icons/IconLayoutSidebarRightCollapse.svg'
import { SIDEBAR_STATE_COLLAPSED } from '../config'
const menuButtonRef = ref<HTMLElement>()

const variants: MotionVariants<string> = {
  initial: {
    rotate: 0
  },
  'rotate-180': {
    rotate: 180
  },
  'rotate-0': {
    rotate: 0
  }
}

// Get the variant from target motion instance.
const { apply } = useMotion(menuButtonRef, variants)

const isCollapsed = inject(SIDEBAR_STATE_COLLAPSED)
const collapseState = ref(isCollapsed)

const handleOnClickMenuButton = async () => {
  // Cập nhật trạng thái trước
  collapseState.value = !collapseState.value

  // Xác định lớp CSS để áp dụng
  const rotationClass = collapseState.value ? 'rotate-180' : 'rotate-0'

  // Chờ animation thực thi
  await apply(rotationClass)
}
</script>
