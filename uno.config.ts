import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetWind from "@unocss/preset-wind3";
import { presetCatppuccin } from "unocss-preset-catppuccin";

export default defineConfig({
  presets: [
    presetCatppuccin({
      defaultFlavour: "mocha",
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
    }),
    presetWind(),
  ],
  shortcuts: {
    "btn": "rounded-full shadow-md py-2 px-4 bg-ctp-latte-pink dark:bg-ctp-latte-pink font-bold border-ctp-pink outline-ctp-pink outline-1 shadow-ctp-pink m-[0.5rem] h-[3rem] active:shadow-lg border-1 p-3",
    "input": "py-2 px-4 rounded-sm shadow-md focus:shadow-lg focus:shadow-ctp-sky shadow-ctp-sky py-2 px-4 border-1 border-pink-400 focus:border-pink-700 bg-pink-100 dark:bg-gray-700/50 dark:shadow-ctp-sky caret-pink dark:caret-ctp-sky m-[0.5rem] h-[3rem] focus:outline-1 focus:outline-blue-400",
    "label": "py-2 px-4 text-md",
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
