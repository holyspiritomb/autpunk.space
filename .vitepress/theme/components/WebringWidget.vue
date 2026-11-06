<script setup lang="ts">
interface Props {
  ringName: string,
  ringHomeLink: string,
  prevLink: string,
  nextLink: string,
  randomLink?: string | null,
  classes: string | null,
  textClasses?: string | null,
  prevLinkText?: string,
  nextLinkText?: string,
  randomLinkText?: string,
  border?: string
}

withDefaults(defineProps<Props>(), {
  randomLink: null,
  textClasses: null,
  prevLinkText: "« prev",
  nextLinkText: "next »",
  randomLinkText: "(random)",
  border: "0"
})
</script>
<template>
  <div
    :class="`widget ${classes} ${border}`"
  >
    <a
      :href="prevLink"
      :aria-label="`previous link in ${ringName}`"
      :title="`previous link in ${ringName}`"
      class="prevnext"
      role="link"
      target="_top"
    >{{ prevLinkText }}</a>
    <div>
      <a
        :href="ringHomeLink"
        :title="`${ringName} home page`"
        :aria-label="`${ringName} home page`"
        target="_blank"
        referrerpolicy="origin-when-cross-origin"
        role="link"
        :class="textClasses"
      >{{ ringName }}</a>
      <span v-if="$slots.default"><br /><slot /></span>
      <br v-if="randomLink" />
      <a
        v-if="randomLink"
        :href="randomLink"
        class="rand"
        target="_top"
        :title="`random link in ${ringName}`"
        :aria-label="`random link in ${ringName}`"
      >{{ randomLinkText }}</a>
    </div>
    <a
      :href="nextLink"
      class="prevnext"
      role="link"
      target="_top"
      :aria-label="`next link in ${ringName}`"
      :title="`next link in ${ringName}`"
    >{{ nextLinkText }}</a>
  </div>
</template>
<style lang="scss" scoped>
div.widget {
  @apply w-[342px] mx-a text-center;

  > a,
  > div {
    @apply inline-block px-[10px];
    vertical-align: middle;
  }

  a {
    @apply prose-2xl;
    text-decoration: none !important;
    color: var(--vp-c-text1) !important;

    &.prevnext {
      @apply prose-sm;
    }

    &.rand {
      @apply prose-sm;
    }

    &:hover {
      cursor: crosshair;
      text-decoration: underline !important;
    }

    &::after {
      display: none !important;
    }
  }
}
</style>
