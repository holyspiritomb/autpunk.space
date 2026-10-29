<script lang="ts" setup>
import { useSound } from "@vueuse/sound";
import SoundboardButton from './AlphabetSoundboardButton.vue';
import alphabetSounds from "/audio/alphabet/alphabet.ogg";

const { play } = useSound(alphabetSounds, {
  "sprite": {
    "A": [0, 551.5873015873017],
    "B": [2000, 590.9977324263039],
    "C": [4000, 677.3469387755107],
    "D": [6000, 650.7482993197282],
    "E": [8000, 640.1360544217684],
    "F": [10000, 586.8253968253966],
    "G": [12000, 628.2766439909295],
    "H": [14000, 610.2947845804998],
    "I": [16000, 593.0385487528333],
    "J": [18000, 526.6893424036283],
    "K": [20000, 789.7505668934243],
    "L": [22000, 1950.4761904761913],
    "M": [25000, 422.76643990929585],
    "N": [27000, 597.9818594104315],
    "O": [29000, 453.7188208616776],
    "P": [31000, 620.6802721088422],
    "Q": [33000, 520.9977324263023],
    "R": [35000, 514.217687074833],
    "S": [37000, 632.7210884353747],
    "T": [39000, 733.8321995464838],
    "U": [41000, 456.689342403628],
    "V": [43000, 466.6213151927465],
    "W": [45000, 510.4761904761901],
    "X": [47000, 524.1269841269868],
    "Y": [49000, 460.6349206349236],
    "Z": [51000, 384.71655328797993]
  },
  interrupt: true,
})


const alphabet: string[] = [
  "A", "B", "C", "D", "E",
  "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y",
  "Z"
];

function unhide() {
  document.querySelector("#body").hidden = false;
  document.querySelector(".splash").hidden = true;
}

</script>

<template>
  <div class="splash">
    <h1>About</h1>
    <p>This is a recreation of an old soundboard I made in 2019 in HTML with inline Javascript for a child who was 3 at the time. It has been remade with Vue, and now uses ogg-vorbis audio instead of mp3. (If you're using Internet Explorer, sorry!)</p>
    <p>Fonts have been chosen to match or approximate the original. Colors have been modified from the original as little as possible. The only intentional visual design difference from the original other than with typography is that the buttons now behave as if the user is actually depressing a button when clicked or touched, and the "back to main page" link has been made into a button with the same effect.</p>
    <p>
      <button
        @click="unhide"
      >
        show soundboard
      </button>
    </p>
    <p>
      <NiceButton
        text="fun stuff index"
        href="./"
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
        @click="play({ id: letter })"
      ></SoundboardButton>
    </div>
    <div class="footer">
      <p>dedicated to the best kid in the world</p>
      <NiceButton
        text="back to main page"
        href="./"
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
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: "Fantasque Sans Mono";
  src:
    url("/fonts/fantasque/FantasqueSansMono-Bold.woff2") format("woff2"),
    url("/fonts/fantasque/FantasqueSansMono-Bold.otf") format("opentype"),
    url("/fonts/fantasque/FantasqueSansMono-Bold.ttf") format("truetype");
  font-weight: 700;
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
