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
        class="sansFont"
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
      classes="bg-ctp-mocha-crust shadow-md shadow-ctp-latte-pink bg-hero-four-point-stars-ctp-latte-pink/20 border-groove border-ctp-latte-pink py-0"
      text-classes="gradient-text bg-gradient-to-r from-ctp-latte-pink via-ctp-macchiato-pink to-ctp-latte-pink sansFont"
      link-classes="gradient-text bg-gradient-to-r from-ctp-latte-pink via-ctp-macchiato-pink to-ctp-latte-pink sansFont"
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
      id="tismFallback block my-1 mx-auto"
    >
      <div
        class="ringw minxie-webring bg-[#282a36] text-[#f8f8f2] border-[#bd93f9] border-[2px] border-solid py-[10px] px-[14px] mx-auto my-[14px] block text-center box-border max-w-[100%] w-fit"
        data-ring="webring"
        style="--rw-bg: #282a36; --rw-fg: #f8f8f2; --rw-edge: #bd93f9; --rw-title: #ff79c6; --rw-link: #8be9fd; border-radius: 10px !important;"
      >
        <div
          class="ring-title text-[#ff79c6] mb-[8px] uppercase font-size-[16px] box-border sansFont"
          style="letter-spacing:.06em; margin-top: 0;"
        >
          <b>A Tism-Webring</b>
        </div>
        <div
          class="ring-links mt-[8px]"
          style="margin-bottom: 0;"
        >
          <a
            class="text-[#8be9fd] font-size-[16px] my-0 mx-[6px] sansFont"
            href="https://minxie.likesyou.org/webring/go.php?id=autpunk-space&amp;action=prev"
            style="color: #8be9fd"
          >
            <b>« Back</b>
          </a>
          <a
            class="text-[#8be9fd] font-size-[16px] my-0 mx-[6px] sansFont"
            href="https://minxie.likesyou.org/webring/index.php"
            style="color: #8be9fd"
          >
            <b>Info</b>
          </a>
          <a
            class="text-[#8be9fd] font-size-[16px] my-0 mx-[6px] sansFont"
            href="https://minxie.likesyou.org/webring/go.php?id=autpunk-space&amp;action=next"
            style="color: #8be9fd"
          >
            <b>Next »</b>
          </a>
        </div>
      </div>
    </div>
    <div id="nixRingDiv"></div>
    <div id="ssgRing"></div>
  </div>
</template>
