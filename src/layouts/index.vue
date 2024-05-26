<template>
  <div class="bg-primary-background h-screen">
    <NavigationBar />
    <AppMain />
  </div>
</template>

<script lang="ts" setup>
import { AppMain } from './components'
import NavigationBar from './components/navigation-bar/index.vue'
</script>
