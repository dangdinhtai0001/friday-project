<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  prefix?: string
  name: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon'
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

console.log(symbolId.value)
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>
