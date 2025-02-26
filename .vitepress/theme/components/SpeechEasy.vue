<script setup lang="ts">
import EasySpeech from "easy-speech";
import { useTemplateRef, onMounted, ref } from 'vue';

var speechStatus = () => {
  const eStat = EasySpeech.status();
  return eStat.status;
}
const buttonIcon = ref("i-carbon-play-filled");
const textToSynthesize = useTemplateRef("read-this-aloud");

function changeIcon() {
  const status = speechStatus()
  if (status === "init speak") {
    buttonIcon.value = "i-carbon-pause-filled"
  } else if (status === "created" || status === "speak complete" || status === "init: complete") {
    buttonIcon.value = "i-carbon-play-filled"
  } else {
    return
  }
}

const debugAction = () => {
  let status = speechStatus()
  console.log(`current status: |${status}| and button is ${buttonIcon.value}`)
  changeIcon();
  console.log(`current status: |${status}| and button is ${buttonIcon.value}`)
}

const speechMe = (textInput) => {
  EasySpeech.speak({
    text: textInput,
    // voice: myLangVoice, // optional, will use a default or fallback
    pitch: 1,
    rate: 1,
    volume: 1,
    /* eslint-disable no-unused-vars */
    boundary: (e) => console.debug(e),
    start: (e) => debugAction(),
    end: (e) => debugAction(),
    pause: (e) => debugAction(),
    resume: (e) => debugAction()
    /* eslint-enable no-unused-vars */
  });
};

onMounted(() => {
  console.debug(EasySpeech.detect());
  EasySpeech.init({ maxTimeout: 5000, interval: 250 })
    .then(() => console.log(EasySpeech.status()))
    .catch((e) => console.error(e));
})

</script>

<template>
  <div>
    <input
      ref="read-this-aloud"
      class="input"
      value="Workers of the world, unite! You have nothing to lose but your chains!"
    />
    <button
      class="btn"
      :class="buttonIcon"
      @click="speechMe(textToSynthesize.value)"
    >
    </button>
    <button
      class="i-carbon-stop-filled btn"
      @click="clickAction()"
    >
    </button>
  </div>
</template>
