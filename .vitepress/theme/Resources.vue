<script setup>
import { data as resources } from "./resources.data.js";
</script>

<template>
  <ul>
    <li
      v-for="resource of resources"
      :key="resource"
    >
      <a :href="resource.url">{{ resource.frontmatter.title }}</a>
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
li:has(>a[href$="resources.html"]),
li:has(>a[href$="index.html"]),
li:has(>a[href$="index"]),
li:has(>a[href$="resources/"]) {
  display: none;
}
</style>
