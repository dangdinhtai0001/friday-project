<template>
  <div class="app-header flex border-b px-28 py-20 justify-between items-center">
    <!-- #region: icon-breadcrumb -->
    <div class="icon-breadcrumb flex gap-8">
      <!-- #region: icon-breadcrumb::button-group -->
      <div class="button-group flex rounded-8 gap-8">
        <Button
          ref="menuButtonRef"
          class="flex rounded-8 w-28 h-28 p-4 gap-4"
          @click="handleOnClickMenuButton"
        >
          <svg-icon name="IconLayoutSidebarRightCollapse" class="w-20 h-20 rounded-8" />
        </Button>
        <Button
          class="flex rounded-8 w-28 h-28 p-4 gap-4 transform ease-in-out transition-transform active:scale-75"
        >
          <!-- <svg-icon name="IconStar" class="w-20 h-20 rounded-8 fill-secondary-yellow" /> -->
          <svg-icon name="IconStarFilled" class="w-20 h-20 rounded-8 text-secondary-orange" />
        </Button>
      </div>
      <!-- #endregion -->
      <!-- #region: icon-breadcrumb::breadcrumb -->
      <div class="breadcrumb flex items-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem v-for="(crumb, index) in breadcrumbs" :key="index">
              <BreadcrumbLink v-if="index < breadcrumbs.length - 1" :href="crumb.path">
                {{ crumb.title }}
              </BreadcrumbLink>
              <BreadcrumbPage v-else>{{ crumb.title }}</BreadcrumbPage>
              <BreadcrumbSeparator v-if="index < breadcrumbs.length - 1" />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <!-- #endregion -->
    </div>
    <!-- #endregion -->
    <!-- #region: frame -->
    <div class="frame">1</div>

    <!-- #endregion -->
  </div>
</template>

<script lang="ts" setup>
import { inject, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMotion, type MotionVariants } from '@vueuse/motion'
import { Button } from '@/components/atoms/ui/button'
import { SvgIcon } from '@/components/atoms/icons'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/atoms/ui/breadcrumb'
import { LEFT_SIDEBAR_COLLAPSED_STATE_KEY } from '../config'

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

const isCollapsed = inject(LEFT_SIDEBAR_COLLAPSED_STATE_KEY)
const collapseState = ref(isCollapsed)

const handleOnClickMenuButton = async () => {
  // Cập nhật trạng thái trước
  collapseState.value = !collapseState.value

  // Xác định lớp CSS để áp dụng
  const rotationClass = collapseState.value ? 'rotate-180' : 'rotate-0'

  // Chờ animation thực thi
  await apply(rotationClass)
}

const route = useRoute()
const router = useRouter()

const breadcrumbs = computed(() => {
  const matched = route.matched.filter((r) => r.meta.breadcrumb !== false)
  return matched.map((r) => ({
    title: r.meta.title || r.name,
    path: router.resolve(r).href
  }))
})
</script>
