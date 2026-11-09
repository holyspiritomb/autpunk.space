<script setup lang="ts">
import { onMounted } from 'vue';
import { useScriptTag } from '@vueuse/core';

// useScriptTag(
//   "https://minxie.likesyou.org/js/ring-widget.js",
//   (el) => {
//     // console.log(el);
//     document.getElementById("tismRingWidget")?.appendChild(el)
//   },
//   {
//     defer: true,
//     async: false,
//     attrs: {
//       "data-ring": "webring",
//       "data-id": "autpunk-space",
//     }
//   }
// )

onMounted( () => {
  const tismRing = document.createElement("script");
  tismRing.src = "https://minxie.likesyou.org/js/ring-widget.js";
  tismRing.defer = true;
  tismRing.setAttribute("data-ring", "webring");
  tismRing.setAttribute("data-id", "autpunk-space");
  console.log(tismRing);
  document.getElementById("tismRingWidget")?.appendChild(tismRing);
});
</script>

<template>
  <div id="tismRingWidget"></div>
</template>
