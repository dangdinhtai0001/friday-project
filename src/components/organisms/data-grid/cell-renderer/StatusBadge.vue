<template>
  <div :class="className">
    <svg-icon name="IconPointFilled" class="w-16 h-16" />
    <div class="">{{ params.value }}</div>
  </div>
</template>

<script setup lang="ts">
// import type { ICellRendererParams } from '@ag-grid-community/core'
import type { IStatusBadgeCellRendererParams } from './StatusBadge.d.ts'
import { clsx } from 'clsx'
import { SvgIcon } from '@/components/atoms/icons'

const { params } = defineProps<{
  params: IStatusBadgeCellRendererParams
}>()

const className = clsx('flex items-center ', params.getTextClass?.(params))
</script>

<style scoped></style>
