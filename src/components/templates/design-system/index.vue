<template>
  <div class="p-10">
    <div class="bg-primary-light p-[40px] rounded-[20px] f-text-semibold-48">
      {{ title }}
    </div>
    <!-- ----------------------------------------------------------------------------------------- -->
    <div class="grid grid-cols-3 gap-[28px] py-[40px]">
      <!-- ----- || introduction || ----- -->
      <div class="col-span-1 f-text-regular-24 text-secondary-indigo">Introduction</div>
      <div class="col-span-2 f-text-regular-14">
        <slot name="introduction" />
      </div>
      <div class="col-span-3 border border-black-10" />
      <!-- ----- || Rules of use || ----- -->
      <div class="col-span-1 f-text-regular-24 text-secondary-indigo">Rules of use</div>
      <div class="col-span-2 f-text-regular-14">
        <slot name="rules-of-use" />
      </div>
      <div class="col-span-3 border border-black-10" />
      <!-- ----- || How to use || ----- -->
      <div class="col-span-1 f-text-regular-24 text-secondary-indigo">How to use</div>
      <div class="col-span-2 f-text-regular-14">
        <slot name="how-to-use" />
      </div>
      <div class="col-span-3 border border-black-80" />
      <!-- ----- || Notes || ----- -->
      <div
        v-if="hasSlotContent(slots?.['notes'])"
        class="col-span-1 f-text-regular-24 text-secondary-indigo"
      >
        Notes
      </div>
      <div class="col-span-2 f-text-regular-14">
        <slot name="notes" />
      </div>
    </div>
    <!-- ----- || Content || ----- -->
    <slot name="content" />
    <!-- ----------------------------------------------------------------------------------------- -->
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'
import { useSlotHelpers } from '@/hooks'

defineProps<{
  title: string
}>()

const slots = useSlots()
const { hasSlotContent } = useSlotHelpers(slots)
</script>
