<script setup lang="ts">

interface Props {
  buttonText?: string,
}

withDefaults(defineProps<Props>(), {
  buttonText: "hello world",
})

</script>

<template>
  <button
    :value="buttonText"
    class="alphabetButton"
  >
    {{ buttonText }}
  </button>
</template>
