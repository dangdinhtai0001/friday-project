<script lang="ts" setup>
import { type HTMLAttributes, type Ref, computed, ref } from 'vue'
import {
  CalendarRoot,
  type CalendarRootEmits,
  type CalendarRootProps,
  useForwardPropsEmits,
  useDateFormatter
} from 'radix-vue'
import { CalendarGridDay, CalendarGridMonth } from '.'
import { cn } from '@/composables/utils'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/atoms/tabs'
import { createDecade, createYear, toDate } from 'radix-vue/date'
import clsx from 'clsx'
import { useVModel } from '@vueuse/core'

const props = defineProps<CalendarRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<CalendarRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

// #region custom
const placeholder = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: today(getLocalTimeZone())
}) as Ref<DateValue>

console.log(typeof placeholder)

const formatter = useDateFormatter('en')
const selectionModes = ['day', 'month', 'year'] as Array<keyof DateValue>
const getFormattedDatePart = (part: keyof DateValue, date: DateValue) => {
  switch (part) {
    case 'day':
      return formatter.custom(toDate(date), { day: '2-digit' })
    case 'month':
      return formatter.custom(toDate(date), { month: '2-digit' })
    case 'year':
      return formatter.custom(toDate(date), { year: 'numeric' })
    default:
      return ''
  }
}
// const currentSelectionMode = ref<keyof DateValue>('day')
const currentSelectionMode = ref<String>('day')
// #endregion
</script>

<template>
  <CalendarRoot
    v-slot="{ grid, weekDays, date }"
    :class="cn('px-16 rounded-16 ', props.class)"
    v-bind="forwarded"
  >
    <Tabs default-value="day" :v-model="currentSelectionMode" class="w-full h-full">
      <TabsList class="flex items-center justify-start w-full border-b">
        <div v-for="(mode, index) in selectionModes" :key="index">
          <TabsTrigger :value="String(mode)" class="p-0 m-0">
            {{ getFormattedDatePart(mode, date) }}
          </TabsTrigger>
          <span v-if="index < selectionModes.length - 1">/</span>
        </div>
      </TabsList>

      <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
        <TabsContent value="day" :force-mount="true">
          <calendar-grid-day :grid="grid" :week-days="weekDays" />
        </TabsContent>
        <TabsContent value="month" :force-mount="true">
          <calendar-grid-month :date="date" :placeholder="placeholder" />
        </TabsContent>
        <TabsContent value="year" :force-mount="true"> YEAR </TabsContent>
      </div>
    </Tabs>
  </CalendarRoot>
</template>
