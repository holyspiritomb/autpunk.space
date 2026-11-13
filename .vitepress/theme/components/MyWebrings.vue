<script setup lang="ts">
import { onMounted } from 'vue';
import { useScriptTag } from '@vueuse/core';
import { useStorage } from "@vueuse/core";
import CatppuccinRing from './CatppuccinRing.vue';
import WebringWidget from './WebringWidget.vue';
import OneLineWebringWidget from './OneLineWebringWidget.vue';

const pauseGifs = useStorage("pauseGifs", false, localStorage);

useScriptTag(
  "https://jbc.lol/webrings/ssgring/pmoring.js",
  (el) => {
    document.getElementById("ssgRing")?.appendChild(el);
  }
);

// const nixRing = useScriptTag(
//   "https://softmachine.dev/webring/linuxring/ring.js",
//   (el) => {
//     document.getElementById("nixRingDiv")?.appendChild(el);
//   },
//   {
//     defer: true,
//     attrs: {
//       "data-icon": "arch",
//     },
//   },
// );
// console.log(nixRing.scriptTag.value);

onMounted( () => {
  const nixRingScript = document.createElement("script");
  nixRingScript.defer = true;
  nixRingScript.src = "https://softmachine.dev/webring/linuxring/ring.js";
  nixRingScript["data-icon"] = "arch";
  document.getElementById("nixRingDiv")?.appendChild(nixRingScript);
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
      classes="bg-ctp-mocha-crust shadow-md shadow-ctp-latte-pink bg-hero-four-point-stars-ctp-latte-pink/20 border-groove border-ctp-latte-pink"
      text-classes="gradient-text bg-gradient-to-r from-ctp-latte-pink via-ctp-macchiato-pink to-ctp-latte-pink bold"
      link-classes="gradient-text bg-gradient-to-r from-ctp-latte-pink via-ctp-macchiato-pink to-ctp-latte-pink"
      border="border-[2px]"
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
    
    <div
      id="tismFallback"
    >
      <div
        class="ringw minxie-webring"
        data-ring="webring"
        style="--rw-bg: #282a36; --rw-fg: #f8f8f2; --rw-edge: #bd93f9; --rw-title: #ff79c6; --rw-link: #8be9fd;"
      >
        <div class="ring-title">A Tism-Webring</div>
        <div class="ring-links">
          <a href="https://minxie.likesyou.org/webring/go.php?id=autpunk-space&amp;action=prev">« Back</a>
          <a href="https://minxie.likesyou.org/webring/index.php">Info</a>
          <a href="https://minxie.likesyou.org/webring/go.php?id=autpunk-space&amp;action=next">Next »</a>
        </div>
      </div>
    </div>
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
.ringw {
  --rw-bg:#282a36;
  --rw-fg:#f8f8f2;
  --rw-edge:#bd93f9;
  --rw-title:#ff79c6;
  --rw-link:#8be9fd;
  display:block;
  box-sizing:border-box;
  background:var(--rw-bg);
  color:var(--rw-fg);
  border:2px solid var(--rw-edge);
  border-radius:10px;
  padding:10px 14px;
  width:fit-content;
  max-width:100%;
  margin:14px auto;
  text-align:center;
  font-family:sans-serif
}
.ringw *,
.ringw *:before,
.ringw *:after{
  box-sizing:border-box
}
.ringw .ring-title{
  font-weight:bold;
  font-size:.9em;
  color:var(--rw-title);
  text-transform:uppercase;
  letter-spacing:.06em;
  margin-bottom:8px
}
.ringw .ring-links a{
  color:var(--rw-link);
  text-decoration:none;
  margin:0 6px;
  font-size:.9em;
  font-weight:bold
}
.ringw .ring-links a:hover,
.ringw .ring-links a:focus-visible{
  text-decoration:underline
}
.ringw--shadow{
  box-shadow:var(--rw-shadow,none)
}
.ringw--ears{
  position:relative;padding-top:16px
}
.ringw--ears:before,.ringw--ears:after{
  content:"";
  position:absolute;
  top:-11px;
  width:0;
  height:0;
  border-left:11px solid transparent;
  border-right:11px solid transparent;
  border-bottom:11px solid var(--rw-edge)
}
.ringw--ears:before{
  left:16px
}
.ringw--ears:after{
  right:16px
}
@media (prefers-reduced-motion:reduce) {
  .ringw *{transition:none!important}
}
</style>
