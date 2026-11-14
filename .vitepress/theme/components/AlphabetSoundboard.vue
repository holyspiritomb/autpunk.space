<script lang="ts" setup>
import { useSound } from "@vueuse/sound";
import SoundboardButton from './AlphabetSoundboardButton.vue';
import alphabetSounds from "/audio/alphabet/alphabet.ogg";
import "./soundboard.scss";

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
  document.querySelector("#alphabetBody").hidden = false;
  document.querySelector(".alphabetSplash").hidden = true;
}

</script>

<template>
  <div class="alphabetSplash">
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
    id="alphabetBody"
    hidden
  >
    <header>
      <div id="alphabetHead">Alphabet</div>
    </header>
    <div class="alphabetMain">
      <h1>Click on any letter to hear its name.</h1>
      <SoundboardButton
        v-for="letter in alphabet"
        :key="letter"
        :button-text="letter"
        @click="play({ id: letter })"
      ></SoundboardButton>
    </div>
    <div class="alphabetFooter">
      <p>dedicated to the best kid in the world</p>
      <NiceButton
        text="back to main page"
        href="./"
      />
    </div>
  </div>
</template>
