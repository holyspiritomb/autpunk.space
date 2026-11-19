<script setup lang="ts">
import { onMounted } from 'vue';

onMounted( () => {
  const scriptTag = document.createElement("script");
  scriptTag.src = "/nationalday.js";
  document.getElementById("dateWidget")?.appendChild(scriptTag);
});
</script>
<template>
  <div
    id="dateWidget"
    class="my-[1em] p-[0.5em] w-[350px] text-[--vp-c-brand]"
  ></div>
</template>
