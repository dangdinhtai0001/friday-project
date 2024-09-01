<template>
  <div class="flex p-8 gap-4">
    <div :class="chevronClass">
      <svg-icon v-if="!isExpanded" name="IconChevronRight" class="w-16 h-16" />
      <svg-icon v-else name="IconChevronDown" class="w-16 h-16" />
    </div>
    <div class="flex gap-8 items-center rounded-8 w-full">
      <SvgIcon :name="item.icon" class="w-20 h-20" />
      <div
        v-if="!isCollapsed"
        class="flex-1 min-w-0 text-ellipsis overflow-hidden whitespace-nowrap"
      >
        {{ item?.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue'
import clsx from 'clsx'
import { type NavigationItem } from './type'

const props = defineProps<{
  item: NavigationItem
  isCollapsed?: boolean
  isExpanded?: boolean
}>()

const { item, isCollapsed } = toRefs(props)

const chevronClass = computed(() =>
  clsx('rounded-8 text-black-20', {
    invisible: (item.value?.children?.length ?? 0) <= 0
  })
)
</script>
