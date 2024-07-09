<template>
  <!-- ------------------------------------------------------------------------------------------------ -->
  <li
    v-if="props.item.children && props.item.children.length > 0"
    class="dropdown dropdown-right w-full"
  >
    <details>
      <summary class="w-full hover:bg-black-5">{{ props.item.label }}</summary>
      <ul tabindex="0" class="dropdown-content bg-primary-background menu z-[1] w-52 shadow">
        <Self v-for="(item, i) in props.item.children" :key="i" :item="item" />
      </ul>
    </details>
  </li>
  <!-- ------------------------------------------------------------------------------------------------ -->
  <li v-else>
    <a class="w-full hover:bg-black-5">{{ props.item.label }}</a>
  </li>
</template>

<script lang="ts" setup>
import { defineProps, defineAsyncComponent } from 'vue'
import type MenuItem from './type.d.ts'

const Self = defineAsyncComponent(() => import('./menu-item.vue'))

const props = defineProps<{
  item: MenuItem
}>()
</script>
