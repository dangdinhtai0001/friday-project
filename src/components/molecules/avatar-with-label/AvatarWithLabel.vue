<template>
  <div>
    <!-- #region:  avatar + label  -->
    <div class="flex rounded-8 p-8 gap-8">
      <Avatar class="w-24 h-24">
        <AvatarImage :src="avatarUrl" alt="@radix-vue" />
        <AvatarFallback
          class="bg-gradient-to-r from-black-80 via-black-40 to-black-5 text-black-80 f-text-semibold-12 flex text-center items-center justify-center w-full h-full border rounded-full"
        >
          <span class="initials">{{ shortLabel }}</span>
        </AvatarFallback>
      </Avatar>
      <div class="flex-1 min-w-0 text-ellipsis overflow-hidden whitespace-nowrap">{{ label }}</div>
    </div>
    <!-- #endregion:  avatar + label -->
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { IAvatarWithLabelProps } from './types.d.ts'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/atoms/ui/avatar'
const { label, avatarUrl } = defineProps<IAvatarWithLabelProps>()

const shortLabel = computed(() => {
  return Array.from(label || '')[0]
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
