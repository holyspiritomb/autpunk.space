---
title: Wordart Page 3
lastUpdated: true
prev:
    text: 'Wordart Page 2'
    link: '/pages/wordart/wordarts2'
next: false
---
<script setup>
/// @ts-check
import MySwitchAppearance from "/.vitepress/theme/components/MySwitchAppearance.vue";
import AllCatsAreBeautiful from "../../src/wordart/AllCatsAreBeautiful.svg?skipsvgo";
import TheseColorsDontRun from "../../src/wordart/TheseColorsDontRun.svg?skipsvgo";
// import NziPunksFckOff from "../../src/wordart/NziPunksFckOff.svg?skipsvgo";
</script>

# {{ $frontmatter.title }}

<MySwitchAppearance />

<AllCatsAreBeautiful aria-label="All cats are beautiful" class="wordart" width="350px" height="auto" />

<TheseColorsDontRun aria-label="These colors don't run" class="wordart" width="350px" height="auto" />

<style module>
svg.wordart {
    @apply mySvg;
    font-family: "Victor Mono" !important;
}
</style>
