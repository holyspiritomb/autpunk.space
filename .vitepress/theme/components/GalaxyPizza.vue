<script setup lang="ts">
// @ts-expect-error It's fine
import GalaxyPizza from "/src/galaxypizza.svg?skipsvgo";

interface Props {
  size?: string
}
withDefaults(defineProps<Props>(), {
  size: "24"
});

</script>

<template>
  <GalaxyPizza
    :height="size + 'px'"
    :width="size + 'px'"
    class="noviewer"
  />
</template>
