<script setup lang="ts">
import { useData } from "vitepress";

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
  return `no-viewer p-[1px] hover:p-[0px] w-[100%] h-[125px] ${s}`.trim()
}
</script>

<template>
  <div class="nicecard my-[20px] defaultTextColor w-[300px]">
    <a
      :href="href"
      class="defaultTextColor nounderline active:defaultTextColor hover:defaultTextColor focus:defaultTextColor"
    >
      <div class="boxPress defaultBgColor h-[100%]">
        <div
          v-if="img"
          class="px-[0] w-[100%] border-b-[1px] border-b-solid"
        >
          <img
            :src="img"
            :alt="altText"
            :class="imgClasses(extraImgClasses)"
            style="object-fit: cover !important;"
          />
        </div>
        <h4 class="title px-[24px] mt-[1em] nounderline no-text-shadow defaultTextColor">{{ title }}</h4>
        <p class="px-[24px] pb-[8px] nounderline defaultTextColor">{{ text }}</p>
      </div>
    </a>
  </div>
</template>
