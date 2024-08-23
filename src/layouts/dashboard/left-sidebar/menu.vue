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
import IconVectorTriangle from '@/assets/icons/vector-triangle.svg'

// JSON cấu hình
const menuItems = [
  {
    label: 'Components',
    icon: IconVectorTriangle,
    iconClass: 'w-20',
    children: [
      {
        label: 'Tables',
        route: '/components/table'
      }
    ]
  },
  {
    label: 'Design',
    icon: IconVectorTriangle,
    iconClass: 'w-20',
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
