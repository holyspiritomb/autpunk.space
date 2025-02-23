<script setup lang="ts">
interface Props {
  label?: string
  value?: string
  placeholder?: string
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
  placeholder: '',
})

</script>
<template>
  <label class="label" v-if="label" for="">{{ label }}</label>
  <input
    type="text"
    class="input"
    :value="value"
    :placeholder="placeholder"
  />
</template>
