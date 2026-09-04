<script setup lang="ts">

import MadeByHuman from "../../../madebyhumanw.svg?component";
interface Props {
  height?: number,
  width?: number
}
withDefaults(defineProps<Props>(), {
  height: 60,
  width: 180
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

