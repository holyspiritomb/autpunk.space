<script lang="ts" setup>
import SoundboardButton from './AlphabetSoundboardButton.vue';

const alphabet: string[] = [
  "A", "B", "C", "D", "E",
  "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y",
  "Z"
];

const soundId = (l: string) => {
  return `audio${l}`
}

const soundFile = (l: string) => {
  return `../../../audio/alphabet/${l}.mp3`
}

function unhide() {
  document.querySelector("#body").hidden = false;
  document.querySelector(".splash").hidden = true;
}

</script>

<template>
  <div class="splash">
    <h1>About</h1>
    <p>This is a recreation of an old soundboard I made in 2019 in HTML with inline Javascript for a child who was 3 at the time. It has been remade with Vue. Fonts have been chosen to match or approximate the original. Colors have been modified from the original as little as possible.</p>
    <p>The only intentional design difference from the original other than with typography is that the buttons now behave as if the user is actually depressing a button when clicked or touched, and the "back to main page" link has been made into a button with the same effect.</p>
    <p>
      <button
        @click="unhide"
      >
        show soundboard
      </button>
    </p>
    <p>
      <NiceButton
        text="return home"
        href="/"
      />
    </p>
  </div>
  <div
    id="body"
    hidden
  >
    <header>
      <div id="head">Alphabet</div>
    </header>
    <div class="main">
      <h1>Click on any letter to hear its name.</h1>
      <SoundboardButton
        v-for="letter in alphabet"
        :key="letter"
        :button-text="letter"
        :audio-id="soundId(letter)"
        :audio-file="soundFile(letter)"
      ></SoundboardButton>
    </div>
    <div class="footer">
      <p>dedicated to the best kid in the world</p>
      <NiceButton
        text="back to main page"
        href="/"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Fantasque Sans Mono";
  src:
    url("/fonts/fantasque/FantasqueSansMono-Regular.woff2") format("woff2"),
    url("/fonts/fantasque/FantasqueSansMono-Regular.otf") format("opentype"),
    url("/fonts/fantasque/FantasqueSansMono-Regular.ttf") format("truetype");
  font-weight: normal;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: "Fantasque Sans Mono";
  src:
    url("/fonts/fantasque/FantasqueSansMono-Bold.woff2") format("woff2"),
    url("/fonts/fantasque/FantasqueSansMono-Bold.otf") format("opentype"),
    url("/fonts/fantasque/FantasqueSansMono-Bold.ttf") format("truetype");
  font-weight: bold;
  font-display: swap;
  font-style: normal;
}

div#body {
  @apply w-[100%] pt-[10px] pb-[15px] prose-[#000000] h-[100vh];
  overflow-y: scroll;
  background: pink url("/images/alphabet_bg.jpg") fixed;
}
div#head {
  @apply w-[80%] mx-a mt-[10px] text-center c-[#ffffff] font-bold font-size-[55px] line-height-normal vertical-baseline;
  border-radius: 20px !important;
  box-shadow: 5px 5px #000;
  line-height: normal !important;
  font-family: "Fantasque Sans Mono", "Victor Mono", monospace;
  text-shadow: 2px 2px #000000;
  background: linear-gradient(red, orange, yellow, #00ff00, #00ffff, #0000ff, #ff00ff);
}

div.main,
div.footer,
div.splash {
  @apply my-[20px] mx-a p-[15px] w-[70%] b-1 b-dashed b-[#000000] bg-[#ffffff]/50 c-black;
  font-family: "Atkinson Hyperlegible Next", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 5px !important;
  box-shadow: 3px 3px #000000;
  p {
    @apply font-size-[18px] line-height-normal;
  }
  h1 {
    @apply font-bold font-size-[26px];
  }
  h1, p {
    @apply mb-[0.75em] c-black;
  }
}
div.splash {
  background: unset;
  color: initial;
  border-color: currentColor;
  box-shadow: 3px 3px currentColor;
  h1, p {
    color: initial;
  }
  button {
    @apply boxPress px-2;
  }
}
</style>
