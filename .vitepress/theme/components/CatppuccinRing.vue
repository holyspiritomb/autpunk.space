<template>
  <div id="catppuccinWebring">
    <h3>
      <a
        href="https://ctp-webr.ing/autpunk/previous"
        title="previous"
      >&laquo;</a><a
        href="https://ctp-webr.ing/"
        title="Catppuccin webring"
      >
        Catppuccin webring
      </a> <a
        href="https://ctp-webr.ing/autpunk/next"
        title="next"
      >&raquo;</a>
    </h3>
  </div>
</template>
<style scoped>
div#catppuccinWebring {
  @apply text-center w-[342px] border-[2px] border-ctp-mocha-crust border-outset hover:border-inset shadow-sm shadow-ctp-mocha-lavender/50 hover:shadow-ctp-mocha-lavender/80 py-1;
  background-color: var(--ctp-mocha-crust);
  background-image: 
    -webkit-linear-gradient(
      90deg,
      var(--ctp-mocha-crust) 25%,
      var(--ctp-mocha-base)
  );
  h3 {
    @apply py-1 my-0;
    a[href*="ctp-webr.ing"] {
      text-decoration: none;
      text-shadow: none !important;
      &:hover {
        text-decoration-line: underline;
        text-decoration-skip-ink: all;
      }
      &::after {
        display: none !important;
      }
      &:first-of-type {
        @apply text-ctp-mocha-pink mx-[5px];
      }
      &:last-of-type {
        @apply text-ctp-mocha-lavender mx-[5px];
      }
      &:nth-of-type(2) {
        color: transparent;
        -webkit-text-fill-color: transparent;
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
        background-clip: text;
      }
    }
  }
}
</style>
