<template>
  <NavigationMenuRoot orientation="vertical">
    <NavigationMenuList class="flex flex-col gap-4">
      <MenuItem v-for="(item, index) in menuItems" :key="index" :item="item" />
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>

<script lang="ts" setup>
import { NavigationMenuRoot, NavigationMenuList } from 'radix-vue'
import MenuItem from './menu-item.vue'

// JSON cấu hình
const menuItems = [
  {
    label: 'Item 1',
    content: 'Item 1 content'
  },
  {
    label: 'Item 2',
    content: 'Item 2 content'
  },
  {
    label: 'Item 3',
    children: [
      {
        label: 'Item 3.1',
        content: 'Item 3.1 content'
      },
      {
        label: 'Item 3.2',
        content: 'Item 3.2 content'
      }
    ]
  },
  {
    label: 'Design system',
    children: [
      {
        label: 'Variables',
        route: '/design-system'
      },
      {
        label: 'Spacing',
        route: '/design-system/space-size-radius'
      },
      {
        label: 'Colors',
        route: '/design-system/color'
      },
      {
        label: 'Text styles',
        route: '/design-system/text-styles'
      }
    ]
  }
]
</script>
