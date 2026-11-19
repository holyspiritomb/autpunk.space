<script setup lang="ts">
import { onMounted } from 'vue';
import { useScriptTag } from '@vueuse/core';

useScriptTag(
  "https://jbc.lol/webrings/ssgring/pmoring.js",
  (el) => {
    document.getElementById("ssgRing")?.appendChild(el);
  }
);

onMounted( () => {
  const nixRingScript = document.createElement("script");
  nixRingScript.defer = true;
  nixRingScript.src = "https://softmachine.dev/webring/linuxring/ring.js";
  nixRingScript["data-icon"] = "arch";
  document.getElementById("nixRingDiv")?.appendChild(nixRingScript);
});
</script>
<template>
  <div class="prospectiveRings">
    <slot />
    <div id="nixRingDiv"></div>
    <div id="ssgRing"></div>
  </div>
</template>
