<script setup lang="ts">
import { onMounted } from 'vue';
import CatppuccinRing from './CatppuccinRing.vue';
import WebringWidget from './WebringWidget.vue';
import OneLineWebringWidget from './OneLineWebringWidget.vue';

onMounted( () => {
  // const joinedRings = document.getElementById("inWebrings");
  const prospectiveRings = document.getElementById("prospectiveRings");

  function addWebringScript(name, scriptSrc, where, defer, dataIcon, dataRing, dataId) {
    const scriptEl = document.createElement("script");
    scriptEl.id = name;
    scriptEl.src = scriptSrc;
    if (defer === true) {
      scriptEl.defer = true
    }
    if (dataIcon) {
      scriptEl.setAttribute("data-icon", dataIcon);
    }
    if (dataRing) {
      scriptEl.setAttribute("data-ring", dataRing);
    }
    if (dataId) {
      scriptEl.setAttribute("data-id", dataId);
    }
    console.log(scriptEl);

    where?.appendChild(scriptEl);
  }

  addWebringScript("*nixRing", "https://softmachine.dev/webring/linuxring/ring.js", prospectiveRings, true, "arch");

  addWebringScript("ssgring", "https://jbc.lol/webrings/ssgring/pmoring.js", prospectiveRings);
  addWebringScript("TismWebring", "https://minxie.likesyou.org/js/ring-widget.js", prospectiveRings, true, "", "webring", "autpunk-space");
})

</script>
<template>
  <div id="inWebrings">
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
      classes="text-ctp-latte-pink bg-ctp-mocha-crust shadow-md shadow-ctp-latte-pink bg-hero-four-point-stars-ctp-latte-pink/20"
      text-classes="gradient-text bg-gradient-to-r from-ctp-latte-pink via-ctp-macchiato-pink to-ctp-latte-pink bold"
      border="border-1 border-groove border-ctp-latte-pink"
    ></WebringWidget>
    <a href="https://minxie.likesyou.org/webring/">
      <img
        src="https://minxie.likesyou.org/webring/tism-ring.gif"
        class="no-viewer"
        width="88"
        height="31"
        border="0"
        alt="A Tism-Webring"
      />
    </a>
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
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
}
#inWebrings,
#prospectiveRings {
  text-align: center;
}
</style>
