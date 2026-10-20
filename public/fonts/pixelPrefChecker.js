const pixelPref = localStorage.getItem("pixelFonts");
if (pixelPref && pixelPref === "true" && !document.documentElement.classList.contains("pixel")) {
  document.documentElement.classList.add("pixel");
}
