---
title: pyXyzzy
lastUpdated: true
prev:
    text: 'Projects'
    link: '/pages/projects'
next: false
---
# {{ $frontmatter.title }}

<div i-catppuccin-vite aria-label="vite" />
<div i-catppuccin-typescript-react aria-label="react" />
<div i-catppuccin-typescript aria-label="typescript" />
<div i-catppuccin-sass aria-label="sass" />
<div i-catppuccin-python aria-label="python" />

* Repository: [Codeberg](https://codeberg.org/holyspiritomb/pyxyzzy)
* Deployment (you can play it now!): [PyXyzzy hosted by hamster.dance](https://pyx.hamster.dance)

A fork of [a clone of Cards Against Humanity](https://gitlab.com/PurkkaKoodari/pyxyzzy), that is deeply indebted to that source. I did not write the frontend or the backend, but I'm doing my best to develop and maintain it in my spare time. When I initially forked in 2024, I really only meant to add colorschemes. But it turned into something more.

It's been a steep learning curve: I started learning typescript and React purely to understand the old frontend code, and I don't know enough python to mess around with the backend. I migrated the codebase from create-react-app to vite using viject and from React 17 to React 18[^1], and created a ``setup.py`` script for starting the backend. I found a solution to the problem of the game not recalculating the card text sizes on every card draw.

The other people in my house and I haven't figured out how to pronounce "xyzzy" so we call it Card Zards. The deployment linked above uses a custom database of decks where I've removed cards we find upsetting[^2]. "Butts Household" is our custom inside-jokes deck.

Someday™ I intend to figure out

- how to make one command start both the frontend and backend
- how to implement an admin page in the frontend
- more color schemes
- blank cards with user-provided input
- ~~how to make it go on nixOS~~[^3]
- better ways to add, edit and remove cards

[^1]: I still don't understand React, but I managed to migrate major version numbers so that must mean something?
[^2]: I manually removed the rape jokes, pedophilia jokes, dead baby jokes, and fatphobic humor in a graphical sqlite editor to the best of my ability.
[^3]: Someone else already did this, and I don't use nixOS, so I'm allowing myself to not try to figure out nix flakes.

## Prior Arts

- [PyXyzzy original](https://gitlab.com/PurkkaKoodari/pyxyzzy)
- [Pretend You're Xyzzy](https://github.com/ajanata/PretendYoureXyzzy)
- [Cards Against Humanity](https://cardsagainsthumanity.com/)
