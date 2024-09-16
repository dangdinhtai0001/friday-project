<template>
  <CalendarGrid v-for="month in props.grid" :key="month.value.toString()">
    <CalendarGridHead>
      <CalendarGridRow>
        <CalendarHeadCell v-for="day in props.weekDays" :key="day">
          {{ day }}
        </CalendarHeadCell>
      </CalendarGridRow>
    </CalendarGridHead>
    <CalendarGridBody>
      <CalendarGridRow
        v-for="(weekDates, index) in month.rows"
        :key="`weekDate-${index}`"
        class="mt-2 w-full"
      >
        <CalendarCell v-for="weekDate in weekDates" :key="weekDate.toString()" :date="weekDate">
          <CalendarCellTrigger :day="weekDate" :month="month.value" />
        </CalendarCell>
      </CalendarGridRow>
    </CalendarGridBody>
  </CalendarGrid>
</template>

<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell
} from '.'
import type { Grid } from 'radix-vue/date'

const props = defineProps<{
  grid: Grid<DateValue>[]
  weekDays: string[]
}>()
</script>

<style scoped></style>
