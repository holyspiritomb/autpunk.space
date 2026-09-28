---
title: weather.koplugin
lastUpdated: true
prev:
    text: 'Projects'
    link: '/pages/projects'
next: false
---
# {{ $frontmatter.title }}
<div i-catppuccin-lua aria-label="lua" />

Repo: [Github](https://github.com/holyspiritomb/weather.koplugin)

I got myself a Kobo Clara Colour[^1] in 2025 and I wanted to check the weather without looking at my phone or computer. This is my fork of a repository that seems to have been deleted and then recreated. The fork relationship is severed, but you can still read the commit history to see my changes: [upstream but not really](https://github.com/holyspiritomb/weather.koplugin/tree/5192c957f872700d245c72e4777e38fc7e3110e6)?

My changes include more granular control over units. For each type of value (temperatures, wind speeds, lengths), the user has a choice of imperial or metric. Originally, selecting Fahrenheit forced imperial for all other values. I wanted to be able to mix systems, because even though I use Fahrenheit for temperatures, air pressure in mmHg[^2] is more intuitive to me than air pressure values in inches of mercury.

[^1]: I appreciate that Rakuten Kobo doesn't change the product name for American customers.
[^2]: millimeters of mercury
