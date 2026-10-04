---
title: Wordart Page 2
lastUpdated: true
prev:
    text: 'Wordart Page 1'
    link: '/pages/wordart/wordarts1'
next:
    text: 'Wordart Page 3'
    link: '/pages/wordart/wordarts3'
---
<script setup>
/// @ts-check
import MySwitchAppearance from "/.vitepress/theme/components/MySwitchAppearance.vue";

import NziPunksFckOffRainbow from "../../src/wordart/NziPunksFckOffRainbow.svg?skipsvgo";
import RepentToWeatherLords from "../../src/wordart/RepentToWeatherLords.svg?skipsvgo";
import Fiber from "../../src/wordart/Fiber.svg?skipsvgo";
import StopBelievingChatbots from "../../src/wordart/StopBelievingChatbots.svg?skipsvgo";
import WeWillOutliveThem from "../../src/wordart/WeWillOutliveThem.svg?skipsvgo";
</script>

# {{ $frontmatter.title }}

<MySwitchAppearance />

<NziPunksFckOffRainbow aria-label="Nazi punks fuck off" class="wordart" width="350px" height="auto"/>

<RepentToWeatherLords aria-label="Repent to your weather lords" class="wordart" width="350px" height="auto" />[^1]
[^1]: https://weatherishappening.com (epilepsy warning)

<Fiber aria-label="I desire the fibrous nutritive material" class="wordart" width="350px" height="auto" />

<StopBelievingChatbots aria-label="Stop believing chatbots" class="wordart" width="350px" height="auto" />

<WeWillOutliveThem aria-label="Trans flag colors text: We will outlive them" class="wordart" width="350px" height="auto"/>

<style module>
svg.wordart {
    @apply mySvg;
    font-family: "Victor Mono" !important;
}
</style>
