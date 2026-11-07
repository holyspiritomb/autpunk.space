<script setup lang="ts">
import zalgo, { banish, chars } from '@favware/zalgo';
import { useClipboard } from "@vueuse/core";
import { ref, onMounted } from 'vue';

const { copy, copied, isSupported } = useClipboard({
  legacy: true,
  copiedDuring: 3000,
  read: false,
});

// Zalgo usage
// zalgo('some text');

// banish('ŝ̜̩͇̼̥̼́̏͢o͎͊͜ḿ̛̩̳̖͕̞̩̭ͪe͖̺̣̹̺̋̀͛̽͝ ̖͍̭͓̯̠͑͑͢t̼̪̋͌͢eͯ̋͏͖͎͍̩̭̮x̢͚̄̾̀̈ͧ̓ͩ̚t̪ͫ͝');

// To log all the supported chars use:
// console.log(chars);

const plainTxt = ref("Be gay do word crimes")
const zalgoTxt = ref("")

const processText = () => {
  if (!plainTxt.value.trim()) {
    console.log("nothing to zalgo");
    return;
  }
  const zText = zalgo(plainTxt.value);
  console.log(zText);
  zalgoTxt.value = zText;
}

const clearInput = () => {
  plainTxt.value = ""
  zalgoTxt.value = ""
}

onMounted( () => {
  console.log("zalgo chars available:");
  console.log(chars);
})
</script>
<template>
  <div>
    <textarea
      v-model="plainTxt"
      placeholder="Input something"
    ></textarea>
    <div>
      <button
        @click="processText"
      >
        Corrupt
      </button>
      <button
        @click="clearInput"
      >
        Clear
      </button>
    </div>
  </div>
  <div>
    <textarea
      class="pt-[30px]"
      v-text="zalgoTxt"
    ></textarea>
    <div
      v-if="isSupported"
    >
      <button
        v-if="zalgoTxt"
        @click="copy(zalgoTxt)"
      >
        <span v-if="!copied">Copy</span>
        <span v-else>Cͭ̿̏͏̶̲͈̹̝͖̱ͅơ̘̠͖͉̦̔̈́͆̀̾͋p̛̳̟̼̜̘̳ͩ̄ͬ̽ͣ̾̏͢ĭ̜͓̗ͧ̈́ͩe̬͚̰̺͇͍̝̎͊̆̀͑̓̔d̷̹̜͈͑̑̓͌̄!</span>
      </button>
    </div>
    <p v-if="!isSupported">
      Sorry, Your browser does not support Clipboard API.
    </p>
  </div>
</template>
<style lang="scss" scoped>
div {
  @apply my-[1em] text-center;
  button {
    @apply boxPress px-[1em] mx-[0.5em];
    color: var(--vp-c-text1);
    background-color: var(--vp-c-bg);
  }
  textarea {
    @apply mx-auto p-[15px] ccborder;
    height: 200px;
    width: 350px;
    font-size: 16px !important;
    line-height: unset !important;
    font-family: UnifontEX, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: var(--vp-c-text1);
    background-color: var(--vp-c-bg);
  }
}
</style>
