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
    "btn": "rounded-lg shadow-md py-2 px-4 font-bold",
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
