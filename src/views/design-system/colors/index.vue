<template>
  <DesignSystemTemplate title="Colors">
    <template v-slot:introduction>
      <p>Colors are a key part of the design system.</p>
      <p>
        To define Colors, we have the following principles: 1. Widely used in design. 2. The number
        of Colors should be as small as possible.
      </p>
      <p>
        The color in SnowUI has two parts, the color in the Themes variable and the Color styles.
        Their difference is: when switching between light and dark mode, the color in the Themes
        variable will change, but the color in the Color styles will remain unchanged.
      </p>
    </template>
    <template v-slot:rules-of-use>
      <p>Please try to keep the number of Colors below 32.</p>
      <p>
        90% principle: If the color used in a single product accounts for less than 10%, please do
        not include it in the design system.
      </p>
    </template>
    <template v-slot:how-to-use>
      <p>
        Colors can be added, modified and deleted. Modifying them will affect all components and
        pages, please proceed with caution.
      </p>
    </template>
    <template v-slot:content>
      <div class="flex flex-col gap-4">
        <!-- ----------------------- || Black || ----------------------- -->
        <div class="grid grid-cols-3 gap-28 py-28">
          <div class="col-span-1 f-text-regular-24">Blacks</div>
          <div class="col-span-2 f-text-regular-14">
            <div class="grid grid-cols-4 gap-[28px]">
              <div v-for="(theme, index) in themeDefs" :key="index" class="flex flex-col">
                <div class="flex flex-col items-center justify-center gap-8">
                  <div>{{ theme.title }}</div>
                  <div v-for="(item, index) in black" :key="index" :class="item">
                    <p>{{ opacity[index] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ----------------------- || Black || ----------------------- -->
        <!-- ----------------------- || White || ----------------------- -->
        <div class="grid grid-cols-3 gap-28 py-28">
          <div class="col-span-1 f-text-regular-24">White</div>
          <div class="col-span-2 f-text-regular-14">
            <div class="grid grid-cols-4 gap-[28px]">
              <div v-for="(theme, index) in themeDefs" :key="index" class="flex flex-col">
                <div class="flex flex-col items-center justify-center gap-8">
                  <div>{{ theme.title }}</div>
                  <div v-for="(item, index) in white" :key="index" :class="item">
                    <p>{{ opacity[index] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ----------------------- || White || ----------------------- -->
        <!-- ----------------------- || Primary || ----------------------- -->
        <div class="grid grid-cols-3 gap-28 py-28">
          <div class="col-span-1 f-text-regular-24">Primary</div>
          <div class="col-span-2 f-text-regular-14">
            <div class="grid grid-cols-4 gap-[28px]">
              <div v-for="(theme, index) in themeDefs" :key="index" class="flex flex-col">
                <div class="flex flex-col items-center justify-center gap-8">
                  <div>{{ theme.title }}</div>
                  <div v-for="(item, index) in _primary" :key="index" :class="item">
                    <p>{{ primary[index] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ----------------------- || Primary || ----------------------- -->
        <!-- ----------------------- || Secondary || ----------------------- -->
        <div class="grid grid-cols-3 gap-28 py-28">
          <div class="col-span-1 f-text-regular-24">Secondary</div>
          <div class="col-span-2 f-text-regular-14">
            <div class="grid grid-cols-4 gap-[28px]">
              <div v-for="(theme, index) in themeDefs" :key="index" class="flex flex-col">
                <div class="flex flex-col items-center justify-center gap-8">
                  <div>{{ theme.title }}</div>
                  <div v-for="(item, index) in _secondary" :key="index" :class="item">
                    <p>{{ secondary[index] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ----------------------- || Secondary || ----------------------- -->
      </div>
    </template>
  </DesignSystemTemplate>
</template>

<script lang="ts" setup>
import DesignSystemTemplate from '@/components/templates/design-system/index.vue'
import { ref } from 'vue'
import { themeDefs } from '@/hooks'

const opacity = [100, 80, 40, 20, 10, 5]
const primary = ['brand', 'blue', 'purple', 'purple-50', 'light', 'background']
const secondary = ['indigo', 'purple', 'cyan', 'blue', 'green', 'mint', 'yellow', 'orange', 'red']

const classes = 'text-center h-10  border-[1px] rounded-lg flex items-center justify-center'

const black = ref(
  opacity.map((value) => {
    if (value > 50) {
      return `${classes} w-full bg-black-${value} border-white-${value} text-white-${value}`
    } else {
      return `${classes} w-full bg-black-${value} border-black-40 text-black-100 `
    }
  })
)
const white = ref(
  opacity.map((value) => {
    if (value > 50) {
      return `${classes} w-full bg-white-${value} border-black-${value} text-black-${value}`
    } else {
      return `${classes} w-full bg-white-${value} border-black-40 text-black-100`
    }
  })
)

const _primary = ref(
  primary.map((value) => {
    if (value === 'brand') {
      return `${classes} w-full  bg-primary-${value} border-black-40 text-white-100`
    } else {
      return `${classes} w-full  bg-primary-${value} border-black-40 text-black-100`
    }
  })
)

const _secondary = ref(
  secondary.map((value) => {
    if (value === 'red') {
      return `${classes} w-full  bg-secondary-${value} border-black-40 text-white-100`
    } else {
      return `${classes} w-full  bg-secondary-${value} border-black-40 text-black-100`
    }
  })
)
</script>
