<template>
  <DesignSystemTemplate title="Spacing, Icon size, Corner radius">
    <template v-slot:introduction>
      <p>
        Spacing, Icon size, Corner radius are key parts of the design system, you can find them in
        variables.
      </p>
      <p>
        To define them, we have the following principles: 1. Widely used in design. 2. The number of
        Spacing, Icon size, and Corner radius should be as small as possible.
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
        Spacing, Icon size, Corner radius can be added, modified and deleted. Modifying them will
        affect all components and pages, please proceed with caution.
      </p>
    </template>
    <template v-slot:notes>
      <p>A dashed border indicates that the value is not available yet.</p>
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
        <!-- ---------------------------------------------------------------------------- -->
        <div class="">Spacing</div>
        <div class="col-span-2">
          <div class="flex gap-[4px]">
            <div
              v-for="(space, index) in spaces"
              :key="index"
              :class="`p-[40px] border border-black-10 rounded-[16px] ${index % 2 === 0 ? 'bg-black-40' : 'bg-black-10'}`"
            >
              {{ space }}
            </div>
          </div>
        </div>
        <!-- -------------------------------- -->
        <div class="">Icon size</div>
        <div class="col-span-2">
          <div class="flex gap-[4px]">
            <div
              v-for="(space, index) in spaces"
              :key="index"
              :class="`p-[40px] border border-black-10 rounded-[16px] ${index % 2 === 0 ? 'bg-black-10' : 'bg-black-40'}`"
            >
              {{ space }}
            </div>
          </div>
        </div>
        <!-- -------------------------------- -->
        <div class="">Corner radius</div>
        <div class="col-span-2">
          <div class="flex gap-[4px]">
            <div
              v-for="(space, index) in spaces"
              :key="index"
              :class="`p-[40px] border border-black-10 rounded-[16px] ${index % 2 === 0 ? 'bg-black-40' : 'bg-black-10'}`"
            >
              {{ space }}
            </div>
          </div>
        </div>
        <!-- -------------------------------- -->
      </div>
    </template>
  </DesignSystemTemplate>
</template>

<script lang="ts" setup>
import DesignSystemTemplate from '@/components/templates/design-system/index.vue'

const spaces = [80, 48, 40, 32, 28, 24, 20, 16, 12, 8, 4, 0]
</script>

<!-- width: Fill (74.33px)px;
height: Fill (100px)px;
padding: 40px 0px 40px 0px;
gap: 0px;
border-radius: var(--16);
border: 1px 0px 0px 0px;
opacity: 0px; -->
