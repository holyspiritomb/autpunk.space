<script setup lang="ts">
import { ref } from "vue";
import { useStorage } from "@vueuse/core";

const pauseGifs = useStorage("pauseGifs", false, localStorage, {mergeDefaults: true});
const allowedOptions = [true, false];
const selectedOption = ref(pauseGifs.value);

function setOption() {
  pauseGifs.value = selectedOption.value;
}
</script>
<template>
  <div class="my-2 mx-auto">
    <label
      for="gifOptionSelect"
      class="font-size-[16px]"
    >
      gifs
    </label>
    <select
      id="gifOptionSelect"
      v-model="selectedOption"
      class="font-size-[16px] px-[0.5em] mx-[0.5em] ccborder defaultColors min-w-[75px]"
      @change="setOption()"
    >
      <option
        v-for="option in allowedOptions"
        :key="option"
        :value="option"
        class="font-size-[16px] text-inherit bg-inherit"
      >
        {{ (option) ? "pause" : "animate" }} {{ (pauseGifs == option) ? "✓" : "" }}
      </option>
    </select>
  </div>
</template>
<style scoped>
div {
  label, select, option {
    @apply sansFont;
  }
}
</style>
