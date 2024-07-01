<template>
  <div class="w-[212px]">sidebar {{ isCollapsed }}</div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'

const isCollapsed = inject<boolean>('isCollapsed')
</script>
