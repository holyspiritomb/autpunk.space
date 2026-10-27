<script setup lang="ts">
defineProps<{
  title: string
  details?: string
  link?: string
  rel?: string
  target?: string
  image?: string
}>()
</script>

<template>
  <a :href="link" class="link-card">
    <div
      v-if="image"
      class="link-card-inner"
    >
      <img
        v-if="image.endsWith('png')"
        :src="image"
      />
      <img
        v-else-if="image.endsWith('jpg')"
        :src="image"
      />
      <img
        v-else-if="image.endsWith('gif')"
        :src="image"
      />
      <object
        v-else-if="image.endsWith('svg')"
        :data="image"
        type="image/svg+xml"
      >
      </object>
    </div>
    <div>
      <h2 class="title">{{ title }}</h2>
      <p
        v-if="details"
        class="details"
      >{{ details }}</p>
    </div>
  </a>
</template>

<style scoped>
.link-card {
  @apply boxPress w-[300px];
}
.link-card-inner {
  > img {
    @apply w-[100%] h-a p-0 m-0;
  }
}
</style>
