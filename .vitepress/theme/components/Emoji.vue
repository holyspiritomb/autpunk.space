<script setup lang="ts">
import emojis from "markdown-it-emoji/lib/data/full.mjs";
import emojisLite from "markdown-it-emoji/lib/data/light.mjs";
import { useClipboard } from "@vueuse/core";

const emoji_array = Object.keys(emojis).map((key) => [key, emojis[key]])
const emojiLite_array = Object.keys(emojisLite).map((key) => [key, emojisLite[key]])

const { copy } = useClipboard({
  legacy: true,
  copiedDuring: 3000,
  read: false,
});

const erudaStr = `javascript:(function () { var script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init({useShadowDom:true,defaults:{theme:'Dracula'}});eruda.position({x: 350, y: 125});eruda.show();let snippets=eruda.get('snippets');snippets.add('Scale 1', function (){eruda.scale(1);}, 'Scale 1');snippets.add('Scale 2', function (){eruda.scale(2);}, 'Scale 2');snippets.add('Scale 3',function (){eruda.scale(3);},'Scale 3'); } })();`

</script>
<template>
  <div class="w-[350px] mx-a">
    <h2><a id="liteList">Lite emoji list</a></h2>
    <div class="w-[100%] border-1 dark:border-[--vp-c-gutter]">
      <div
        v-for="emoji of emojiLite_array"
        :key="emoji[0]"
        class="flex gap-[5px] my-0 py-[0.5em] pl-[0.5em] even:bg-[--vp-c-bg]/60 odd:bg-[--vp-button-brand-bg]/60 border-b-1 border-b-[--vp-c-gutter] dark:border-b-[--vp-c-border] last:border-0"
      >
        <div
          class="flex-grow sansFont font-size-[16px] overflow-x-scroll"
          @click="copy(`:${emoji[0]}:`)"
        >
          :{{ emoji[0] }}:
        </div>
        <div class="w-[25px] unifont font-size-[16px]">{{ emoji[1] }}</div>
        <div class="w-[25px]">{{ emoji[1] }}</div>
      </div>
    </div>
    <h2><a id="fullList">Full emoji list</a></h2>
    <div class="w-[100%] border-1 dark:border-[--vp-c-gutter]">
      <div
        v-for="emoji of emoji_array"
        :key="emoji[0]"
        class="flex gap-[5px] my-0 py-[0.5em] pl-[0.5em] even:bg-[--vp-c-bg]/60 odd:bg-[--vp-button-brand-bg]/60 border-b-1 border-b-[--vp-c-gutter] dark:border-b-[--vp-c-border] last:border-0"
      >
        <div
          class="flex-grow sansFont font-size-[16px] overflow-x-scroll"
          @click="copy(`:${emoji[0]}:`)"
        >
          :{{ emoji[0] }}:
        </div>
        <div class="w-[25px] unifont font-size-[16px]">{{ emoji[1] }}</div>
        <div class="w-[25px]">{{ emoji[1] }}</div>
      </div>
    </div>
  </div>
  <p>
    <a :href="erudaStr">eruda</a>
  </p>
</template>
