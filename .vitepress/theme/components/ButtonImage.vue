<script setup lang="ts">
defineProps<{
  src: string
  altText: string
}>()
</script>

<template>
  <img
    class="no-viewer"
    :src="src"
    :alt="altText"
  />
</template>