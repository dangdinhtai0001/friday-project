<template>
  <div class="h-[1500px] bg-red-100">
    <div>
      <Vueform class="border" ref="form$" :endpoint="false" @submit="submitForm" v-model="data">
        <TextElement name="name" />
        <TextElement name="email" />
      </Vueform>
      {{ data }}
    </div>
    <Button @click="submitForm">Submit</Button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Button } from '@/components/atoms/ui/button'

const form$ = ref(null)
const data = ref({})

onMounted(() => {
  if (form$.value) {
    const name = form$.value.el$('name')
    const email = form$.value.el$('email')

    // Get element value
    console.log(name.value) // getting `name` element value
    console.log(email.value) // getting `email` element value

    // Set element value
    name.update('John Doe') // setting `name` element value
    email.update('john@doe.com') // setting `email` element value
  }
})

const submitForm = async () => {
  console.log(form$.value.data)
}
</script>
