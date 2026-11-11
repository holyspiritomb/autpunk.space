<script setup lang="ts">
import { onMounted } from 'vue';
import { useScriptTag } from '@vueuse/core';
import { useStorage } from "@vueuse/core";
import CatppuccinRing from './CatppuccinRing.vue';
import WebringWidget from './WebringWidget.vue';
import WebringAtism from './WebringAtism.vue';
import OneLineWebringWidget from './OneLineWebringWidget.vue';

const pauseGifs = useStorage("pauseGifs", false, localStorage, {mergeDefaults: true});


// const nixRingScript = useScriptTag(
//   "https://softmachine.dev/webring/linuxring/ring.js",
//   (el) => {
//     document.getElementById("nixRingDiv")?.appendChild(el);
//   },
//   {
//     defer: true, 
//     async: false,
//     manual: true,
//     attrs: {
//       "data-icon": "arch",
//     },
//   },
// );
//
// nixRingScript.load();

onMounted( () => {
  // nixRingScript.unload();
  const nixRing = document.createElement("script");
  nixRing.src = "https://softmachine.dev/webring/linuxring/ring.js";
  nixRing.defer = true;
  nixRing.setAttribute("data-icon", "arch");

  if (window.location.href.startsWith("https://")) {
    document.getElementById("nixRingDiv")?.appendChild(nixRing);

    useScriptTag(
      "https://jbc.lol/webrings/ssgring/pmoring.js",
      (el) => {
        document.getElementById("ssgRing")?.appendChild(el);
      }
    );

  } else {
    console.log("Not adding js widgets to webring component without SSL.");
  }

});
</script>
<template>
  <div id="inWebrings">
    <div id="flexRings">
      <OneLineWebringWidget
        ring-name="I'm Gen Lissa"
        ring-home-link="https://genlissa.baccyflap.com"
        prev-link="https://genlissa.baccyflap.com/?prv&s=hez"
        next-link="https://genlissa.baccyflap.com/?nxt&s=hez"
        random-link="https://genlissa.baccyflap.com/?rnd"
        style="color: rgb(255, 0, 255); background-color: rgb(255, 190, 0);"
      ></OneLineWebringWidget>
      <OneLineWebringWidget
        ring-name="no AI webring"
        ring-home-link="https://baccyflap.com/noai"
        prev-link="https://baccyflap.com/noai/?prv&s=hez"
        next-link="https://baccyflap.com/noai/?nxt&s=hez"
        random-link="https://baccyflap.com/noai/?rnd"
        style="color: var(--ctp-latte-text); background-color: var(--ctp-latte-base); font-family: var(--default-monoFont-family);"
      ></OneLineWebringWidget>
    </div>
    <CatppuccinRing />
  </div>


  <div id="prospectiveRings">
    <h3 text-center>Pending</h3>
    <WebringWidget
      ring-name="CSS Joy"
      ring-home-link="https://cs.sjoy.lol/"
      prev-link="https://webri.ng/webring/cssjoy/previous?via=https://autpunk.space"
      next-link="https://webri.ng/webring/cssjoy/next?via=https://autpunk.space"
      random-link="https://webri.ng/webring/cssjoy/random?via=https://autpunk.space"
      classes="text-ctp-latte-pink bg-ctp-mocha-crust shadow-md shadow-ctp-latte-pink bg-hero-four-point-stars-ctp-latte-pink/20 border-[2px] border-groove border-ctp-latte-pink"
      text-classes="gradient-text bg-gradient-to-r from-ctp-latte-pink via-ctp-macchiato-pink to-ctp-latte-pink bold"
    ></WebringWidget>
    <a href="https://minxie.likesyou.org/webring/">
      <img
        id="tism_gif"
        :src="(!pauseGifs) ? 'https://minxie.likesyou.org/webring/tism-ring.gif' : '/buttons/tism-ring-still.gif'"
        class="no-viewer"
        width="88"
        height="31"
        border="0"
        alt="A Tism-Webring"
      />
    </a>
    <WebringAtism />
    <div id="nixRingDiv"></div>
    <div id="ssgRing"></div>
  </div>
</template>

<style scoped>
map area {
  @apply crosshair;
}
div {
  @apply mx-auto my-[1em] text-center;
  img {
    @apply mx-auto;
  }
}
img[usemap] {
  @apply block my-1;
}

@media screen and (width < 960) {
  #inWebrings,
  #prospectiveRings {
    width: 342px;
  }
}
@media screen and (width >= 960) {
  #inWebrings {
    width: 100%;

    #flexRings {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
    }
  }
}
#inWebrings,
#prospectiveRings {
  text-align: center;
}
</style>
