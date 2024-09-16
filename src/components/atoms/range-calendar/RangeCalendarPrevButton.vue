<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { RangeCalendarPrev, type RangeCalendarPrevProps, useForwardProps } from 'radix-vue'
import { cn } from '@/composables/utils'
import { buttonVariants } from '@/components/atoms/ui/button'
import { SvgIcon } from '@/components/atoms/icons'

const props = defineProps<RangeCalendarPrevProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarPrev
    :class="
      cn(
        buttonVariants({ variant: 'outline' }),
        'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        props.class
      )
    "
    v-bind="forwardedProps"
  >
    <slot>
      <svg-icon name="IconChevronLeft" class="w-16" />
    </slot>
  </RangeCalendarPrev>
</template>
