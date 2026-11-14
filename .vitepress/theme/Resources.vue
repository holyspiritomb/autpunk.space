<script setup>
import { data as resources } from "./resources.data.js";
import "./Resources.scss"

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
  <ul>
    <li
      v-for="resource of myResources"
      :key="resource"
      class="resource"
    >
      <a :href="resource.url">{{ resource.frontmatter.title }}</a>
    </li>
  </ul>
</template>
