<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { PaginationNext, type PaginationNextProps } from 'radix-vue'
import { Button } from '@/components/atoms/ui/button'
import { cn } from '@/composables/utils'
import { SvgIcon } from '@/components/atoms/icons'

const props = withDefaults(
  defineProps<PaginationNextProps & { class?: HTMLAttributes['class'] }>(),
  {
    asChild: true
  }
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationNext v-bind="delegatedProps">
    <Button :class="cn('w-10 h-10 p-0', props.class)" variant="outline">
      <slot>
        <svg-icon name="IconChevronRight" class="w-16" />
      </slot>
    </Button>
  </PaginationNext>
</template>
