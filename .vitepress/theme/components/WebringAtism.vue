<script setup lang="ts">
import {useScriptTag} from '@vueuse/core';
import { onMounted, ref } from 'vue';

useScriptTag(
  "//minxie.likesyou.org/js/ring-widget.js",
  (el) => {
    document.getElementById("tismRingWidget")?.appendChild(el);
  },
  {
    type: "application/javascript",
    async: false,
    defer: true,
    attrs: {
      "data-ring": "webring",
      "data-id": "autpunk-space",
      "id": "tism-script"
    }
  }
);

const fallbackDivStyle = ref("display: block");
const realDivStyle = ref("display: none");

onMounted( () => {
  const ring = document.querySelector("html div.ringw.minxie-webring:not(.fallback)");
  if (ring) {
    const par = ring.parentNode?.nodeName;
    if (par == "HEAD") {
      document.getElementById("tismRingWidget")?.appendChild(ring);
      realDivStyle.value = "display: block";
      fallbackDivStyle.value = "display: none"
    }
  }
//   const tismRing = document.createElement("script");
//   tismRing.src = "https://minxie.likesyou.org/js/ring-widget.js";
//   tismRing.setAttribute("data-ring", "webring");
//   tismRing.setAttribute("data-id", "autpunk-space");
//   tismRing.setAttribute("defer", true);
//   document.getElementById("tismRingWidget")?.appendChild(tismRing);
});

</script>

<template>
  <div
    id="tismRingWidget"
    :style="realDivStyle"
  >
  </div>
  <div
    id="tismFallback"
    :style="fallbackDivStyle"
  >
    <div
      class="ringw minxie-webring fallback"
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
</template>
<style lang="css" scoped>
/* widget css copied from ringlink script */
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
