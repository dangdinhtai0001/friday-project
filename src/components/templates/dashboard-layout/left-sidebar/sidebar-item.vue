<template>
  <div class="flex justify-start content-center py-8 px-12 gap-8">
    <!-- ----------------------------- || avatar || ----------------------------- -->
    <div class="avatar">
      <div class="w-24 h-24 rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <!-- ----------------------------- || avatar || ----------------------------- -->
    <!-- ----------------------------- || desc || ----------------------------- -->
    <div v-if="!props.isCollapsed" class="f-text-regular-14">ByeWind</div>
    <!-- ----------------------------- || desc || ----------------------------- -->
  </div>
</template>

<script setup>
const props = defineProps(['isCollapsed'])

console.log(props.isCollapsed)
</script>
