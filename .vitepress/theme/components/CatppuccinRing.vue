<template>
  <div id="catppuccinWebring"
    class="text-center w-[342px] border-[2px] border-ctp-mocha-crust border-outset hover:border-inset shadow-sm shadow-ctp-mocha-lavender/50 hover:shadow-ctp-mocha-lavender/80 py-1 sansFont bg-[--ctp-mocha-crust] bg-gradient-to-b from-[--ctp-mocha-crust] to-[--ctp-mocha-base] mx-auto"
  >
    <span class="py-1 my-0">
      <a
        href="https://ctp-webr.ing/autpunk/previous"
        title="previous"
        class="mx-[5px] sansFont"
        style="color: var(--ctp-mocha-pink);"
      >&laquo;</a><a
        href="https://ctp-webr.ing/"
        title="Catppuccin webring"
        class="gradient-text ringtitle font-size-[16px] sansFont"
      >
        Catppuccin webring
      </a> <a
        href="https://ctp-webr.ing/autpunk/next"
        title="next"
        class="mx-[5px] sansFont"
        style="color: var(--ctp-mocha-lavender);"
      >&raquo;</a>
    </span>
  </div>
</template>
<style scoped>
div#catppuccinWebring a.ringtitle {
  background-image:
    -webkit-linear-gradient(
      0deg,
      var(--ctp-mocha-pink) 1%,
      var(--ctp-mocha-peach) 10%,
      var(--ctp-mocha-yellow) 30%,
      var(--ctp-mocha-green) 50%,
      var(--ctp-mocha-teal) 60%,
      var(--ctp-mocha-sky) 70%,
      var(--ctp-mocha-lavender)
  );
}
</style>
