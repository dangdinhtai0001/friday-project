<template>
  <div>Design system consists of the following parts</div>
  <ul>
    <li v-for="(part, index) in parts" :key="index">
      <router-link :to="part.link">{{ part.text }}</router-link>
    </li>
  </ul>
</template>
<script lang="ts" setup>
const parts = [
  { text: 'Variables', link: '/design-system' },
  { text: 'Spacing, Icon size, Corner radius', link: '/design-system/space-size-radius' },
  { text: 'Colors', link: '/design-system/color' },
  { text: 'Text styles', link: '/design-system/text-styles' },
  { text: 'Effect styles', link: '/design-system' },
  { text: 'Components', link: '/design-system' },
  { text: 'Design resources', link: '/design-system' }
]
</script>
