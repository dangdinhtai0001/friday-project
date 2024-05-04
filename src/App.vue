<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useTheme } from '@/hooks'

const { initializeTheme, currentTheme } = useTheme()

initializeTheme()
</script>

<template>
  <html :data-theme="currentTheme?.name || ''">
    <RouterView />
  </html>
</template>
