<template v-if="props.state.meta.isTouched">
  <!-- <em v-for="(error, index) of props.state.meta.errors" :key="index">{{ error }}</em> -->
  <div
    v-for="(error, index) of props.state.meta.errors"
    :key="`#${formMessageId}-${index}`"
    :class="cn('flex gap-2 items-center f-text-regular-12 text-secondary-red ', props.class)"
  >
    <svg-icon name="IconPointFilled" class="w-12" />
    {{ error }}
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/composables/utils'
import { FieldApi } from '@tanstack/vue-form'
import { useFormField } from './useFormField'
import { SvgIcon } from '@/components/atoms/icons'

const props = defineProps<{
  state: FieldApi<any, any, any, any>['state']
  class?: HTMLAttributes['class']
}>()

const { formMessageId } = useFormField()
</script>

<style scoped></style>
