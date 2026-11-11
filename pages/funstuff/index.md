---
title: Fun Stuff
lastUpdated: true
layout: doc
next: false
prev: false
order: 5
---
<script setup>
import NiceCard from "../../.vitepress/theme/components/NiceCard.vue";
</script>

# {{ $frontmatter.title }}

These are a bunch of toys I've made.

<NiceCard title="Zalgo Generator" text="Make corrupted text by adding unreadably many diacritics, or banish corruption from corrupted text" href="./zalgo" />

<NiceCard title="Unicode Text Styler" text="Transform text by messing around with Unicode" href="./unicode" />

<NiceCard title="Alphabet Soundboard" text="Way back in 2019, I made an alphabet soundboard for a small child in my life. I recreated it here." href="./alphabet-soundboard" img="/images/alphabet_bg.jpg" />

<NiceCard title="Figlet Generator" text="Make ASCII wordart!" href="./figlet" img="/images/figlet.svg" alt-text="the word figlet displayed in an ASCII text art font" extra-img-classes="darkInvert" />
