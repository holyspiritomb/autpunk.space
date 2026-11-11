<template>
  <div id="funDateWidget"></div>
</template>
<style lang="scss" scoped>
#funDateWidget {
  @apply "my-[1em] p-[0.5em] w-[350px]";
  color: var(--vp-c-brand);
}
@media screen and (width < 960px) {
  #funDateWidget {
    @apply mx-a;
  }
}
</style>
