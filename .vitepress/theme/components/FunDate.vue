<script setup lang="ts">
import {onMounted} from 'vue';

onMounted( () => {
  const scriptTag = document.createElement("script");
  scriptTag.src = "/nationalday.js";
  document.getElementById("dateWidget")?.appendChild(scriptTag);

});
</script>
<template>
  <div id="dateWidget"></div>
</template>
<style lang="scss" scoped>
#dateWidget {
  @apply "my-[1em] p-[0.5em] w-[350px]";
  color: var(--vp-c-brand);
}
@media screen and (width < 960px) {
  #dateWidget {
    @apply mx-a;
  }
}
</style>
