<script setup lang="ts">
// @ts-expect-error It's fine
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
