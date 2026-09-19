<script setup lang="ts">
import figlet from "figlet";
import { ref as deepRef, onMounted } from "vue";
import { loadFont as loadFontUtil, getAvailableFonts, getLoadedFonts } from "../util/fontLoader";

const chosenFont = deepRef()
const listOfFonts = deepRef(getAvailableFonts())

const loadedFonts = deepRef(getLoadedFonts())
const layouts = ["default", "full", "fitted", "controlled smushing", "universal smushing"];
const widths: any[] = ["none", 40, 41, 42, 43, 44, 45, 80, 81, 100, 120];
const whitespaceBreaks: string[] = ["true", "false"];
const hLayout = deepRef("default");
const vLayout = deepRef("default");
const width = deepRef("none");
const whitespaceBreak = deepRef(whitespaceBreaks[0]);
const textToFiglet = deepRef("be gay\ndo art\ncrime");
const figletText = deepRef("");

// significantly adapted from
// https://github.com/zzgosh/ASCII-ART_SVG/blob/d000ca76afdad788cf0debed249cad1d4c3618f7/src/components/AsciiArtGenerator.vue

// Get available fonts from utility
// const availableFonts = deepRef(getAvailableFonts())

// Wrapper function for font loading
const loadFont = async (fontName: string): Promise<boolean> => {
  const result = await loadFontUtil(fontName)
  // Trigger reactivity update
  loadedFonts.value = getLoadedFonts()
  return result
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
        whitespaceBreak:
          width.value === "none"
            ? undefined
            : whitespaceBreak.value === "true"
              ? true
              : false,
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
  await loadFont("Slant");
  console.debug("Initial fonts loaded");
  await generateArt()
}

onMounted(() => {
  listOfFonts.value = getAvailableFonts();
  initializeDefaultFonts();
  chosenFont.value = "Slant";
})


</script>

<template>
  <div class="myContainer">
    <form>
      <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
          <label for="whitespaceBreak">Break on whitespace (if width set):</label>
          <select
            id="whitespaceBreak"
            v-model="whitespaceBreak"
            @change="generateArt"
          >
            <option
              v-for="whitespaceBreak in whitespaceBreaks"
              :key="whitespaceBreak"
              :value="whitespaceBreak"
            >
              {{ `${whitespaceBreak}` }}
            </option>
          </select>
        </div>
      </details>
      <!-- eslint-enable vue/no-template-shadow -->
      <label for="inputText">Input:</label>
      <textarea
        id="inputText"
        v-model="textToFiglet"
        @change="generateArt"
      ></textarea>
      <div
        v-if="figletText"
        id="outputFigDisplay"
      >
        <pre>{{ figletText }}</pre>
      </div>
    </form>
  </div>
</template>

<style scoped>
div.myContainer {
  @apply customContainer border-ctp-mocha-lavender my-[1em] rounded;
  /* border-color: var(--ctp-mocha-lavender); */
  select {
    @apply customSelect w-[45%] inline;
  }
  label {
    @apply w-[45%] inline;
  }
  textarea {
    @apply customSelect h-[100px] w-[200px] block my-1;
    font-family: 'JetBrains Mono', monospace !important;

  }
  #outputFigDisplay{
    @apply customSelect w-[100%] h-a p-3 overflow-y-auto overflow-x-scroll;
    pre {
      font-family: "Victor Mono", 'JetBrains Mono', monospace !important;
    }
  }
}
</style>
