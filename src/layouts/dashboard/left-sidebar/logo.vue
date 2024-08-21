<template>
  <div class="flex items-center justify-center">
    <div>logo</div>
    <div v-if="!isCollapsed">text</div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
const isCollapsed = inject<boolean>('isCollapsed')
</script>
