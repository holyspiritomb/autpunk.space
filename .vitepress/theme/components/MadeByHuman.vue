<script setup lang="ts">

import MadeByHuman from "../../../madebyhumanw.svg?component";
interface Props {
  height?: string,
  width?: string
}
withDefaults(defineProps<Props>(), {
  height: "120px",
  width: "360px"
});
</script>

<template>
  <div
    id="madebyhuman"
  >
    <a
      href="https://madebyhuman.iamjarl.com"
      target="_blank"
    >
      <MadeByHuman
        :height="height"
        :width="width"
      />
    </a>
  </div>
</template>
