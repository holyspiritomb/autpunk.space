<script setup lang="ts">
import { onMounted } from "vue";
import { useStorage } from "@vueuse/core";

const isPixel = useStorage("pixelFonts", true, localStorage, {mergeDefaults: true});

function pixelToggle() {
  document.documentElement.classList.toggle("pixel");
  isPixel.value = !isPixel.value;
  console.log("set pixel font preference to:", isPixel.value);
}

onMounted(() => {
  console.log("pixel font preference is:", isPixel.value);
  if (isPixel.value && !document.documentElement.classList.contains("pixel")) {
    document.documentElement.classList.add("pixel");
  }
})

</script>

<template>
  <div>
    <button
      v-if="!isPixel"
      class="fontSwitch text-[16px] pixelFont"
      @click="pixelToggle"
    >
      use pixel fonts
    </button>
    <button
      v-else
      class="fontSwitch text-[12px] sansFont"
      @click="pixelToggle"
    >
      use vector fonts
    </button>
  </div>
</template>

<style scoped>
div {
  @apply my-2 mx-auto;
  button.fontSwitch {
    @apply bg-ctp-mocha-text c-ctp-mocha-crust r0 border-3 border-double px-[1em];
  }
}
</style>
