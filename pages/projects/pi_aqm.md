---
title: Raspberry Pi Air Quality Monitor
lastUpdated: true
prev:
    text: 'Projects'
    link: '/pages/projects'
next: false
---
# {{ $frontmatter.title }}

<div i-devicon-plain-raspberrypi aria-label="raspberry pi" />
<div i-catppuccin-docker aria-label="docker" />
<div i-catppuccin-python aria-label="python" />
<div i-catppuccin-jinja aria-label="jinja" />
<div i-simple-icons-flask aria-label="flask" />
<div i-catppuccin-html aria-label="html" />
<div i-devicon-plain-bootstrap aria-label="bootstrap" />
<div i-devicon-chartjs-wordmark aria-label="chart dot JS" />


Repo: https://github.com/holyspiritomb/pi_air_quality_monitor

I forked the original project in 2026 because I wanted to be able to track indoor particulate matter and compare it with outdoor measures fetched from the internet. I'd gotten myself an SDS011 sensor in 2025 with a USB interface and it was in a box in my room unopened, because I didn't realize I didn't actually need a breadboard or jumper cables.

I am allergic to all of the environmental allergens both indoors (cats, dogs, dust, molds) and outdoors (trees, grasses, weeds), and this runs on a Raspberry Pi 3A+ in my living room. I've learned so far that my air purifiers really do work, and that vacuuming really does temporarily send dust into the air.

## Prior Arts

- Original: https://github.com/rydercalmdown/pi_air_quality_monitor
- This [sibling-fork by whirledsol](https://github.com/whirledsol/pi-air-quality-monitor) helped me understand how jinja templating works.

<style module>
[i-devicon-plain-bootstrap] {
    @apply bg-ctp-latte-lavender/80 dark:bg-ctp-mocha-lavender;
}
[i-devicon-plain-raspberrypi] {
    @apply bg-ctp-latte-red/70 dark:bg-ctp-mocha-red;
}
[i-simple-icons-flask] {
    @apply bg-ctp-latte-text dark:bg-ctp-mocha-text;
}
</style>
