<template>
  <NavigationMenuItem class="relative">
    <template v-if="item.children && item.children.length > 0">
      <NavigationMenuTrigger class="border w-full flex p-12 gap-12 rounded-16">
        {{ item.label }}
      </NavigationMenuTrigger>
      <NavigationMenuContent class="absolute left-full top-0 ml-2 w-full rounded-16">
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
          <div class="flex p-12 gap-12 rounded-16 border bg-primary-background">
            {{ item.label }}
          </div>
        </router-link>
      </NavigationMenuLink>
      <div v-else class="flex p-12 gap-12 rounded-16 border">
        {{ item.label }}
      </div>
    </template>
  </NavigationMenuItem>
</template>

<script setup lang="ts">
import {
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuSub,
  NavigationMenuLink
} from 'radix-vue'

interface MenuItem {
  label: string
  route?: string
  children?: MenuItem[]
}

const { item } = defineProps<{ item: MenuItem }>()
</script>
