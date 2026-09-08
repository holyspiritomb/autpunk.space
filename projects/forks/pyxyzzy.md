---
order: 1
title: pyXyzzy
lastUpdated: true
prev:
    text: 'Projects'
    link: '/projects'
next: false
---
<script setup lang="ts">
import { Python, TypescriptIcon, Sass, SqliteIcon, Vite, _React as React} from "@dev.icons/vue/mono";
</script>

# {{ $frontmatter.title }}

<MyBadge><Vite /></MyBadge>
<MyBadge><React /></MyBadge>
<MyBadge><Python /></MyBadge>
<MyBadge><TypescriptIcon /></MyBadge>
<MyBadge><Sass /></MyBadge>
<MyBadge><SqliteIcon /></MyBadge>

* Repository: https://gitlab.com/holyspiritomb/pyxyzzy-custom
* Deployment: https://pyx.hamster.dance


A fork of a clone of Cards Against Humanity, that I'm doing my best to develop and maintain in my spare time. It's been a steep learning curve: I started learning typescript purely to understand the old frontend code, and I don't know enough python to mess around with the backend. Someday™ I intend to figure out

- how to make one command start both the frontend and backend
- how to implement an admin page in the frontend
- color schemes
- blank cards with user-provided input
- how to make it go on nixOS[^1]

[^1]: It's deployed on my partner's VPS running nixOS, their preferred Linux distro, which I have no experience with.
