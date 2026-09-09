<script setup lang="ts">
interface Props {
  text?: string
}
withDefaults(defineProps<Props>(), {
  text: "",
})
</script>

<template>
  <span class="darkbox">
    <slot>{{ text }}</slot>
  </span>
</template>

<style lang="css" scoped>
.darkbox {
  display: block;
  background-color: rgb(30 30 46);
  min-width: fit-content;
  max-width: min-content;
  min-height: fit-content;
  max-height: min-content;
  margin-bottom: 3px;
  margin-top: 3px;
}
</style>
