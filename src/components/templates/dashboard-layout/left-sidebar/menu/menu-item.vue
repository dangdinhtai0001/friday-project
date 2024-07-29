<template>
  <div class="flex rounded-8 gap-12">
    <slot name="icon" />
    <div class="f-text-regular-114">{{ label }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label?: string
}>()

const { label } = props
</script>
