<template>
  <div class="bg-primary-background h-screen">
    <NavigationBar />
    <AppMain />
  </div>
</template>

<script lang="ts" setup>
import { AppMain } from './components'
import NavigationBar from './components/navigation-bar/index.vue'
import { useRouteListener, EVENT_TYPE } from '@/hooks/useRouteListener'

import emitter from '@/configs/event-bus'

useRouteListener()

emitter.on(EVENT_TYPE, (e) => console.log('foo', e))
</script>
