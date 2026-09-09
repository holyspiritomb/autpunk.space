<script setup lang="ts">
interface Props {
  text?: string
}
withDefaults(defineProps<Props>(), {
  text: "Badge!",
})
</script>

<template>
  <span class="mybadge">
    <slot>{{ text }}</slot>
  </span>
</template>

<style lang="css" scoped>
.mybadge {
  display: inline-block;
  padding: 5px;
  margin: 3px;
}
</style>
