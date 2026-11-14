<script setup>
import { data } from "./thoughtfossils.data.js";

const writings = [];

for (const w of data) {
  if (w.url == "/pages/writing/") {
    continue
  } else {
    writings.push(w)
  }
}

</script>

<template>
  <ul>
    <li
      v-for="d of writings"
      :key="d"
      class="writing"
    >
      <a :href="d.url">{{ d.frontmatter.title }}</a> {{ d.frontmatter.date }}
    </li>
  </ul>
</template>
