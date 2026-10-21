<script setup lang="ts">
import figlet from "figlet";
import { useClipboard, useStorage } from "@vueuse/core";
import { ref as deepRef, onMounted } from "vue";
import { loadFont as loadFontUtil, getAvailableFonts, getLoadedFonts } from "../util/fontLoader";
import "@vstyler96/7.css/dist/7.scoped.css";
import "@vstyler96/98.css/dist/98.scoped.css";

const chosenFont = deepRef("Future Smooth");
const listOfFonts = deepRef(getAvailableFonts());
const loadedFonts = deepRef(getLoadedFonts());
const layouts = ["default", "full", "fitted", "controlled smushing", "universal smushing"];
const widths: any[] = ["none", 40, 41, 42, 43, 44, 45, 80, 81, 100, 120];
const hLayout = deepRef("default");
const vLayout = deepRef("default");
const width = deepRef("none");
const textToFiglet = deepRef("be gay\ndo art\ncrimes");
const figletText = deepRef("");

const isPixel = useStorage("pixelFonts", true, localStorage, {mergeDefaults: true});

const { copy, copied, isSupported } = useClipboard({
  legacy: true,
  copiedDuring: 2000,
  read: false,
  source: figletText,
});

// significantly adapted from studying
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

  // INFO: based on https://github.com/patorjk/figlet.js/blob/d29f4c185973b745100b7b23d6ba6e2cdf764fb2/examples/front-end/index.htm#L143
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
        console.debug(`\n${data}`);
        const padded = `\n${data}`;
        figletText.value = padded || "";
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
  await loadFont("Future Smooth");
  console.debug("Initial fonts loaded");
  await generateArt()
}

const win7help = () => {
  alert("Type in the input textbox to make text art.")
}

const processClass = (s?) => {
  if (isPixel.value === true) {
    return `mspixel ${s}`
  }
  else {
    return s
  }
}

const windowsVersion = () => {
  if (isPixel.value === true) {
    return "win98"
  }
  else {
    return "win7"
  }
}
const windowsVersionNum = () => {
  if (isPixel.value === true) {
    return "98"
  }
  else {
    return "7"
  }
}

onMounted(() => {
  listOfFonts.value = getAvailableFonts();
  initializeDefaultFonts();
  // chosenFont.value = "Calvin S";
})
</script>

<template>
  <div class="myContainer">
    <div :class="windowsVersion()">
      <div class="window">
        <div class="title-bar">
          <div
            :class="processClass('title-bar-text')"
          >
            Figlet Generator
          </div>
          <div class="title-bar-controls">
            <button
              aria-label="Help"
              @click="win7help"
            ></button>
          </div>
        </div>
        <div class="window-body has-space">
          <label
            for="font"
            :class="processClass()"
          >
            Font:
          </label>
          <!-- eslint-disable vue/no-template-shadow -->
          <select
            id="font"
            v-model="chosenFont"
            :class="processClass()"
            @change="generateArt"
          >
            <option
              v-for="font in listOfFonts"
              :key="font"
              :class="processClass()"
              :value="font"
            >
              {{ font }} {{ loadedFonts.has(font) ? "✓" : "" }}
            </option>
          </select>
          <details v-if="!isPixel">
            <summary>Advanced Options</summary>
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
          </details>
          <div>
            <label
              for="inputText"
              :class="processClass()"
            >
              Input text:
            </label>
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
            >
              <button
                :class="processClass('figcopy')"
                @click="copy()"
              >
                <span v-if="!copied">Copy</span>
                <span v-else>Copied!</span>
              </button>
            </div>
            <p v-if="!isSupported">
              Sorry, Your browser does not support Clipboard API.
            </p>
            <div
              id="outputFigDisplay"
              @click="copy()"
            >
              <pre><code>{{ figletText }}</code></pre>
            </div>
          </div>
        </div>
        <div class="status-bar">
          <p :class="processClass('status-bar-field')">Font: {{ chosenFont }}</p>
          <p :class="processClass('status-bar-field')">Figlet fonts loaded: {{ loadedFonts.size }}</p>
          <p :class="processClass('status-bar-field')">Figlet fonts available: {{ getAvailableFonts().length }}</p>
          <p :class="processClass('status-bar-field')">Powered by <a href="https://www.npmjs.com/package/figlet">figlet.js</a></p>
        </div>
      </div>
    </div>
    <!-- eslint-enable vue/no-template-shadow -->
  </div>
</template>

<style lang="scss" scoped>
div.myContainer {
  color: var(--ctp-latte-text) !important;
  p {
    line-height: 1.5em;
  }
  select,
  label {
    @apply w-[45%] inline my-1;
    user-select: none;
  }
  textarea {
    @apply h-[100px] w-[200px] block;
  }
  div:has(>button.figcopy) {
    @apply my-0 text-right z-2;
    position: relative;
    top: 1.6em;
    right: 0.2em;
    user-select: none;
  }
  .title-bar-controls > button {
    cursor: help;
  }
  .title-bar,
  .status-bar-field {
    user-select: none;
  }
  #outputFigDisplay {
    @apply w-[100%] h-a textC;
    scrollbar-width: none;
    pre {
      overflow-y: scroll;
      overflow-x: scroll !important;
      scrollbar-width: none;
      max-height: 75vh !important;
    }
  }
  .figcopy {
    position: relative;
    top: 7px;
  }
  .status-bar-field a:after {
    display: none;
  }
}
.win7 {
  textarea {
    margin-left: calc(var(--spacing) * 3);
  }
  #outputFigDisplay {
    background-color: #fff;
    box-sizing: border-box;
    transition: border-color 0.5s;
    border: 1px solid;
    border-color: #abadb3 #dbdfe6 #e3e9ef #e2e3ea;
    font-family: var(--default-monoFont-family);
    &:hover {
      border-color: #5794bf #b7d5ea #c7e2f1 #c5daed;
      transition: border-color 0.3s;
    }
    > pre {
      padding-left: 10px;
      width: 100%;
      margin:unset;
      max-height: 95% !important;
    }
  }
  .figcopy {
    border-radius: 3px !important;
  }
  details {
    padding-inline: calc(var(--spacing) * 4);
    padding-block: calc(var(--spacing) * 2);
  }
}
.win98 {
  label {
    padding-inline: unset;
  }
  label, p, .status-bar-field, .title-bar,select,option {
    font-size: 13px !important;
  }
}
</style>
