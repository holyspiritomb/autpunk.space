import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: {
    "border-main": "border-$vp-c-divider",
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  theme: {
    fontFamily: {
      mono: "var(--vp-font-family-mono)",
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
