---
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
<div i-catppuccin-docker aria-label="docker" />

Repo: https://github.com/holyspiritomb/YuleLog

I forked the original project, which was made for python 3.5. The last commits were in ~2016 and I wanted to bring it up to currently supported python versions and make the text customizable. An interesting thing I learned in the course of the project was that the fire's appearance changes based on whether the terminal is true color or not. Running it via the dockerfile has the program assume a non-truecolor terminal.

Working on this got me excited about ASCII art and is directly responsible for me deciding to mess around with python and javascript figlet ports.

<Log aria-label="YuleLog terminal output" />

<style module>
svg {
    @apply mySvg;
}
</style>
