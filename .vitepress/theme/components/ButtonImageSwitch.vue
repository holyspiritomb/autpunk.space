<script setup lang="ts">
import { useStorage } from "@vueuse/core";
const pauseGifs = useStorage("pauseGifs", false, localStorage);

defineProps<{
  srcStill: string
  srcAnimated: string
  altText: string
}>()
</script>

<template>
  <img
    class="no-viewer"
    :src="(pauseGifs) ? srcStill : srcAnimated"
    :alt="altText"
  />
</template>