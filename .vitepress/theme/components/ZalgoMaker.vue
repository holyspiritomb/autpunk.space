<script setup lang="ts">
import zalgo, { banish } from '@favware/zalgo';
import { useClipboard } from "@vueuse/core";
import { ref, onMounted } from 'vue';

const { copy, copied, isSupported } = useClipboard({
  legacy: true,
  copiedDuring: 3000,
  read: false,
});

const zLevels = ["mini", "maxi"]

// Zalgo usage
// zalgo('some text');

// banish('ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝');

// To log all the supported chars use:
// console.log(chars);

const plainTxt = ref("Be gay do word crimes")
const zalgoTxt = ref("")
const corruptionLevel = ref("")

const processText = () => {
  if (!plainTxt.value.trim()) {
    console.log("nothing to corrupt or banish");
    return;
  }
  let zText;
  // TODO: make this conditional chain prettier, like a nice trinary chain
  if (corruptionLevel.value == "") {
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
  <div>
    <textarea
      v-model="plainTxt"
      placeholder="input something"
      maxlength="10000"
    ></textarea>
    <div>
      <label
        for="corruption"
      >
        level
      </label>
      <select
        id="corruption"
        v-model="corruptionLevel"
      >
        <optgroup label="corruption level">
          <option value="">default</option>
          <option
            v-for="level in zLevels"
            :key="level"
            :value="level"
          >
            {{ level }}
          </option>
          <option value="banish">banish</option>
        </optgroup>
      </select>
      <button
        v-if="corruptionLevel == 'banish'"
        @click="processText"
      >
        purify
      </button>
      <button
        v-else
        @click="processText"
      >
        corrupt
      </button>
    </div>
  </div>
  <div>
    <textarea
      class="pt-[30px]"
      :placeholder="(!plainTxt.trim()) ? 'put text in the other box' : (corruptionLevel == 'banish') ? 'click the &quot;purify&quot; button' : 'click the &quot;corrupt&quot; button'"
      readonly
      v-text="zalgoTxt"
    ></textarea>
    <div class="flex">
      <div>
        <button
          @click="resetStuff"
        >
          reset
        </button>
      </div>
      <div
        v-if="isSupported"
      >
        <button
          @click="copy(zalgoTxt)"
        >
          <span v-if="!copied">copy</span>
          <span v-else>{{ zalgo("copied!") }}</span>
        </button>
      </div>
      <!-- <p v-if="!isSupported"> -->
      <!--   Sorry, Your browser does not support Clipboard API. -->
      <!-- </p> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
div {
  @apply my-[1em] text-center;
  button, select {
    @apply boxPress px-[1em] mx-[0.5em];
  }
  select, option, button {
    color: var(--vp-c-text1);
    background-color: var(--vp-c-bg);
    font-family: var(--vp-font-family-mono);
    font-size: var(--vp-code-font-size);
  }
  textarea {
    @apply "mx-auto p-[15px] ccborder h-[180px] w-[350px]";
    background: var(--vp-c-bg);
    line-height: unset !important;
    color: var(--vp-c-text1);
  }
}
div.flex {
  @apply my-0 mx-auto;
  width: 350px;
  justify-content: space-between;
}
html.pixel {
  textarea {
    font-family: UnifontEX, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 16px !important;
  }
  select, option, button, label {
    font-family: var(--vp-font-family-mono);
    font-size: var(--vp-code-font-size);
  }
}
</style>
