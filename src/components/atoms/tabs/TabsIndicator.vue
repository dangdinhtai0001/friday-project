<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { TabsIndicator, type TabsIndicatorProps } from 'radix-vue'
import { cn } from '@/composables/utils'

const props = defineProps<TabsIndicatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsIndicator
    :class="
      cn(
        'absolute px-4 left-0 bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300',
        props.class
      )
    "
    v-bind="delegatedProps"
  >
    <slot />
  </TabsIndicator>
</template>
