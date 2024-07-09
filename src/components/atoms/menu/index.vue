<template>
  <ul class="menu bg-primary-background w-full">
    <MenuItem v-for="(item, i) in menus" :key="i" :item="item" />
  </ul>
</template>

<script lang="ts" setup>
// import type MenuItem as MenuItemType from './type.d.ts'
import MenuItem from './menu-item.vue'
const menus = [
  {
    label: 'Item 1'
  },
  {
    label: 'Item 2',
    children: [
      {
        label: 'Item 2.1'
      },
      {
        label: 'Item 2.2'
      },
      {
        label: 'Item 2.3',
        children: [
          {
            label: 'Item 2.3.1'
          },
          {
            label: 'Item 2.3.2'
          },
          {
            label: 'Item 2.3.3'
          }
        ]
      }
    ]
  },
  {
    label: 'Item 3'
  }
]
</script>
