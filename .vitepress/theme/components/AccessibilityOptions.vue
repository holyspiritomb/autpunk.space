<script setup lang="ts">
import FontChanger from './FontChanger.vue';
import PauseGifs from './PauseGifs.vue';
import { useData } from 'vitepress';

const { title } = useData()
</script>
<template>
  <div
    v-if="(title.includes('Home'))"
    class="accessibility my-[1em] bg-ctp-latte-base/100 dark:bg-ctp-mocha-crust/80 ccborder squareBoxShadow py-[0.5em] sansFont font-size-[16px]"
  >
    <details>
      <summary>accessibility options</summary>
      <FontChanger />
      <PauseGifs />
    </details>
  </div>
  <div
    v-else
    class="VPNavScreenAppearance my-[1em] py-[1em] text-center"
  >
    <p class="font-size-[16px] sansFont">Accessibility Options</p>
    <FontChanger />
    <PauseGifs />
  </div>
</template>
<style lang="scss" scoped>
@media screen and (width < 960px) {
  div.accessibility {
    @apply w-[200px] mx-a;
  }
}
@media screen and (width >= 960px) {
  div.accessibility {
    @apply w-[225px] px-[1em];
  }
}

div.accessibility {
  &:has(details[open]) {
    @apply noBoxShadow;
  }
}
</style>
