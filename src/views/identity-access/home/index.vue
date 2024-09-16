<template>
  <div>
    <form @submit="handleOnSubmit">
      <div>
        <form.Field
          name="firstName"
          :validators="{
            onChange: ({ value }) =>
              !value
                ? `A first name is required`
                : value.length < 3
                  ? `First name must be at least 3 characters`
                  : undefined,
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: onChangeFirstName
          }"
        >
          <template v-slot="{ field, state }">
            <form-item
              :field="field"
              label="First Name"
              description="First Name description"
              class="w-1/3"
            >
              <Input
                :id="field.name"
                :name="field.name"
                :modelValue="field.state.value"
                @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
                @blur="field.handleBlur"
              />
            </form-item>
          </template>
        </form.Field>
        <form.Field
          name="lastName"
          :validators="{
            onChange: ({ value }) =>
              !value
                ? `A last name is required`
                : value.length < 3
                  ? `Last name must be at least 3 characters`
                  : undefined,
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: onChangeFirstName
          }"
        >
          <template v-slot="{ field, state }">
            <form-item
              :field="field"
              label="Last Name"
              description="First Name description"
              class="w-1/3"
            >
              <Input
                :id="field.name"
                :name="field.name"
                :modelValue="field.state.value"
                @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
                @blur="field.handleBlur"
              />
            </form-item>
          </template>
        </form.Field>
      </div>
    </form>
    <RangeCalendar v-model="value" class="rounded-md border" />
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { FormItem } from '@/components/molecules/form'
import { Input } from '@/components/atoms/ui/input'

import { type Ref, ref } from 'vue'
import type { DateRange } from 'radix-vue'
import { getLocalTimeZone, today } from '@internationalized/date'
import { RangeCalendar } from '@/components/atoms/ui/range-calendar'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const value = ref({
  start,
  end
}) as Ref<DateRange>
// ----------------------------------
const form = useForm({
  defaultValues: {
    firstName: '',
    lastName: ''
  },
  onSubmit: async ({ value }) => {
    // Do something with form data
    alert(JSON.stringify(value))
  }
})

const handleOnSubmit = async (e) => {
  e.preventDefault()
  e.stopPropagation()
  form.handleSubmit()
}

async function onChangeFirstName({ value }: { value: string }) {
  await new Promise((resolve) => setTimeout(resolve, 10))
  return value.includes(`error`) && `No 'error' allowed in first name`
}
</script>

<style scoped></style>
