<template>
  <main class="py-6 px-6 w-full bg-white text-black relative">
    <slot></slot>
    <CommonNav />
  </main>
</template>
<script setup>
import CommonNav from './CommonNav.vue'
</script>
