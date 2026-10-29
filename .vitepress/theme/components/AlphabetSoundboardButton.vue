<script setup lang="ts">

interface Props {
  buttonText?: string,
  bgColor?: string,
  txtColor?: string,
  txtSize?: string,
  borderColor?: string
}

withDefaults(defineProps<Props>(), {
  buttonText: "hello world",
  bgColor: "mediumpurple",
  txtColor: "black",
  txtSize: "60px",
  borderColor: "rebeccapurple"
})

const styleString = (txt: string, bg: string, size: string, bordercolor: string) => {
  return `color: ${txt}; background-color: ${bg}; font-size: ${size}; border-color: ${bordercolor};`
}
</script>

<template>
  <button
    :value="buttonText"
    :style="styleString(txtColor, bgColor, txtSize, borderColor)"
  >
    {{ buttonText }}
  </button>
</template>

<style lang="scss" scoped>
button {
  @apply boxPress text-center ccborder px-[6px] py-[20px] m-[10px];
  font-weight: 400;
  vertical-align: baseline;
  font-family: "Fantasque Sans Mono", "Victor Mono", monospace;
  cursor: default;
  border-width: 2px;
  box-shadow: 2px 2px 3px currentColor;
}
</style>
