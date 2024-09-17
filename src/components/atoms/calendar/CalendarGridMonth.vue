<template>
  <ListboxRoot
    class="flex flex-col rounded-lg border mx-auto"
    v-model="data"
    v-on:update:model-value="handleOnUpdateModel"
  >
    <ListboxContent class="grid grid-cols-6">
      <ListboxItem
        v-for="month in createYear({ dateObj: date })"
        :key="month.toString()"
        :value="month.month.toString()"
        :class="
          clsx('flex rounded-12 px-8 py-16 gap-8 cursor-pointer f-text-regular-12', {
            'bg-black-100 text-white-100 hover:bg-black-100': month.month == data.month,
            ' hover:bg-black-5': month.month !== data.month
          })
        "
      >
        <ListboxItemIndicator
          class="absolute left-0 w-[25px] inline-flex items-center justify-center"
        />
        <span>{{ formatter.custom(toDate(month), { month: 'short' }) }}</span>
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
  data: {{ data }}
</template>

<script setup lang="ts">
import { createYear, toDate } from 'radix-vue/date'
import { type DateValue } from '@internationalized/date'
import {
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxRoot,
  useDateFormatter,
  type CalendarRootEmits
} from 'radix-vue'
import clsx from 'clsx'
import { useVModel } from '@vueuse/core'
import type { AcceptableValue } from 'node_modules/radix-vue/dist/shared/types'
import type { Ref } from 'vue'

const props = defineProps<{
  date: DateValue
  modelValue: undefined
}>()

const emits = defineEmits<CalendarRootEmits>()
const data = useVModel(props, 'modelValue', emits, {
  passive: true
}) as Ref<DateValue>

const formatter = useDateFormatter('en')

const handleOnUpdateModel = (v: AcceptableValue) => {
  data.value = data.value?.set({ month: Number(v) })
}
</script>

<style scoped></style>
