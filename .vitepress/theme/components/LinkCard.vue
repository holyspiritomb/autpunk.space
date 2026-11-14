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
  <a
    :href="link"
    class="link-card boxPress w-[300px]"
  >
    <div
      v-if="image"
      class="link-card-inner w-[100%] h-a p-0 m-0"
    >
      <object
        v-if="image.endsWith('svg')"
        :data="image"
        type="image/svg+xml"
      >
      </object>
      <img
        v-else
        :src="image"
      />
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
