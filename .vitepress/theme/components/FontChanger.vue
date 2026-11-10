<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStorage } from "@vueuse/core";
import { useData } from "vitepress";

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
    <label
      v-if="(!title.startsWith('Figlet'))"
      for="fontSelectEl"
      :class="(preferredFont == 'vector') ? '' : 'pixelMonoFont'"
    >
      fonts
    </label>
    <select
      id="fontSelectEl"
      v-model="selectedFont"
      :class="(preferredFont == 'vector') ? '' : (title.startsWith('Figlet')) ? 'mspixel' : 'pixelMonoFont'"
      @change="setFont()"
    >
      <option
        v-for="font in fontValues"
        :key="font"
        :value="font"
        :class="(preferredFont == 'vector') ? '' : (title.startsWith('Figlet')) ? 'mspixel' : 'pixelMonoFont'"
        :selected="(font == preferredFont)"
      >
        {{ font }} {{ (title.startsWith('Figlet')) ? 'fonts' : '' }} {{ (preferredFont == font) ? "✓" : "" }}
      </option>
    </select>
  </div>
</template>

<style scoped>
div {
  @apply my-2 mx-auto;

  label, select, option {
    @apply font-size-[13px];
    color: inherit;
  }

  select {
    @apply px-[0.5em] mx-[0.5em] ccborder;
    background-color: var(--vp-c-bg);
    min-width: 75px;

    option {
      color: inherit;
      background-color: inherit;
    }
  }
}
</style>
