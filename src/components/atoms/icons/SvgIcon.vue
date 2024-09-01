<script lang="ts" setup>
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/composables/utils'

// const props = defineProps<{
//   prefix?: string
//   name: string
//   class?: HTMLAttributes['class']
// }>()

const props = withDefaults(
  defineProps<{
    prefix?: string
    name: string
    class?: HTMLAttributes['class']
  }>(),
  {
    prefix: 'icon'
  }
)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg aria-hidden="true" :class="cn('svg-icon w-20 h-20', props.class)">
    <use :href="symbolId" />
  </svg>
</template>
