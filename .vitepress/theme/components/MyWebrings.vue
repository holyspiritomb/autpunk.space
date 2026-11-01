<script setup lang="ts">
import { onMounted } from 'vue';
import CatppuccinRing from './CatppuccinRing.vue';
import WebringWidget from './WebringWidget.vue';

onMounted( () => {
  const inWebringsDiv = document.getElementById("inWebrings");
  const prospectiveRings = document.getElementById("prospectiveRings");

  function addWebringScript(name, scriptSrc, where) {
    const scriptEl = document.createElement("script");
    scriptEl.id = name;
    scriptEl.src = scriptSrc;
    where?.appendChild(scriptEl);
  }

  // addWebringScript("ssgring", "https://jbc.lol/webrings/ssgring/pmoring.js", prospectiveRings);
})

</script>
<template>
  <div id="inWebrings">
    <div id="genlissaWebring">
      <map name="genlissawidget">
        <area
          href="https://genlissa.baccyflap.com"
          shape="rect"
          coords="25,0,124,45"
          target="_blank"
          alt="Gen Lissa Webring"
          title="I'm Gen Lissa"
        />
        <area
          href="https://genlissa.baccyflap.com/?prv&s=hez"
          target="_top"
          shape="rect"
          coords="0,17,24,45"
          alt="previous"
          title="Previous"
        />
        <area
          href="https://genlissa.baccyflap.com/?rnd"
          target="_top"
          shape="rect"
          coords="133,0,149,16"
          alt="random"
          title="Random"
        />
        <area
          href="https://genlissa.baccyflap.com/?nxt&s=hez"
          target="_top"
          shape="rect"
          coords="125,17,149,45"
          alt="next"
          title="Next"
        />
      </map>
      <img
        usemap="#genlissawidget"
        class="no-viewer"
        src="/buttons/webrings/genlissa_widget.gif"
        alt="a yellow rectangle with the words 'I'm generation Lissa' in pink and purple. to the left and right are double arrows in pink, and to the top right is a purple question mark"
      />
    </div>

    <div id="noaiWebring">
      <map name="noaisys1widget">
        <area
          href="https://baccyflap.com/noai"
          target="_blank"
          shape="rect"
          coords="0,0,341,38"
          alt="no ai webring"
          title="no ai webring"
        />
        <area
          href="https://baccyflap.com/noai/?prv&s=hez"
          target="_top"
          shape="rect"
          coords="71,53,142,76"
          alt="previous"
          title="previous"
        />
        <area
          href="https://baccyflap.com/noai/?rnd"
          target="_top"
          shape="rect"
          coords="153,53,225,76"
          alt="random"
          title="random"
        />
        <area
          href="https://baccyflap.com/noai/?nxt&s=hez"
          target="_top"
          shape="rect"
          coords="237,53,308,76"
          alt="next"
          title="next"
        />
      </map>
      <img
        usemap="#noaisys1widget"
        class="no-viewer"
        src="/buttons/webrings/noai_sys1widget.gif"
        alt="an 80s Macintosh System 1 style black-and-white dialog box titled 'The No AI Webring' with a little icon showing a dead computer. beside it are three clickable buttons, labeled Previous, Random and Next"
      />
    </div>
    <CatppuccinRing />
  </div>
  <h3>Prospective</h3>
  <div id="prospectiveRings">
    <WebringWidget
      ring-name="*nixRing"
      ring-home-link="https://softmachine.dev/webring/linuxring/"
      prev-link="https://softmachine.dev/webring/linuxring/redirect?url=https%3A%2F%2Fautpunk.space%2F&go=prev"
      next-link="https://softmachine.dev/webring/linuxring/redirect?url=https%3A%2F%2Fautpunk.space%2F&go=next"
      classes="bg-hero-bathroom-floor-ctp-latte-sky/20 text-black bg-white mono bold"
      border="border-[3px] border-double border-black"
    >
      <img
        style="height: 25px;"
        src="/images/arch.png"
        alt="Arch Linux logo"
      />
    </WebringWidget>
    <WebringWidget
      ring-name="SSGRing"
      ring-home-link="https://jbc.lol/webrings/ssgring/"
      prev-link="https://jbc.lol/webrings/ssgring/redirect?slug=autpunk-space&way=prev"
      next-link="https://jbc.lol/webrings/ssgring/redirect?slug=autpunk-space&way=next"
      random-link="https://jbc.lol/webrings/ssgring/redirect?slug=autpunk-space&way=rand"
      classes="bg-hero-topography-ctp-mocha-green/30 text-ctp-mocha-green bg-ctp-mocha-crust"
      border="border-2 border-outset border-ctp-mocha-green"
    ></WebringWidget>
    <WebringWidget
      ring-name="CSS Joy"
      ring-home-link="https://cs.sjoy.lol/"
      prev-link="https://webri.ng/webring/cssjoy/previous?via=https://autpunk.space"
      next-link="https://webri.ng/webring/cssjoy/next?via=https://autpunk.space"
      random-link="https://webri.ng/webring/cssjoy/random?via=https://autpunk.space"
      classes="bg-hero-graph-paper-ctp-latte-pink/30 text-ctp-latte-pink bg-ctp-mocha-crust"
      text-classes="gradient-text bg-gradient-to-r from-ctp-latte-pink via-ctp-macchiato-pink to-ctp-latte-pink"
      border="border-1 border-groove border-ctp-latte-pink"
    ></WebringWidget>
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
</style>
