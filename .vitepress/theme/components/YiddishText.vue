<script setup lang="ts">
interface Props {
  font?: string
  inline?: boolean
  title: string
}
withDefaults(defineProps<Props>(), {
  font: "yiddishSerif",
  inline: false,
})
</script>

<template>
  <span
    v-if="inline"
    dir="rtl"
    lang="yi"
    :class="font"
  >
    <slot />
  </span>
  <div
    v-else
    dir="rtl"
    lang="yi"
    :class="font"
  >
    <slot />
  </div>
</template>

<style scoped>
div {
  @apply my-[0.75em];
}
</style>
