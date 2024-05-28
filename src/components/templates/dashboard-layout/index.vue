<template>
  <div class="bg-primary-background h-screen">
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
</template>

<script lang="ts" setup>
import Header from './header/index.vue'
</script>
