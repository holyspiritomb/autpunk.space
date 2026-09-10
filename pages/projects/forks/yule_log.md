---
order: 1
title: Yule Log
lastUpdated: true
prev:
    text: 'Projects'
    link: '/pages/projects'
next: false
---
<script setup>
import Log from "/src/yule_log.svg?skipsvgo"
</script>

# {{ $frontmatter.title }}

<div i-catppuccin-python aria-label="python" />

Repo: https://github.com/holyspiritomb/YuleLog

The original project was made for python 3.5 in ~2016 and I wanted to bring it up to currently supported python versions and make the text customizable. An interesting thing I learned in the course of the project was that the fire's appearance changes based on whether the terminal is true color or not.

<Log aria-label="YuleLog terminal output" />

<style module>
svg {
    @apply mySvg;
}
</style>
