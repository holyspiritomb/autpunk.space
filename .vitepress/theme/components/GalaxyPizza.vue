<script setup lang="ts">
import GalaxyPizza from "../../../galaxypizza.svg?component";

interface Props {
  size?: number
}
withDefaults(defineProps<Props>(), {
  size: 24
});

</script>

<template>
  <GalaxyPizza
    :height="size"
    :width="size"
  />
</template>
