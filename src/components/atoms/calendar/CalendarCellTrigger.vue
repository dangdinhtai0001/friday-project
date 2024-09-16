<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import { CalendarCellTrigger, type CalendarCellTriggerProps, useForwardProps } from 'radix-vue'
import { buttonVariants } from '@/components/atoms/ui/button'
import { cn } from '@/composables/utils'

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <!-- <CalendarCellTrigger
    :class="
      cn(
        buttonVariants({ variant: 'ghost' }),
        'h-9 w-9 p-0 font-normal',
        '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
        // Selected
        'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
        // Disabled
        'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
        // Unavailable
        'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
        // Outside months
        'data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30',
        props.class
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger> -->
  <CalendarCellTrigger
    :class="
      cn(
        buttonVariants({ variant: 'ghost' }),
        'h-9 w-9 p-0 hover:bg-black-5 rounded-12',
        '[&[data-today]:not([data-selected])]:bg-secondary-purple [&[data-today]:not([data-selected])]:text-black-100',
        // Selected
        'data-[selected]:bg-black-100 data-[selected]:text-white-100 data-[selected]:opacity-100 data-[selected]:hover:bg-black-100 data-[selected]:hover:text-white-100 data-[selected]:focus:bg-black-100 data-[selected]:focus:text-white-100',
        // Disabled
        'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
        // Unavailable
        'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
        // Outside months
        'data-[outside-view]:text-black-40 data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-black-50 [&[data-outside-view][data-selected]]:text-white-100 [&[data-outside-view][data-selected]]:opacity-30',
        props.class
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
