<template>
  <section class="app-main bg-primary-background h-screen">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </section>
</template>
