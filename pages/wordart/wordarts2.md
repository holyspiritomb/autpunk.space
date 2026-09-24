---
title: Wordart Page 2
lastUpdated: true
prev:
    text: 'Wordart Page 1'
    link: '/pages/wordart/wordarts1'
next: false
---
<script setup>
import MySwitchAppearance from "/.vitepress/theme/components/MySwitchAppearance.vue";

import NpfoRainbow from "/src/wordart/npfo_rainbow_blocky.svg?skipsvgo";
import Repent from "/src/wordart/repent5.svg?skipsvgo";
import Fiber from "/src/wordart/fiber_caps.svg?skipsvgo";
import StopChatbots from "/src/wordart/stop_believing_chatbots_trans.svg?skipsvgo";
import WeWill from "/src/wordart/we_will_outlive_them_transf.svg?skipsvgo";
</script>

# {{ $frontmatter.title }}

<MySwitchAppearance />

<NpfoRainbow aria-label="Nazi punks fuck off" />

<Repent aria-label="Repent to your weather lords" />[^1]
[^1]: https://weatherishappening.com (epilepsy warning)

<Fiber aria-label="I desire the fibrous nutritive material" />

<StopChatbots aria-label="Stop believing chatbots" />

<WeWill aria-label="Trans flag colors text: We will outlive them" />

<style module>
svg {
    @apply mySvg;
    font-family: "Victor Mono" !important;
}
</style>
