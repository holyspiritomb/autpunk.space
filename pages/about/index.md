---
order: 1
outline: deep
title: About
lastUpdated: true
prev:
    text: 'Home'
    link: '/index'
next: false
---
<script setup>
import HumanCrafted from "/src/craftedbyhuman.svg?skipsvgo"
import MyWebrings from "../../.vitepress/theme/components/MyWebrings.vue";
</script>

<style module>
svg#humancrafted {
    fill: rgb(var(--ctp-mocha-lavender-rgb) / 0.2);
    width: 88px !important;
    height: 31px !important;
}
img[src*=".jpg"],
img[src*=".png"],
img[src*=".gif"]{
    @apply inline;
}
img[usemap] {
    @apply block my-1;
}
</style>

# {{ $frontmatter.title }}


## About this site


[<HumanCrafted id="humancrafted" width="88px" height="31px" class="no-viewer inline h-[31px] w-[88px]" aria-label="Crafted by Human" />](https://madebyhuman.iamjarl.com)
![cascading style sheets](/css3.gif){.no-viewer}
![warning: this page contains javascript](/js-warning.gif){.no-viewer}
![Creative Commons Attribution-NonCommercial-ShareAlike license for the prose](/cc-by-nc-sa.gif){.no-viewer}
![powered by vitepress](/poweredbyvp.png){.no-viewer}

You can link to me with this button (save it to your own server): ![autpunk dot space](/autpunk_space.gif){.no-viewer}

::: details Tech stack
- <div i-catppuccin-yarn /> Yarn for node package management
- <div i-selfhst:vitepress /> Vitepress for static site generation
- <div i-devicon-vitejs /> Vite for vitepress' backend
- <div i-devicon-vuejs /> Vue 3 for reactivity, templating and components
- <div i-catppuccin-markdown /> Markdown for prose
- <div i-catppuccin-typescript /> TypeScript for clear types
- <div i-logos:vueuse /> VueUse for more Vue functions
- <div i-catppuccin-unocss /> Unocss for icons and easy CSS shortcutting
- <div i-devicon-sass /> Sass because selectors like <code>&:hover</code> make me feel powerful

:::




## About me

![trans rights now](/transnow2.gif){.no-viewer}
![asexuals now](/asexuals_now.gif){.no-viewer}
![long live MSPaint](/mspaint.gif){.no-viewer}
![arch linux](/archlinux.gif){.no-viewer}
![powered by the void](/thevoid.gif){.no-viewer}
![I survived the 2018 tumblr apocalypse](/tumblr2018.gif){.no-viewer}
![I support right to repair](/right_to_repair_01.jpg){.no-viewer}

<Yiddish title="daloy politsey">
דאַלױ פּאָליצײ!&lrm;
</Yiddish>


I'm Hezekiah (he/him), a fat disabled queer trans ace Jew-in-process. I'm autistic and have ADHD. I have chronic pain due to both hypermobility and a leg length difference. My cane's name is Raphael. My special interests include linguistics, Pok&eacute;mon, Charlie Chaplin films, Star Trek, death positivity, fiber crafts and weather. My fursona is a crow, and furries outnumber non-furries in my house.

Sie d&uuml;rfen mit mir auch auf Deutsch sprechen.

<Yiddish font="yiddishSans" title="ikh red a bisl yidish">
איך רעד א ביסל יידיש.&lrm;
</Yiddish>

<Yiddish title="palestina vet zikh bafrayen">
פּאלעסטינע װעט זיך באַפרײַען!&lrm;
</Yiddish>

<!-- <div i-devicon-plain-zsh text-ctp-latte-yellow dark:text-ctp-mocha-yellow /> -->
<!-- <div i-devicon-plain-ohmyzsh text-ctp-latte-flamingo dark:text-ctp-mocha-flamingo /> -->
### Devices I heck around on

- Raspberry Pi 3A+
- Raspberry Pi 3B+
- Kobo Clara Colour
- Android phone via [Termux](https://termux.dev)
- Homebuilt desktop computer

## Webrings

<MyWebrings />
