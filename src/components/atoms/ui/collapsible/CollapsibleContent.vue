<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps } from 'radix-vue'

const props = defineProps<CollapsibleContentProps>()
</script>

<template>
  <CollapsibleContent v-bind="props" class="overflow-hidden collapsible-content">
    <!-- class="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" -->
    <slot />
  </CollapsibleContent>
</template>

<style scoped>
/* styles.css */
.collapsible-content {
  overflow: hidden;
}
.collapsible-content[data-state='open'] {
  animation: slideDown 300ms ease-out;
}
.collapsible-content[data-state='closed'] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
}
</style>
