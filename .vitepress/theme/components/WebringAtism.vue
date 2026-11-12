<script setup lang="ts">
// import { onMounted } from 'vue';
import { useScriptTag } from '@vueuse/core';

useScriptTag(
  "//minxie.likesyou.org/js/ring-widget.js",
  (el) => {
    document.getElementById("tismRingWidget")?.appendChild(el);
  },
  {
    defer: true,
    // type: "application/javascript",
    attrs: {
      "data-ring": "webring",
      "data-id": "autpunk-space",
    }
  }
)

// onMounted( () => {
  // const tismRing = document.createElement("script");
  // tismRing.src = "https://minxie.likesyou.org/js/ring-widget.js";
  // tismRing.defer = true;
  // tismRing.type = "application/javascript";
  // tismRing.setAttribute("data-ring", "webring");
  // tismRing.setAttribute("data-id", "autpunk-space");
  // console.log(tismRing);
  // document.getElementById("tismRingWidget")?.appendChild(tismRing);
// });
</script>

<template>
  <div id="tismRingWidget"></div>
</template>
