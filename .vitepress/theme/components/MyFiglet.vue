<script setup lang="ts">
import figlet from "figlet";
import { useClipboard, useStorage } from "@vueuse/core";
import { ref as deepRef, onMounted } from "vue";
import { loadFont as loadFontUtil, getAvailableFonts, getLoadedFonts } from "../util/fontLoader";
import "@vstyler96/7.css/dist/7.scoped.css";
import "@vstyler96/98.css/dist/98.scoped.css";
import "./MyFiglet.scss";

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

const preferredFont = useStorage("preferredFont", "vector", localStorage, {mergeDefaults: true});

const { copy, copied, isSupported } = useClipboard({
  legacy: true,
  copiedDuring: 3000,
  read: false,
  source: figletText,
});

// significantly adapted from studying
// https://github.com/zzgosh/ASCII-ART_SVG/blob/d000ca76afdad788cf0debed249cad1d4c3618f7/src/components/AsciiArtGenerator.vue

// const availableFonts = deepRef(getAvailableFonts())

const loadFont = async (fontName: string): Promise<boolean> => {
  const result = await loadFontUtil(fontName);
  loadedFonts.value = getLoadedFonts();
  return result;
}


const generateArt = async () => {
  if (!textToFiglet.value.trim()) {
    figletText.value = "";
    return;
  }

  console.debug("Generating", textToFiglet.value, "with font:", chosenFont.value);

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
const initializeDefaultFonts = async () => {
  console.debug("Loading initial fonts...");
  await loadFont("Future Smooth");
  console.debug("Initial fonts loaded");
  await generateArt()
}

function unhide() {
  document.querySelector("#alert")?.show();
  document.querySelector("#alert")?.toggleAttribute("hidden");
}

function hideHelp() {
  document.querySelector("#alert")?.toggleAttribute("hidden");
}

const windowsVersion = (st?) => {
  if (preferredFont.value == "pixel") {
    return `win98 ${st}`
  }
  else {
    return `win7 ${st}`
  }
}

onMounted(() => {
  listOfFonts.value = getAvailableFonts();
  initializeDefaultFonts();
})
</script>

<template>
  <div
    id="myContainer"
    class="w-[100%] h-[100vh] m-0 py-[10px]"
  >
    <div :class="windowsVersion('mx-a border-0')">
      <dialog
        id="alert"
        class="z-999 w-[250px] h-[120px]"
      >
        <div class="window active">
          <div class="title-bar">
            <div
              class="title-bar-text"
            >
              Help
            </div>
            <div class="title-bar-controls">
              <button
                aria-label="Close"
                @click="hideHelp"
              ></button>
            </div>
          </div>
          <div class="window-body has-space">
            <p>Type in the input textarea, and ASCII text art will appear in the large output box.</p>

            <p style="text-align: right; margin-top: 25px;">
              <button @click="hideHelp">OK</button>
            </p>
          </div>
        </div>
      </dialog>
      <div class="window active">
        <div class="title-bar">
          <div
            class="title-bar-text"
          >
            Figlet Generator
          </div>
          <div class="title-bar-controls">
            <button
              aria-label="Help"
              @click="unhide"
            ></button>
            <button
              aria-label="Maximize"
              disabled
            ></button>
            <button
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="window-body has-space">
          <label
            for="font"
            class="mr-1 inline my-1"
          >
            Font:
          </label>
          <!-- eslint-disable vue/no-template-shadow -->
          <select
            id="font"
            v-model="chosenFont"
            class="w-[45%] inline my-1"
            @change="generateArt"
          >
            <option
              v-for="font in listOfFonts"
              :key="font"
              :value="font"
            >
              {{ font }} {{ loadedFonts.has(font) ? "✓" : "" }}
            </option>
          </select>
          <details v-if="(preferredFont == 'vector')">
            <summary>Advanced Options</summary>
            <div>
              <label for="hLayout">Horizontal Layout:</label>
              <select
                id="hLayout"
                v-model="hLayout"
                class="w-[45%] inline my-1"
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
                class="w-[45%] inline my-1"
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
                class="w-[45%] inline my-1"
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
            >
              Input text:
            </label>
            <textarea
              id="inputText"
              class="h-[100px] w-[200px] block"
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
                class="figcopy"
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
              class="h-a w-[100%] textC"
              @click="copy()"
            >
              <pre><code>{{ figletText }}</code></pre>
            </div>
          </div>
        </div>
        <div class="status-bar">
          <p class="status-bar-field">Font: {{ chosenFont }}</p>
          <p class="status-bar-field">Figlet fonts loaded: {{ loadedFonts.size }}</p>
          <p class="status-bar-field">Figlet fonts available: {{ getAvailableFonts().length }}</p>
          <p class="status-bar-field">Powered by <a href="https://www.npmjs.com/package/figlet">figlet.js</a></p>
        </div>
      </div>
      <CenterDiv class="slotted">
        <slot />
      </CenterDiv>
      <div id="startMenu"></div>
    </div>
    <!-- eslint-enable vue/no-template-shadow -->
  </div>
</template>
