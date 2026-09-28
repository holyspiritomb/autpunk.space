<script setup>
import { data } from "./projects.data.js";
</script>

<template>
  <ul>
    <li
      v-for="d of data"
      :key="d"
    >
      <a :href="d.url">{{ d.frontmatter.title }}</a>
    </li>
  </ul>
</template>

<style scoped>
li {
  list-style-type:none;
  &::before {
    content: "🔧";
    position: relative;
    right: 0.5em;
  }
}
/* HACK: omit the index page from list */
li:has(>a[href$="projects.html"]),
li:has(>a[href$="index.html"]),
li:has(>a[href$="index"]),
li:has(>a[href$="projects/"]) {
  display: none;
}
</style>

