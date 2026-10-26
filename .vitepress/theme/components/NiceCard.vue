<script setup lang="ts">
import type {Component} from 'vue'

interface Props {
  title: string
  text: string
  href?: string
  img: string
}
withDefaults(defineProps<Props>(), {
  href: "#",
})
</script>

<template>
  <a
    :href="href"
  >
    <div>
      <img
        v-if="img && (img.endsWith('png'))"
        :src="img"
      />
      <h4 class="title">{{ title }}</h4>
      <p>{{ text }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
a {
  @apply my-3 block dark:crustBg;
  color: var(--vp-c-text1);
  text-decoration: none;
  &:active, &:hover, &:focus {
    color: inherit;
  }
  div {
    @apply boxPress px-[1em];
    img {
      @apply block w-[100%];
    }
  }
}
</style>
