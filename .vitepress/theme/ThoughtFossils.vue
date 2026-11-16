<script setup>
import { data } from "./thoughtfossils.data.js";

const writings = [];

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

for (const w of data) {
  if (w.url == "/pages/writing/") {
    continue
  } else {
    if (w.frontmatter.date) {
      const dateStamp = new Date(w.frontmatter.date);
      const prettierDate = dateStamp.toLocaleString('en-GB', options);  
      w.frontmatter.prettyDate = prettierDate;
    }
    writings.push(w);
  }
}

</script>

<template>
  <div>
    <NiceCard
      v-for="d of writings"
      :key="d"
      :title="d.frontmatter.title"
      :href="d.url"
      :text="(d.frontmatter.prettyDate) ? d.frontmatter.prettyDate : 'date unknown'"
    ></NiceCard>
  </div>
</template>
