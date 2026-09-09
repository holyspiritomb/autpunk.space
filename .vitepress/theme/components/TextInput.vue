<script setup lang="ts">
interface Props {
  label?: string
  value?: string
  placeholder?: string
}
withDefaults(defineProps<Props>(), {
  value: '',
  placeholder: '',
  label: "",
})

</script>
<template>
  <label
    v-if="label"
    class="label"
    for=""
  >{{ label }}</label>
  <input
    type="text"
    class="input"
    :value="value"
    :placeholder="placeholder"
  />
</template>
