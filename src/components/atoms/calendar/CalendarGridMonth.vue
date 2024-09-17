<template>
  <ListboxRoot
    class="flex flex-col rounded-lg border mx-auto"
    @update:model-value="handleOnUpdateModel"
    :model-value="data.month.toString()"
  >
    <ListboxContent class="overflow-auto">
      <ListboxItem
        v-for="month in createYear({ dateObj: date })"
        :key="month.toString()"
        :value="month.month.toString()"
        :class="
          clsx(
            'flex rounded-12 px-8 py-16 gap-8 hover:bg-black-5 cursor-pointer f-text-regular-12',
            { 'bg-black-100 text-white-100 hover:bg-black-100': month.month == date.month }
          )
        "
      >
        <ListboxItemIndicator
          class="absolute left-0 w-[25px] inline-flex items-center justify-center"
        />
        <span>{{ formatter.custom(toDate(month), { month: 'long' }) }}</span>
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
  {{ data }}
</template>

<script setup lang="ts">
import { createYear, toDate } from 'radix-vue/date'
import { type DateValue } from '@internationalized/date'
import {
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxRoot,
  useDateFormatter
} from 'radix-vue'
import clsx from 'clsx'
import { useVModel } from '@vueuse/core'
import { ref, type Ref } from 'vue'
import type { AcceptableValue } from 'node_modules/radix-vue/dist/shared/types'

const props = defineProps<{
  date: DateValue
}>()

const data = ref<DateValue>(props.date)

const formatter = useDateFormatter('en')

const handleOnUpdateModel = (v: AcceptableValue) => {
  data.value = data.value?.set({ month: Number(v) })
}
</script>

<style scoped></style>
