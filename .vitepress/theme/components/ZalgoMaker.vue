<script setup lang="ts">
import zalgo, { banish } from '@favware/zalgo';
import { useClipboard } from "@vueuse/core";
import { ref, onMounted } from 'vue';

const { copy, copied, isSupported } = useClipboard({
  legacy: true,
  copiedDuring: 3000,
  read: false,
});

const zLevels = ["default", "mini", "maxi", "banish"]

// To log all the supported chars use:
// console.log(chars);

const plainTxt = ref("Be gay do word crimes")
const zalgoTxt = ref("")
const corruptionLevel = ref("default")

const processText = () => {
  if (!plainTxt.value.trim()) {
    console.log("nothing to corrupt or banish");
    return;
  }
  let zText;
  // TODO: make this conditional chain prettier, like a nice trinary chain
  if (corruptionLevel.value == "default") {
    console.log(zalgo("Corrupting..."));
    zText = zalgo(plainTxt.value);
  } else if (corruptionLevel.value == "banish") {
    console.log("Purifying text...")
    zText = banish(plainTxt.value)
  } else {
    console.log(zalgo("Corrupting..."), "at level:", corruptionLevel.value);
    zText = zalgo(plainTxt.value, {size: corruptionLevel.value});
  }
  zalgoTxt.value = zText;
}

const resetStuff = () => {
  const confirmation = confirm("Reset?");
  if (!confirmation) {
    return
  } else {
    corruptionLevel.value = "";
    plainTxt.value = "Be gay do word crimes";
    zalgoTxt.value = "";
  }
}

onMounted( () => {
  console.log("Zalgo generator is ready to summon and banish demons.");
})
</script>
<template>
  <div class="my-[1em] text-center">
    <textarea
      v-model="plainTxt"
      class="mx-auto p-[15px] ccborder h-[180px] w-[350px] defaultColors"
      placeholder="input something"
      maxlength="10000"
      style="line-height: unset !important;"
    ></textarea>
    <div class="my-[0.25em] text-center">
      <label
        for="corruption"
      >
        level
      </label>
      <select
        id="corruption"
        v-model="corruptionLevel"
        class="ccborder defaultColors px-[1em] mx-[0.5em]"
      >
        <optgroup label="corruption level">
          <option
            v-for="level in zLevels"
            :key="level"
            :value="level"
            class="defaultColors"
          >
            {{ level }}
          </option>
        </optgroup>
      </select>
      <button
        class="boxPress defaultColors px-[1em] mx-[0.5em]"
        @click="processText"
      >
        {{ (corruptionLevel == "banish") ? "purify" : "corrupt" }}
      </button>
    </div>
  </div>
  <div class="my-[1em] text-center">
    <textarea
      class="pt-[30px] mx-auto px-[15px] pb-[15px] ccborder h-[180px] w-[350px] defaultColors"
      :placeholder="(!plainTxt.trim()) ? 'put text in the other box' : (corruptionLevel == 'banish') ? 'click the &quot;purify&quot; button' : 'click the &quot;corrupt&quot; button'"
      readonly
      style="line-height: unset !important;"
      v-text="zalgoTxt"
    ></textarea>
    <div class="options flex my-0 mx-auto justify-between w-[350px]">
      <div>
        <button
          class="boxPress defaultColors px-[1em] mx-[0.5em]"
          @click="resetStuff"
        >
          reset
        </button>
      </div>
      <div
        v-if="isSupported"
      >
        <button
          class="boxPress defaultColors px-[1em] mx-[0.5em]"
          @click="copy(zalgoTxt)"
        >
          <span v-if="!copied">copy</span>
          <span v-else>{{ zalgo("copied!") }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
