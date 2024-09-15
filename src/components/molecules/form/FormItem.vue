<template>
  <div :class="cn('flex flex-col rounded-8 gap-8', props.class)">
    <form-label v-if="props.label !== false" class="f-text-semibold-14 rounded-8">
      {{ computedLabel }}
    </form-label>
    <form-control :state="props.field.state">
      <slot />
    </form-control>
    <form-description v-if="props.description" class="f-text-regular-12 text-black-40 rounded-8">
      {{ props.description }}
    </form-description>
    <form-message :state="props.field.state" class="rounded-8" />
    <!-- <pre>{{ field.state }}</pre> -->
  </div>
</template>

<script setup lang="ts">
import { computed, type HTMLAttributes, provide } from 'vue'
import { useId } from 'radix-vue'
import { FieldApi } from '@tanstack/vue-form'
import { FORM_ITEM_INJECTION_KEY } from './InjectionKeys'
import { cn } from '@/composables/utils'
import FormLabel from './FormLabel.vue'
import FormDescription from './FormDescription.vue'
import FormMessage from './FormMessage.vue'
import FormControl from './FormControl.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  field: FieldApi<any, any, any, any>
  label?: string | boolean
  description?: string
}>()

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)

const computedLabel = computed(() => {
  return props.label ? props.label : props.field.name
})
</script>

<style scoped></style>
