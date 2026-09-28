<script setup>
import { data } from "./thoughtfossils.data.js";
</script>

<template>
  <ul>
    <li
      v-for="d of data"
      :key="d"
    >
      <a :href="d.url">{{ d.frontmatter.title }}</a> {{ d.frontmatter.date }}
    </li>
  </ul>
</template>

<style scoped>
li {
  list-style-type:none;
  &::before {
    content: "☭";
    position: relative;
    right: 0.5em;
  }
}
/* HACK: omit the index page from list */
li:has(>a[href$="thought-fossils.html"]),
li:has(>a[href$="index.html"]),
li:has(>a[href$="index"]),
li:has(>a[href$="thought-fossils/"]) {
  display: none;
}
</style>
