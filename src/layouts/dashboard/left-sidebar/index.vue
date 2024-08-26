<template>
  <div
    class="left-sidebar flex flex-col p-16 gap-8 h-full border-r border-black-10"
    ref="containerRef"
  >
    <!-- #region: frame 0 -->
    <div class="frame-0 flex flex-col gap-4 pb-12">
      <!-- #region: user + avatar -->
      <div class="flex rounded-8 p-8 gap-8">
        <Avatar class="w-24 h-24">
          <AvatarImage src="" alt="@radix-vue" />
          <AvatarFallback
            class="bg-gradient-to-r from-black-80 via-black-40 to-black-5 text-black-80 f-text-semibold-12 flex text-center items-center justify-center w-full h-full border rounded-full"
          >
            <span class="initials">U</span>
          </AvatarFallback>
        </Avatar>
        <div class="flex-1 min-w-0 text-ellipsis overflow-hidden whitespace-nowrap">Username</div>
      </div>
      <!-- #endregion: user + avatar -->
      <!-- #region: line -->
      <div v-if="!isCollapsed" class="flex py-2 gap-0 opacity-0 w-full h-4p" />
      <!-- #endregion: line -->
      <!-- #region: favorites/ recently -->
      <Tabs v-if="!isCollapsed" default-value="favorites">
        <TabsList class="flex rounded-8 gap-8">
          <TabsTrigger
            v-for="tab in favoriteAndRecentTabs"
            :key="tab.value"
            :value="tab.value"
            class="flex rounded-8 py-4 px-8 gap-4 data-[state=active]:text-black-40 text-black-20"
          >
            {{ tab.label }}
          </TabsTrigger>
          <TabsIndicator>
            <div class="border border-black-10 h-[1px] w-full" />
          </TabsIndicator>
        </TabsList>
        <TabsContent v-for="tab in favoriteAndRecentItems" :key="tab.value" :value="tab.value">
          <ul v-motion-slide-right class="list-disc list-inside flex flex-col px-8 gap-8">
            <li v-for="(item, index) in tab.items" :key="index" class="py-8">
              {{ item }}
            </li>
          </ul>
        </TabsContent>
      </Tabs>
      <!-- #endregion: favorites/ recently -->
    </div>
    <!-- #endregion: frame 0  -->
    <!-- #region: frame 1 -->
    <div class="frame-1 flex pb-12 gap-4">
      <TreeRoot>
        <TreeItem />

        <!-- or with virtual -->
        <TreeVirtualizer>
          <TreeItem />
        </TreeVirtualizer>
      </TreeRoot>
    </div>
    <!-- #endregion: frame 1  -->
    left sidebar
  </div>
</template>

<script lang="ts" setup>
import { inject, ref, watch } from 'vue'
import { useMotion, type MotionVariants } from '@vueuse/motion'
import { TreeItem, TreeRoot, TreeVirtualizer } from 'radix-vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger, TabsIndicator } from '@/components/atoms/tabs'
import { LEFT_SIDEBAR_COLLAPSED_STATE_KEY } from '../config'

const favoriteAndRecentTabs = [
  { value: 'favorites', label: 'Favorites' },
  { value: 'recently', label: 'Recently' }
]

const favoriteAndRecentItems = [
  { value: 'favorites', items: ['Item 1', 'Item 2'] },
  { value: 'recently', items: ['Item 1', 'Item 2'] }
]

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

<style scoped>
.AvatarFallback {
  animation: gradientAnimation 5s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.initials {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1);
  }
}
</style>
