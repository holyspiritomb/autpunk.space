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

<AllCatsAreBeautiful aria-label="All cats are beautiful" />

<TheseColorsDontRun aria-label="These colors don't run" />

<style module>
svg {
    @apply mySvg;
    font-family: "Victor Mono" !important;
}
</style>
