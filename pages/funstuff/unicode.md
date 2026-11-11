---
title: Unicode Text Styler
layout: doc
lastUpdated: false
next: false
prev:
    link: './'
    text: 'Fun Stuff Index'
---
<script setup>
import UnicodeConverter from "../../.vitepress/theme/components/UnicodeConverter.vue";
</script>
# {{ $frontmatter.title }}
With this toy, you can convert plain text into fancier glyphs from different Unicode codepoints, and/or add marks to glyphs. Alternatively, you can unstyle fancy text into plain text and remove marks.

<UnicodeConverter />

Note: some styles and decorations may be incompatible with each other, depending on ~~your~~ my configuration of fallback fonts.
