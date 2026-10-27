<script setup lang="ts">

interface Props {
  title: string
  text: string
  href: string
  img?: string
  altText?: string
  extraImgClasses?: string
}
withDefaults(defineProps<Props>(), {
  img: "",
  altText: "",
  extraImgClasses: "",
})

const imgClasses = (s) => {
  return `no-viewer ${s}`.trim()
}
</script>

<template>
  <a
    :href="href"
  >
    <div>
      <div v-if="img">
        <img
          :src="img"
          :alt="altText"
          :class="imgClasses(extraImgClasses)"
        />
      </div>
      <h4 class="title">{{ title }}</h4>
      <p>{{ text }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
a {
  @apply my-3 block dark:crustBg w-[300px];

  color: var(--vp-c-text1);
  text-decoration: none;

  &:active, &:hover, &:focus {
    color: inherit;
  }

  > div {
    @apply boxPress;

    > div {
      @apply px-[0] w-[100%];
      border-bottom: 1px solid currentColor;
      width:100%;

      img {
        @apply p-[1px] hover:p-[0px] w-[100%] h-[125px];
        object-fit: cover !important;
      }
    }

    p, h4 {
      @apply px-[1rem] mt-[15px];
    } 
  }
}
html.dark {
  img.darkInvert {
    filter: invert(100);
  }
}
</style>
