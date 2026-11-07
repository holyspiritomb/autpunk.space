<script setup lang="ts">
import zalgo, { banish, chars } from '@favware/zalgo';
import { ref, onMounted } from 'vue';

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
    <br />
    <button
      @click="processText"
    >
      Corrupt
    </button>
  </div>
  <div>
    <textarea
      class="pt-[30px]"
      v-text="zalgoTxt"
    ></textarea>
  </div>
</template>
<style lang="scss" scoped>
div {
  @apply my-[1em] text-center;
  button {
    @apply boxPress px-[1em];
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
