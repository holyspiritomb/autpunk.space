<script setup lang="ts">
import { ref } from "vue";
import { useStorage } from "@vueuse/core";

const preferredFont = useStorage("preferredFont", "vector", localStorage);
const pauseGifs = useStorage("pauseGifs", false, localStorage, {mergeDefaults: true});
const allowedOptions = [true, false];
const selectedOption = ref(pauseGifs.value);

function setOption() {
  pauseGifs.value = selectedOption.value;
}
</script>
<template>
  <div>
    <label
      for="gifOptionSelect"
    >
      gifs
    </label>
    <select
      id="gifOptionSelect"
      v-model="selectedOption"
      @change="setOption()"
      :class="(preferredFont == 'vector') ? '' : 'pixelMonoFont'"
    >
      <option
        v-for="option in allowedOptions"
        :key="option"
        :value="option"
        :class="(preferredFont == 'vector') ? '' : 'pixelMonoFont'"
      >
        {{ (option) ? "pause" : "animate" }} {{ (pauseGifs == option) ? "✓" : "" }}
      </option>
    </select>
  </div>
</template>
<style scoped>
div {
  @apply my-2 mx-auto;

  label, select, option, button{
    @apply font-size-[13px];
  }

  select {
    @apply px-[0.5em] mx-[0.5em] ccborder;
    color: inherit;
    background-color: var(--vp-c-bg);
    min-width: 75px;

    option {
      color: inherit;
      background-color: inherit;
    }
  }

  button {
    @apply boxPressSubtle px-[0.5em] mx-[0.5em];
    background-color: var(--vp-c-bg);
  }
}
</style>
