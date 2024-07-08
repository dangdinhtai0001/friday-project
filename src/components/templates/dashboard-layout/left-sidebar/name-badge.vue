<template>
  <!-- <div class="flex justify-center gap-8"> -->
  <div :class="`flex gap-8 ${isCollapsed ? 'justify-center' : ''}`">
    <div class="avatar">
      <div class="w-24 rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <!-- ----- -->
    <div v-if="!isCollapsed" class="f-text-regular-14">ByeWind</div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
const isCollapsed = inject<boolean>('isCollapsed')
</script>
