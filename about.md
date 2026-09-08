---
order: 1
title: About
lastUpdated: true
prev:
    text: 'Home'
    link: '/index'
next: false
---
<script setup>
import HumanCrafted from "/src/craftedbyhuman.svg?skipsvgo"
import VitePressIcon from "/src/vitepress-logo-mini.svg"
</script>

<style module>
svg#humancrafted {
    fill: var(--ctp-latte-crust);
}
.abouticons {
    height: 16px;
    width: auto;
}

</style>

# {{ $frontmatter.title }}

## About this site

[<HumanCrafted id="humancrafted" width="120px" height="auto" class="no-viewer" />](https://madebyhuman.iamjarl.com)

::: details technologies used
Package manager:
<div i-catppuccin-yarn />

Vitepress' stack:
<div i-catppuccin-vite />
<div i-catppuccin-vue />
<div i-catppuccin-markdown />

My choices:
<div i-catppuccin-typescript />
<div i-catppuccin-sass />
<div i-catppuccin-unocss />

Linting:
<div i-catppuccin-eslint />
<div i-catppuccin-stylelint />
:::


## About me

What, are you a cop?

<div i-devicon-plain-archlinux text-ctp-latte-sky dark:text-ctp-mocha-sky />
<div i-devicon-plain-neovim text-ctp-latte-green dark:text-ctp-mocha-green />
<div i-devicon-plain-zsh text-ctp-latte-yellow dark:text-ctp-mocha-yellow />
<div i-devicon-plain-ohmyzsh text-ctp-latte-flamingo dark:text-ctp-mocha-flamingo />

Devices:
<div i-arcticons-kobo-books text-ctp-latte-lavender dark:text-ctp-mocha-lavender />
<div i-devicon-plain-raspberrypi text-ctp-latte-red dark:text-ctp-mocha-red />

- Kobo Clara Colour
- Raspberry Pi 3A+
- Raspberry Pi 3B+
- Homebuilt desktop computer
