<script setup lang="ts">
import EasySpeech from "easy-speech";
import { useTemplateRef, onMounted, ref } from 'vue';

const speechMe = (textInput) => {
  EasySpeech.speak({
    text: textInput,
    // voice: myLangVoice, // optional, will use a default or fallback
    pitch: 1,
    rate: 1,
    volume: 1,
    // there are more events, see the API for supported events
    /* eslint-disable no-unused-vars */
    boundary: (e) => console.debug("boundary reached"),
    start: (e) => testFunction("playing"),
    end: (e) => testFunction("play"),
    pause: (e) => testFunction("play"),
    // resume: (e) => testFunction("pause")
    /* eslint-enable no-unused-vars */
  });
};
const textToSynthesize = useTemplateRef("read-this-aloud");
const buttonText = ref("loading")

function testFunction(txt) {
  buttonText.value = txt;
}

onMounted(() => {
  console.debug(textToSynthesize.value)
  console.debug(EasySpeech.status());
  console.debug(EasySpeech.detect());
  EasySpeech.init({ maxTimeout: 5000, interval: 250 })
    .then(() => buttonText.value = "play")
    .catch((e) => console.error(e));
})
</script>

<template>
  <div>
    <input
      ref="read-this-aloud"
      class="w-70 input"
      value="Workers of the world, unite! You have nothing to lose but your chains!"
    />
    <button
      class="float-right max-w-20 text-sm btn"
      @click="speechMe(textToSynthesize.value)"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
