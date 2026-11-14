<script setup>
import { data } from "./projects.data.js";
import "./Projects.scss";

const projects = [];

for (const p of data) {
  if (p.url == "/pages/projects/") {
    continue;
  } else {
    projects.push(p);
  }
}
</script>

<template>
  <ul>
    <li
      v-for="d of projects"
      :key="d"
      class="project"
    >
      <a :href="d.url">{{ d.frontmatter.title }}</a>
    </li>
  </ul>
</template>
