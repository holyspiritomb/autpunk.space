<template>
  <div id="nixringContainer">
    <div
      id="nixring"
      style="display: flex; gap: 50px; align-items: center;"
    >
      <a
        href="https://softmachine.dev/webring/linuxring/redirect?url=https%3A%2F%2Fautpunk.space%2F&go=prev"
        title="previous"
      >&laquo;</a>
      <a href="https://softmachine.dev/webring/linuxring">
        <div>*nixRing<br />
          <img
            style="height: 25px;"
            src="https://softmachine.dev/webring/linuxring/icon/arch.png"
            alt="Arch Linux logo"
          />
        </div>
      </a>
      <a
        href="https://softmachine.dev/webring/linuxring/redirect?url=https%3A%2F%2Fautpunk.space%2F&go=next"
        title="next"
      >&raquo;</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div#nixringContainer {
  @apply text-center w-[342px];
  background: white;
  border: 3px double black;
	color: black;

	#nixring {
    @apply mx-a p-[8px];
    width: fit-content;
		text-align: center;
	}
	#nixring a {
    font-size: 26px;
		color: black;
		text-decoration: none;
    font-weight: bold;
    &::after {
      display: none;
    }
    &:hover {
      text-decoration: underline;
      cursor: crosshair;
    }
	}
}
</style>
