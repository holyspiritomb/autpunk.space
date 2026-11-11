<script setup lang="ts">
import { onMounted } from 'vue';
import { useScriptTag } from '@vueuse/core';

// TODO: Figure out useScriptTag with A-Tism widget

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
  if (window.location.href.startsWith("https://")) {
    document.getElementById("tismRingWidget")?.appendChild(tismRing);
  } else {
    console.log("Not adding a-tism js widget without SSL.");
  }
});
</script>

<template>
  <div id="tismRingWidget"></div>
</template>
