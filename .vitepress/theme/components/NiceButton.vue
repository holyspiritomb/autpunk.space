<script setup lang="ts">
interface Props {
  text: string
  href?: string
}
withDefaults(defineProps<Props>(), {
  href: "#",
})
</script>

<template>
  <a
    :href="href"
  >
    <button>{{ text }}</button>
  </a>
</template>

<style lang="scss" scoped>
a {
  @apply my-3;
  color: var(--vp-c-text1);
  text-decoration: none;
  &:active, &:hover, &:focus {
    color: inherit;
  }
  button {
    @apply boxPressSubtle px-[1em];
  }
}
</style>
