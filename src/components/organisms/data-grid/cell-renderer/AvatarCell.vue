<template>
  <div>
    <avatar-with-label :label="label" :avatar-url="avatarUrl" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IAvatarCellRendererParams } from './AvatarCell.d.ts'
import { AvatarWithLabel } from '@/components/molecules/avatar-with-label'

const { params } = defineProps<{
  params: IAvatarCellRendererParams
}>()

const label = computed(() => {
  return params.getLabel(params)
})

const avatarUrl = computed(() => {
  return params.getAvatarUrl(params)
})
</script>

<style scoped></style>
