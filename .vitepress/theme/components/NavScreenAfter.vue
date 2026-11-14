<script setup lang="ts">
import AccessibilityOptions from "./AccessibilityOptions.vue";
import { useData } from 'vitepress';

const { title } = useData()
</script>
<template>
  <div
    v-if="(!title.includes('Home'))"
  >
    <AccessibilityOptions />
  </div>
</template>
