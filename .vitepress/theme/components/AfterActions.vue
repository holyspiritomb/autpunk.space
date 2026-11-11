<script setup lang="ts">
import FontChanger from "./FontChanger.vue";
import PauseGifs from "./PauseGifs.vue";
import FunDate from "./FunDate.vue";
</script>

<template>
  <div class="accessibility my-[1em]">
    <details>
      <summary>accessibility options</summary>
      <FontChanger />
      <PauseGifs />
    </details>
  </div>
  <FunDate />
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
  @apply bg-ctp-latte-base/100 dark:bg-ctp-mocha-crust/80 ccborder squareBoxShadow py-[0.5em] sansFont font-size-[16px];
  &:has(details[open]) {
    @apply noBoxShadow;
  }
}
</style>
