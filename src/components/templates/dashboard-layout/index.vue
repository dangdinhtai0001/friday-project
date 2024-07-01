<template>
  <div class="bg-primary-background h-screen">
    <div class="flex w-full">
      <LeftSideBar />
      <div class="w-full">
        <Header />
        <section class="app-main h-full">
          <div class="app-scrollbar">
            <!-- Using route.path and route.fullPath as keys has different effects, most of the time path is more common -->
            <router-view v-slot="{ Component, route }">
              <!-- <transition name="el-fade-in" mode="out-in"> -->
              <!-- <keep-alive :include="tagsViewStore.cachedViews"> -->
              <component :is="Component" :key="route.path" />
              <!-- </keep-alive> -->
              <!-- </transition> -->
            </router-view>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'

import Header from './header/index.vue'
import LeftSideBar from './left-sidebar/index.vue'

const isCollapsed = ref(false)

const toggleSidebar = () => {
  console.log('Toggle sidebar')
  isCollapsed.value = !isCollapsed.value
}

provide('isCollapsed', isCollapsed)
provide('toggleSidebar', toggleSidebar)
</script>
