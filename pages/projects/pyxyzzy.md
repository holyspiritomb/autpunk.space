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


A fork of [a clone of Cards Against Humanity](https://gitlab.com/PurkkaKoodari/pyxyzzy), that is deeply indebted to prior arts. I'm doing my best to develop and maintain it in my spare time. It's been a steep learning curve: I started learning typescript and React purely to understand the old frontend code, and I don't know enough python to mess around with the backend. I migrated it from create-react-app to vite and from React 17 to React 18[^1], and created a ``setup.py`` script for starting the backend.

Someday™ I intend to figure out

- how to make one command start both the frontend and backend
- how to implement an admin page in the frontend
- more color schemes
- blank cards with user-provided input
- how to make it go on nixOS[^2]

[^1]: I still don't understand React, but I managed to migrate major version numbers so that must mean something?
[^2]: It's deployed on my partner's VPS running nixOS, their preferred Linux distro, which I have no experience with.

## Prior Arts

- Upstream repo: [Gitlab](https://gitlab.com/PurkkaKoodari/pyxyzzy)
- [Pretend You're Xyzzy](https://github.com/ajanata/PretendYoureXyzzy)
- [Cards Against Humanity](https://cardsagainsthumanity.com/)
