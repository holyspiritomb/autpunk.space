<script setup>
import NiceCard from "./components/NiceCard.vue";
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
  <div class="flex flex-wrap gap-[16px]">
    <NiceCard
      v-for="d of projects"
      :key="d"
      :title="d.frontmatter.title"
      :href="d.url"
      :text="(d.frontmatter.description) ? d.frontmatter.description : '.'"
      :style="(d.frontmatter.title == 'Available Reads') ? 'order: 99' : ' ' "
    ></NiceCard>
  </div>
</template>
