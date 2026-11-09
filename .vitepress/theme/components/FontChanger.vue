<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStorage } from "@vueuse/core";
import { useData } from "vitepress";

// const isPixel = useStorage("pixelFonts", true, localStorage, {mergeDefaults: true});
const preferredFont = useStorage("preferredFont", "vector", localStorage, {mergeDefaults: true});

const fontValues = ["vector", "pixel"];
const selectedFont = ref(preferredFont.value);

const { title } = useData()

function setFont() {
  console.log("setting font preference to", selectedFont.value);
  preferredFont.value = selectedFont.value;
  console.log("font preference has been set to", preferredFont.value);
  if (preferredFont.value == "pixel") {
    document.documentElement.classList.add("pixel");
  } else {
    document.documentElement.classList.remove("pixel");
  }
}

onMounted(() => {
  console.log("font changer is mounted");
  console.log("font preference is:", preferredFont.value);
  selectedFont.value = preferredFont.value;
  if (preferredFont.value == "pixel") {
    document.documentElement.classList.add("pixel");
  } else {
    document.documentElement.classList.remove("pixel");
  }
})
</script>

<template>
  <div>
    <select
      v-model="selectedFont"
      :class="(preferredFont == 'vector') ? 'font-size-[13px]' : (title.startsWith('Figlet')) ? 'mspixel' : 'pixelMonoFont font-size-[13px]'"
    >
      <option
        v-for="font in fontValues"
        :key="font"
        :value="font"
        :class="(preferredFont == 'vector') ? 'font-size-[13px]' : (title.startsWith('Figlet')) ? 'mspixel' : 'pixelMonoFont font-size-[13px]'"
        :selected="(font == preferredFont)"
      >
        {{ font }} {{ (preferredFont == font) ? "✓" : "" }}
      </option>
    </select>
    <button
      :class="(preferredFont == 'vector') ? 'font-size-[13px]' : (title.startsWith('Figlet')) ? 'mspixel' : 'pixelMonoFont font-size-[13px]'"
      @click="setFont()"
    >
      set fonts
    </button>
  </div>
</template>

<style scoped>
div {
  @apply my-2 mx-auto;

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
    &.mspixel {
      background-color: var(--w98-el-bg) !important;
    }
  }
}
</style>
