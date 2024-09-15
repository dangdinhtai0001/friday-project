<template>
  <Slot :id="formItemId">
    <div class="flex rounded-16 items-center gap-8">
      <slot />
      <div :class="clsx('', { invisible: !props.state.meta.isTouched })">
        <svg-icon
          v-if="props.state.meta.isValidating"
          name="IconRefresh"
          class="w-28 animate-spin"
        />
        <svg-icon
          v-else-if="props.state.meta.errors.length > 0"
          name="IconAlertTriangle"
          class="w-28 text-secondary-red animate-shake"
        />
        <svg-icon v-else name="IconCheck" class="w-28 text-secondary-green" />
      </div>
    </div>
  </Slot>
</template>

<script setup lang="ts">
import { Slot } from 'radix-vue'
import { FieldApi } from '@tanstack/vue-form'
import { useFormField } from './useFormField'
import { SvgIcon } from '@/components/atoms/icons'
import clsx from 'clsx'

const props = defineProps<{
  state: FieldApi<any, any, any, any>['state']
}>()

const { formItemId } = useFormField()
</script>

<style scoped></style>
