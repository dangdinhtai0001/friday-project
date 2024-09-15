<template>
  <div :id="formDescriptionId" :class="cn('text-muted-foreground', props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useFormField } from './useFormField'
import { cn } from '@/composables/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { formDescriptionId } = useFormField()
</script>

<style scoped></style>
