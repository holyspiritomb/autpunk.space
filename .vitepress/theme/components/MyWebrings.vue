<script setup lang="ts">
import NixRing from './NixRing.vue';
import CatppuccinRing from './CatppuccinRing.vue';
</script>
<template>
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
  <h3>Prospective</h3>
  <NixRing />
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
