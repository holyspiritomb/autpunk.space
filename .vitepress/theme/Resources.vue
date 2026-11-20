<script setup>
import { data as resources } from "./resources.data.js";
import "./Resources.scss";

const myResources = [];

for (const resource of resources) {
  if (resource.frontmatter.title == "Resources") {
    continue
  } else {
    myResources.push(resource);
  }
}
</script>

<template>
  <div class="flex flex-wrap gap-[16px]">
    <NiceCard
      v-for="d of myResources"
      :key="d"
      :title="d.frontmatter.title"
      :href="d.url"
      :text="(d.frontmatter.description) ? d.frontmatter.description : '.'"
    ></NiceCard>
  </div>
</template>
