<template>
  <NavigationMenuItem class="relative">
    <template v-if="item.children && item.children.length > 0">
      <NavigationMenuTrigger
        class="flex justify-between items-center p-8 gap-4 rounded-12 w-full bg-primary-background hover:bg-black-5"
      >
        <div class="flex items-center rounded-8 gap-8">
          <component v-if="item.icon" :is="item.icon" :class="item.iconClass" />
          <div v-if="!isCollapsed" class="f-text-regular-12 px-4 py-0">{{ item.label }}</div>
        </div>
        <icon-chevron-right v-if="!isCollapsed" class="w-16" />
      </NavigationMenuTrigger>
      <NavigationMenuContent
        class="absolute left-full top-0 ml-2 w-[212px] gap-4 rounded-16 bg-primary-background"
      >
        <NavigationMenuSub>
          <NavigationMenuList orientation="vertical" class="flex flex-col gap-4">
            <MenuItem v-for="(child, index) in item.children" :key="index" :item="child" />
          </NavigationMenuList>
        </NavigationMenuSub>
      </NavigationMenuContent>
    </template>
    <template v-else>
      <NavigationMenuLink v-if="item.route" as-child>
        <router-link :to="item.route">
          <div :class="itemLabelClasses">
            {{ item.label }}
          </div>
        </router-link>
      </NavigationMenuLink>
      <div v-else :class="itemLabelClasses">
        {{ item.label }}
      </div>
    </template>
  </NavigationMenuItem>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import {
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuSub,
  NavigationMenuLink
} from 'radix-vue'
import IconChevronRight from '@/assets/icons/chevron-right.svg'
import { IS_COLLAPSED_KEY } from '../constant'

interface MenuItem {
  label: string
  icon?: any
  iconClass?: string
  route?: string
  children?: MenuItem[]
}

const { item } = defineProps<{ item: MenuItem }>()

const itemLabelClasses =
  'flex p-8 gap-4 rounded-12 bg-primary-background f-text-regular-12 hover:bg-black-5'

const isCollapsed = inject<boolean>(IS_COLLAPSED_KEY)
</script>
