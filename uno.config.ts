import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetTypography,
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
      extraProperties: {
        "display": "inline-block",
      },
      customizations: {
        transform(svg) {
          return svg.replace(/#fff/, "currentColor");
        },
      },
    }),
    presetTagify(),
    presetWind(),
    presetTypography(),
  ],
  shortcuts: {
    "btn": "rounded-full shadow-md py-2 px-4 bg-ctp-latte-pink dark:bg-ctp-latte-pink font-bold border-ctp-pink outline-ctp-pink outline-1 shadow-ctp-pink m-[0.5rem] h-[3rem] active:shadow-lg border-1 p-3",
    "input": "py-2 px-4 rounded-sm shadow-md focus:shadow-lg focus:shadow-ctp-sky shadow-ctp-sky py-2 px-4 border-1 border-pink-400 focus:border-pink-700 bg-pink-100 dark:bg-gray-700/50 dark:shadow-ctp-sky caret-pink dark:caret-ctp-sky m-[0.5rem] h-[3rem] focus:outline-1 focus:outline-blue-400",
    "label": "py-2 px-4",
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  autocomplete: {
    templates: [
      // theme inferring
      'bg-$color/<opacity>',
      // short hands
      'text-<font-size>',
      // logic OR groups
      '(b|border)-(solid|dashed|dotted|double|hidden|none)',
    ],
    shorthands: {
      // equal to `opacity: "(0|10|20|30|40|50|60|70|90|100)"`
      'opacity': Array.from({ length: 11 }, (_, i) => i * 10),
      'font-size': '(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)',
    },
    // extractors: [
    //     // ...extractors
    // ],
  },
});
