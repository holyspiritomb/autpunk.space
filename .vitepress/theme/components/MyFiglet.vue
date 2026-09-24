<script setup lang="ts">
import figlet from "figlet";
import "@fontsource/jetbrains-mono/300.css";
import { ref as deepRef, onMounted } from "vue";
import { loadFont as loadFontUtil, getAvailableFonts, getLoadedFonts } from "/.vitepress/theme/util/fontLoader";
import { useClipboard } from "@vueuse/core";
import "7.css/dist/7.scoped.css";

const chosenFont = deepRef("Calvin S");
const listOfFonts = deepRef(getAvailableFonts());
const loadedFonts = deepRef(getLoadedFonts());
const layouts = ["default", "full", "fitted", "controlled smushing", "universal smushing"];
const widths: any[] = ["none", 40, 41, 42, 43, 44, 45, 80, 81, 100, 120];
const hLayout = deepRef("default");
const vLayout = deepRef("default");
const width = deepRef("none");
const textToFiglet = deepRef("be gay\ndo art\ncrime");
const figletText = deepRef("");

const { copy, copied, isSupported } = useClipboard({
  legacy: true,
  copiedDuring: 5000,
  read: false,
  source: figletText,
});

// significantly adapted from
// https://github.com/zzgosh/ASCII-ART_SVG/blob/d000ca76afdad788cf0debed249cad1d4c3618f7/src/components/AsciiArtGenerator.vue

// Get available fonts from utility
// const availableFonts = deepRef(getAvailableFonts())

// Wrapper function for font loading
const loadFont = async (fontName: string): Promise<boolean> => {
  const result = await loadFontUtil(fontName);
  // Trigger reactivity update
  loadedFonts.value = getLoadedFonts();
  return result;
}


const generateArt = async () => {
  if (!textToFiglet.value.trim()) {
    figletText.value = "";
    return;
  }

  console.debug("Generating", textToFiglet.value, "with font:", chosenFont.value);

  // Load font if not already loaded
  const fontLoaded = await loadFont(chosenFont.value);
  if (!fontLoaded) {
    figletText.value = `Error: Failed to load font "${chosenFont.value}"`;
    return;
  }

  try {
    figlet.text(
      textToFiglet.value,
      {
        font: chosenFont.value,
        horizontalLayout: hLayout.value as
          | "default"
          | "full"
          | "fitted"
          | "controlled smushing"
          | "universal smushing",
        verticalLayout: vLayout.value as
          | "default"
          | "full"
          | "fitted"
          | "controlled smushing"
          | "universal smushing",
        width: width.value === "none" ? undefined : width.value,
        whitespaceBreak: false
      },
      (err, data) => {
        if (err) {
          console.error("Figlet error:", err);
          figletText.value = `Error: ${err.message || "Failed to generate ASCII art"}`;
          return;
        }
        console.debug("Generated ASCII art:");
        console.debug(data);
        figletText.value = data || "";
      },
    );
  } catch (error) {
    console.error("Error generating ASCII art:", error);
    figletText.value = `Error: ${error instanceof Error ? error.message : "Unknown error"}`;
  }
}
// Initialize default fonts
const initializeDefaultFonts = async () => {
  console.debug("Loading initial fonts...");
  await loadFont("Calvin S");
  console.debug("Initial fonts loaded");
  await generateArt()
}

onMounted(() => {
  listOfFonts.value = getAvailableFonts();
  initializeDefaultFonts();
  // chosenFont.value = "Calvin S";
})
</script>

<template>
  <div class="myContainer">
    <form>
      <div class="win7">
        <label for="font">Font:</label>
        <!-- eslint-disable vue/no-template-shadow -->
        <select
          id="font"
          v-model="chosenFont"
          @change="generateArt"
        >
          <option
            v-for="font in listOfFonts"
            :key="font"
            bg="$vp-c-bg"
            :value="font"
          >
            {{ font }} {{ loadedFonts.has(font) ? "✓" : "" }}
          </option>
        </select>
      </div>
      <details>
        <summary>Advanced Options</summary>
        <div class="win7">
          <label for="hLayout">Horizontal Layout:</label>
          <select
            id="hLayout"
            v-model="hLayout"
            @change="generateArt"
          >
            <option
              v-for="hLayout in layouts"
              :key="hLayout"
              bg="$vp-c-bg"
              :value="hLayout"
            >
              {{ `${hLayout}` }}
            </option>
          </select>
        </div>
        <div class="win7">
          <label for="vLayout">Vertical Layout:</label>
          <select 
            id="vLayout"
            v-model="vLayout"
            @change="generateArt"
          >
            <option
              v-for="vLayout in layouts"
              :key="vLayout"
              :value="vLayout"
            >
              {{ `${vLayout}` }}
            </option>
          </select>
        </div>
        <div class="win7">
          <label for="width">Width:</label>
          <select
            id="width"
            v-model="width"
            @change="generateArt"
          >
            <option
              v-for="width in widths"
              :key="width"
              :value="width"
            >
              {{ `${width}` }}
            </option>
          </select>
        </div>
      </details>
      <!-- eslint-enable vue/no-template-shadow -->
      <div>
        <label for="inputText">Input:</label>
        <textarea
          id="inputText"
          v-model="textToFiglet"
          @input="generateArt"
        ></textarea>
      </div>
      <div
        v-if="figletText"
      >
        <div
          v-if="isSupported"
          class="win7"
        >
          <button
            class="figcopy"
            @click="copy()" 
          >
            <!-- by default, `copied` will be reset in 1.5s -->
            <span v-if="!copied">Copy</span>
            <span v-else>Copied!</span>
          </button>
        </div>
        <p v-if="!isSupported">
          Sorry, Your browser does not support Clipboard API.
        </p>
        <div
          id="outputFigDisplay"
        >
          <pre><code>{{ figletText }}</code></pre>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
div.myContainer {
  @apply customContainer border-ctp-mocha-lavender my-[1em] rounded;
  /* border-color: var(--ctp-mocha-lavender); */
  select {
    @apply w-[45%] inline;
  }
  label {
    @apply w-[45%] inline;
  }
  textarea {
    @apply customSelect h-[100px] w-[200px] block my-0 lavenderShadows;
    font-family: 'JetBrains Mono', monospace !important;
  }
  div:has(>button.figcopy) {
    @apply my-0;
    text-align: right;
    position: relative;
    top: 1.2em;
    right: 0.2em;
    z-index: 9999;
    button {
      @apply lavenderShadows;
    }
  }
  #outputFigDisplay {
    @apply customSelect w-[100%] h-a p-3 overflow-y-auto overflow-x-scroll lavenderShadows;
    position: relative;
    bottom:0.5em;
    code {
      @apply victor;
    }
  }
}
</style>
