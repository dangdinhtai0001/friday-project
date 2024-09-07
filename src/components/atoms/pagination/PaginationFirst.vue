<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { PaginationFirst, type PaginationFirstProps } from 'radix-vue'
import { Button } from '@/components/atoms/ui/button'
import { cn } from '@/composables/utils'
import { SvgIcon } from '@/components/atoms/icons'

const props = withDefaults(
  defineProps<PaginationFirstProps & { class?: HTMLAttributes['class'] }>(),
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
  <PaginationFirst v-bind="delegatedProps">
    <Button :class="cn('w-10 h-10 p-0', props.class)" variant="outline">
      <slot>
        <SvgIcon name="IconChevronsLeft" class="w-16" />
      </slot>
    </Button>
  </PaginationFirst>
</template>
