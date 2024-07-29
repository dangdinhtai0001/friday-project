<template>
  <div>{{ currentMenu }}</div>

  <MenubarRoot v-model="currentMenu" class="flex flex-col gap-4">
    <MenubarMenu value="item1">
      <MenubarTrigger class="rounded-16 p-12">
        <MenuItem label="Item 1">
          <template v-slot:icon>
            <IconColorSwatch />
          </template>
        </MenuItem>
      </MenubarTrigger>
    </MenubarMenu>
    <MenubarMenu value="item2">
      <MenubarTrigger class="rounded-16 p-12">
        <MenuItem label="Item 2">
          <template v-slot:icon>
            <IconColorSwatch />
          </template>
        </MenuItem>
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent>
          <MenubarItem> Item 1.1 </MenubarItem>
          <MenubarItem> Item 1.2 </MenubarItem>
          <MenubarItem> Item 1.3 </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  MenubarRoot,
  MenubarMenu,
  MenubarTrigger,
  MenubarPortal,
  MenubarContent,
  MenubarItem
} from 'radix-vue'

import IconColorSwatch from '@/assets/icons/color-swatch.svg'
import MenuItem from './menu-item.vue'

const currentMenu = ref('')
</script>
