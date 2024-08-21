<template>
  <div class="bg-primary-background h-screen">
    <div class="flex w-full h-full">
      <LeftSideBar
        class="fixed top-0 left-0 h-full"
        :expanded-width="expandedWidth"
        :collapsed-width="collapsedWidth"
      />
      <Header ref="headerRef" :style="headerStyle" class="fixed" />
      <section class="app-main h-full">
        <div class="app-scrollbar" :style="mainContentStyle">
          <router-view v-slot="{ Component, route }">
            <component :is="Component" :key="route.path" />
          </router-view>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide, computed } from 'vue'
import { useElementSize } from '@vueuse/core'
import LeftSideBar from './left-sidebar/index.vue'
import Header from './header/index.vue'
import { IS_COLLAPSED_KEY, TOGGLE_SIDEBAR_KEY } from './constant'

const isCollapsed = ref(false)
const headerRef = ref<HTMLElement | null>(null)
const headerSize = useElementSize(headerRef)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

provide(IS_COLLAPSED_KEY, isCollapsed)
provide(TOGGLE_SIDEBAR_KEY, toggleSidebar)

const expandedWidth = '212px'
const collapsedWidth = '80px'

const layoutStyles = computed(() => {
  const width = isCollapsed.value ? collapsedWidth : expandedWidth
  return {
    marginLeft: width,
    width: `calc(100% - ${width})`,
    marginTop: `${headerSize.height.value}px`
  }
})

const mainContentStyle = computed(() => ({
  marginLeft: layoutStyles.value.marginLeft,
  marginTop: layoutStyles.value.marginTop
}))

const headerStyle = computed(() => ({
  marginLeft: layoutStyles.value.marginLeft,
  width: layoutStyles.value.width
}))
</script>
