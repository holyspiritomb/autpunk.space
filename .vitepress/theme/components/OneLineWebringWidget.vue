<script setup lang="ts">
interface Props {
  ringName: string,
  ringHomeLink: string,
  prevLink: string,
  nextLink: string,
  randomLink?: string | null,
  prevLinkText?: string,
  nextLinkText?: string,
  randomLinkText?: string,
}

withDefaults(defineProps<Props>(), {
  randomLink: null,
  prevLinkText: "«",
  nextLinkText: "»",
  randomLinkText: "(?)",
})
</script>
<template>
  <div
    class="onelinewidget"
  >
    <a
      :href="prevLink"
      :aria-label="`previous link in ${ringName}`"
      :title="`previous link in ${ringName}`"
      class="prevnext"
      role="link"
      target="_top"
    >{{ prevLinkText }}</a>
    <a
      :href="ringHomeLink"
      :title="`${ringName} home page`"
      :aria-label="`${ringName} home page`"
      target="_blank"
      referrerpolicy="origin-when-cross-origin"
      role="link"
      :class="textClasses"
    >{{ ringName }}</a>
    <span v-if="randomLink">&nbsp;</span>
    <a
      v-if="randomLink"
      :href="randomLink"
      class="rand"
      target="_top"
      :title="`random link in ${ringName}`"
      :aria-label="`random link in ${ringName}`"
    >{{ randomLinkText }}</a>
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
@media screen and (width >= 960) {
  div.onelinewidget {
    @apply w-[342px] mx-[5px] my-[5px];
    font-size: 20px;
  }
}
@media screen and (width < 960) {
  div.onelinewidget {
    @apply block mx-auto w-[342px];
  }
}
div.onelinewidget {
  @apply text-center boxPress;
  background-color: var(--vp-c-bg-soft);

  a {
    text-decoration: none !important;
    color: inherit !important;

    &.rand {
      font-size: 60%;
    }

    &.prevnext {
      @apply px-[15px];
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
