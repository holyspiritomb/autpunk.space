<script setup lang="ts">
console.log("joined webrings component loaded!")
// import { onMounted } from 'vue';
// import { useScriptTag } from '@vueuse/core';

// useScriptTag(
//   "https://jbc.lol/webrings/ssgring/pmoring.js",
//   (el) => {
//     document.getElementById("ssgRing")?.appendChild(el);
//   }
// );
//
// onMounted( () => {
//   const nixRingScript = document.createElement("script");
//   nixRingScript.defer = true;
//   nixRingScript.src = "https://softmachine.dev/webring/linuxring/ring.js";
//   nixRingScript["data-icon"] = "arch";
//   document.getElementById("nixRingDiv")?.appendChild(nixRingScript);
// });
</script>
<template>
  <div class="inWebrings">
    <slot />
  </div>
</template>
