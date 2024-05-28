<template>
  <div class="breadcrumbs">
    <ul>
      <li
        v-for="item in breadcrumbs"
        :key="item.path"
        class="f-text-regular-14 rounded-8 px-4 py-8"
      >
        <a>{{ item.meta?.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, type RouteLocationMatched } from 'vue-router'

const route = useRoute()
const breadcrumbs = ref<RouteLocationMatched[]>([])

const getBreadcrumb = () => {
  console.log('getBreadcrumb', breadcrumbs.value)
  breadcrumbs.value = route.matched.filter(
    (item) => item.meta?.title && item.meta?.breadcrumb !== false
  )
}

onMounted(() => {
  getBreadcrumb()
})

watch(
  () => route.fullPath,
  () => {
    getBreadcrumb()
  }
)
</script>
