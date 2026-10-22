---
order: 1
outline: deep
title: Colophon
lastUpdated: true
prev:
    text: 'About'
    link: '/pages/about/'
next: false
---
<script setup>
import HumanCrafted from "../../src/craftedbyhuman.svg?skipsvgo"
</script>

<style module>
svg#humancrafted {
    fill: rgb(var(--ctp-mocha-lavender-rgb) / 0.2);
    width: 88px !important;
    height: 31px !important;
}
</style>

# {{ $frontmatter.title }}
Here you will find details of this site's creation.

[<HumanCrafted id="humancrafted" width="88px" height="31px" class="no-viewer inline h-[31px] w-[88px]" aria-label="Crafted by Human" />](https://madebyhuman.iamjarl.com)
![cascading style sheets](/buttons/css3.gif){.no-viewer}
![warning: this page contains javascript](/buttons/js-warning.gif){.no-viewer}
![Creative Commons Attribution-NonCommercial-ShareAlike license for the prose](/buttons/cc-by-nc-sa.gif){.no-viewer}
![powered by vitepress](/buttons/poweredbyvp.png){.no-viewer}

## Base Tech stack

- <span i-simple-icons-nvm /> [nvm](https://www.nvmnode.com) for node version management
- <span i-catppuccin-yarn /> [Yarn](https://yarnpkg.com) for node package management
- <span class="i-simple-icons:vitepress" /> [Vitepress v1](https://vuejs.github.io/vitepress/v1/) for static site generation

:::details Vitepress' stack {open}
- <span i-catppuccin-vite /> [Vite](https://v7.vite.dev) for backend
- <span i-catppuccin-markdown /> [Markdown-It](https://www.npmjs.com/package/markdown-it/v/14.3.2) to turn each page's markdown file into html
- <span i-catppuccin-vue /> [Vue 3](https://vuejs.org) for reactivity and templating.
:::

## Functional choices
- <span i-catppuccin-typescript /> [TypeScript](https://www.typescriptlang.org/) for clear types
- <span i-simple-icons-vueuse /> [VueUse](https://vueuse.org) for more Vue functions
- <span i-catppuccin-unocss /> [UnoCSS](https://unocss.dev) for icons and easy CSS shortcutting.
- <span i-catppuccin-sass /> [Sass](https://sass-lang.org) because selectors like <code>&:hover</code> make me feel powerful

## Plugins used
- [markdown-it-abbr](https://www.npmjs.com/package/markdown-it-abbr) for abbreviation annotations like so: ACAB
- [markdown-it-attr](https://www.npmjs.com/package/markdown-it-attrs) for easily adding HTML attributes to markdown elements, for when markdown by itself is insufficient but I don't want to do full HTML
- [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote) for footnotes^[This is a footnote!]
- [vitepress-back-to-top-button](https://www.npmjs.com/package/@miletorix/vitepress-back-to-top-button/v/1.0.3) for the floating button that shows scroll progress. Clicking it brings you to the top of the page.
- [vitepress-plugin-viewerjs](https://www.npmjs.com/package/vitepress-plugin-viewerjs) for the image viewer on the Wordart pages.
- [vitepress-sidebar](https://www.npmjs.com/package/vitepress-sidebar/v/1.39.0) to generate the sidebar links from the directory structure under `pages`.

*[ACAB]: all cats are beautiful

## Style choices
- [Catppuccin Vitepress theme](https://www.npmjs.com/package/@catppuccin/vitepress): Catppuccin Mocha is one of my favorite color schemes.
- [Catppuccin Unocss theme](https://www.npmjs.com/package/@catppuccin/unocss): for easier fiddling with theme colors.
- [@vstyler96/7.css](https://www.npmjs.com/package/@vstyler96/7.css) for the vector-font style of the Figlet page. A fork of the original [7.css](https://khang-nd.github.io/7.css/).
- [@vstyler96/98.css](https://www.npmjs.com/package/@vstyler96/98.css) for the pixel-font style of the Figlet page. A fork of the original [98.css](https://jdan.github.io/98.css/) with scoped usage.


## Typefaces

I have a lot of opinions about typefaces and I enjoy fonts that come with options.

### Pixel fonts
- [monogram](https://datagoblin.itch.io/monogram) for body text and the home hero text.
- [Plain Pixel by  Douglas Vautour (Burpy Fresh)](https://burpyfresh.itch.io/plain-pixel) for Yiddish text and headings. Plain Pixel is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) and I made no modifications.
- [Cozette with crossed 7](https://github.com/the-moonwitch/Cozette/releases) is used in code blocks and the figlet generator input and output.
- [Ari-W9500](https://www.fontstruct.com/fontstructions/show/2368522/ari-w9500) and [Ari-W9500 Bold](https://www.fontstruct.com/fontstructions/show/2376682/ari-w9500-1) by [Catterio Sylt](https://www.fontstruct.com/fontstructors/2105602/catterio) are used in the figlet generator's Windows 98 window styling.

### Vector fonts^[Technically all of the fonts used on this site are vector fonts because the pixel fonts have been vectorized for web use.]
- [Atkinson Hyperlegible Next](https://www.brailleinstitute.org/freefont/) for body text. It was specifically designed for low vision.
- [Victor Mono](https://rubjo.github.io/victor-mono/) is the main code font. I have enabled the options for `slashed 7` and `straighter 6 and 9`. Victor Mono has *`cursive italics`*.
- [Noto Serif Hebrew](https://fontsource.org/fonts/noto-serif-hebrew) and [Noto Sans Hebrew](https://fontsource.org/fonts/noto-sans-hebrew) are used for Yiddish text.
- [JetBrains Mono](https://fontsource.org/fonts/jetbrains-mono) is the code font used for figlet generator input.
- [Zilla Slab](https://fontsource.org/fonts/zilla-slab) is used for the homepage hero text.

## Linking to me

You can link to me with this button (save it to your own server): ![autpunk dot space](/buttons/autpunk_space_stripes.png){.no-viewer}
