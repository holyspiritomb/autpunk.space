import {
  defineConfig,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetWind from "@unocss/preset-wind3";
import { presetCatppuccin } from "unocss-catppuccin";

export default defineConfig({
  presets: [
    presetWind(),
    presetCatppuccin({
      defaultFlavour: 'mocha',
      prefix: false,
    }),
    presetAttributify(),
  ],
  shortcuts: {
    "btn": "rounded-full shadow-md py-2 px-4 bg-pink-200 dark:bg-pink-500 font-bold border-pink outline-pink outline-1 shadow-pink-500/50 m-[0.5rem] h-[3rem] focus:shadow-pink-500 active:shadow-lg border-1 p-3",
    "input": "py-2 px-4 rounded-sm shadow-md focus:shadow-lg focus:shadow-blue-500 shadow-blue-200 py-2 px-4 border-1 border-pink-400 focus:border-pink-700 bg-pink-100 dark:bg-gray-700/50 dark:shadow-blue-500 caret-pink dark:caret-blue m-[0.5rem] h-[3rem] focus:outline-1 focus:outline-blue-400",
    "label": "py-2 px-4 text-md",
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
