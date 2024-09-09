<template>
  <div class="w-[50%] h-[50%]">
    <Vue3Lottie :animationData="SearchingAnimation" />
    <div class="f-text-regular-14 text-black-40">We haven't found any document</div>
  </div>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import SearchingAnimation from '@/assets/lottie/searching-animation.json'
</script>

<style scoped></style>
