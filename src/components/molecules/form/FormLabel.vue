<template>
  <Label :class="cn('text-destructive', props.class)" :for="formItemId">
    <slot />
  </Label>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { LabelProps } from 'radix-vue'
import { cn } from '@/composables/utils'
import { Label } from '@/components/atoms/ui/label'
import { useFormField } from './useFormField'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { formItemId } = useFormField()
</script>

<style scoped></style>
