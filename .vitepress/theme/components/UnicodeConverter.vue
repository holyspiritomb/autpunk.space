<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useClipboard } from "@vueuse/core";
import api from "unicode-font-styles";
import "./UnicodeConverter.scss";

const { copy, copied, isSupported } = useClipboard({
  legacy: true,
  copiedDuring: 3000,
  read: false,
});

const inputText: string = ref("In the bigynnyng God made of nouyt heuene and erthe. Forsothe the erthe was idel and voide, and derknessis weren on the face of depthe; and the Spiryt of the Lord was borun on the watris.")
const outputText: string = ref()
const conversions = ["bold", "italic", "boldItalic", "fullwidth", "script", "boldScript", "fraktur", "boldFraktur", "doubleStruck", "monospace", "sans", "sansBold", "sansItalic", "sansBoldItalic", "circled", "circledNegative", "squared", "negativeSquared"];
const effects = ["underline", "doubleUnderline", "strikethrough", "overline"]
const effectRef = ref("none");
const conversion = ref("none");

const myConversions = [];

for (const i of conversions) {
  const info = api.getStyle(i);
  myConversions.push(info);
}

const fullwidthIndex = myConversions.findIndex((set) => set.id == "fullwidth");
myConversions[fullwidthIndex].label = "Full-width";
const frakturIndex = myConversions.findIndex((set) => set.id == "fraktur");
myConversions[frakturIndex].label = "Fraktur";

const uppercaseOnly = ["squared", "negativeSquared", "circledNegative"];

function applyConv(intext, conv) {
  if (conv == "none") {
    // don't apply a conversion if we haven't picked one
    return intext;
  } else if (conv == "upsideDown") {
    return api.upsideDown(intext);
  } else {
    if (uppercaseOnly.includes(conv)) {
      const intextUpp = intext.toUpperCase()
      return api.convert(intextUpp, conv);
    }
    return api.convert(intext, conv);
  }
}

function applyEffect(intext, effectVal) {
  // if you picked "unstyle" or no effects, don't apply an effect
  if (effectVal == "none") {
    return intext;
  } else {
    return api.effect(intext, effectVal);
  }
}

const processText = () => {
  if ((effectRef.value == "none") && (conversion.value == "none")) {
    // if nothing is picked, unstyle. it's what the people want
    outputText.value = api.unstyle(inputText.value);
    return;
  }
  const convOutput = applyConv(inputText.value, conversion.value);
  outputText.value = applyEffect(convOutput, effectRef.value);
}

const resetConverter = () => {
  outputText.value = "";
  inputText.value = "";
  conversion.value = "none"
  effectRef.value = "none"
}

const unstyleInput = () => {
  outputText.value = api.unstyle(inputText.value);
}

onMounted( () => {
  console.log("Ready to convert some text.");
})

</script>
<template>
  <textarea
    v-model="inputText"
    placeholder="put something cool here"
    maxlength="10000"
    class="ccborder unicodeStyler block w-[384px] mx-a h-[150px] p-[0.5em] defaultColors font-size-[16px]"
  ></textarea>
  <div class="flex justify-between w-[384px] mx-a my-[1em]">
    <select
      v-model="conversion"
      class="ccborder px-[0.25em] defaultColors"
    >
      <option
        value="none"
        class="defaultColors px-[0.2em]"
      >
        pick a style
      </option>
      <option
        v-for="set of myConversions"
        :key="set.id"
        :value="set.id"
        class="defaultColors px-[0.2em]"
      >
        {{ set.label }}
      </option>
      <option
        value="upsideDown"
        class="defaultColors px-[0.2em]"
      >
        Upside-Down
      </option>
    </select>
    <select
      v-model="effectRef"
      class="ccborder px-[0.2em] defaultColors"
    >
      <option
        value="none"
        class="defaultColors px-[0.2em]"
      >
        pick an effect
      </option>
      <option
        v-for="e of effects"
        :key="e"
        :value="e"
        class="defaultColors px-[0.2em]"
      >
        {{ api.EFFECTS[e].label }}
      </option>
    </select>
    <button
      class="defaultColors boxPress px-[0.2em]"
      @click="unstyleInput"
    >
      unstyle
    </button>
    <button
      class="defaultColors boxPress px-[0.2em]"
      @click="processText"
    >
      convert
    </button>
  </div>
  <textarea
    readonly
    class="unicodeStyler ccborder block w-[384px] mx-a h-[150px] p-[0.5em] defaultColors font-size-[16px]"
    style="line-height: unset !important;"
    v-text="outputText"
  ></textarea>
  <div class="flex justify-between w-[384px] mx-a my-[1em]">
    <button
      class="defaultColors boxPress px-[0.3em]"
      @click="resetConverter"
    >
      reset
    </button>
    <div
      v-if="isSupported"
    >
      <button
        class="defaultColors boxPress px-[0.3em]"
        :style="(outputText) ? 'visibility: visible' : 'visibility: hidden'"
        @click="copy(outputText)"
      >
        <span v-if="!copied">copy</span>
        <span v-else>copied!</span>
      </button>
    </div>
  </div>
</template>
