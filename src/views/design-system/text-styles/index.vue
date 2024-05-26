<template>
  <DesignSystemTemplate title="Text styles">
    <template v-slot:introduction>
      <p>Text styles are a key part of the design system.</p>
      <p>
        To define Text styles, we have the following principles: 1. Widely used in design. 2. The
        number of Text styles should be as small as possible.
      </p>
      <p>
        The font we use is:
        <a
          class="text-secondary-indigo hover:bg-secondary-indigo hover:text-black-100"
          href="https://fonts.google.com/specimen/Inter"
          >Inter</a
        >, other recommended fonts: SF Pro, Roboto, Averta.
      </p>
    </template>
    <template v-slot:rules-of-use>
      <p>Please try to keep the number of Text styles below 16.</p>
      <p>
        90% principle: If the Text styles used in a single product accounts for less than 10%,
        please do not include it in the design system.
      </p>
    </template>
    <template v-slot:how-to-use>
      <p>
        Text styles can be added, modified and deleted. Modifying them will affect all components
        and pages, please proceed with caution.
      </p>
    </template>
    <template v-slot:notes>
      <p>The fill color from dark to light represents the frequency of use from high to low.</p>
      <p>
        Different products will have different frequency of use, here is the
        <a
          class="text-secondary-indigo hover:bg-secondary-indigo hover:text-black-100"
          href="https://www.figma.com/file/pTTWqClVP5NPzmImOUiPn3"
          >Snow Dashboard UI Kit↗</a
        >
        as a reference.
      </p>
    </template>
    <template v-slot:content>
      <div class="grid grid-cols-3 gap-28 py-28">
        <div class="col-span-1 f-text-regular-24 text-secondary-indigo">Font: Inter</div>
        <div class="col-span-2 flex flex-col gap-8">
          <div v-for="(value, index) in classNames" :key="index" :class="value">
            {{ texts[index] }}
          </div>
        </div>
      </div>
    </template>
  </DesignSystemTemplate>
</template>

<script lang="ts" setup>
import DesignSystemTemplate from '@/components/templates/design-system/index.vue'

const sizes = [64, 48, 24, 18, 14, 12]
const weights = ['semibold', 'regular']

const classNames: string[] = []
const texts: string[] = []

sizes.forEach((size) => {
  weights.forEach((weight) => {
    classNames.push(`f-text-${weight}-${size} bg-black-5 w-fit p-20 rounded-16`)
    texts.push(`${weight}-${size}`)
  })
})
</script>
