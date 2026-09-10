import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetWind4,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetCatppuccin from "@catppuccin/unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,vue,scss,css}"],
  },
  presets: [
    presetWind4(),
    presetCatppuccin(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
      warn: true,
      extraProperties: {
        "display": "inline-block",
        "margin-right": "3px",
        "vertical-align": "middle",
      },
      customizations: {
        transform(svg) {
          return svg.replace(/#fff/, "currentColor");
        },
      },
    }),
    presetTagify(),
    presetTypography(),
  ],
  shortcuts: {
    "btn": "rounded-full shadow-md py-2 px-4 font-bold border-ctp-mocha-pink outline-ctp-latte-pink outline-1 shadow-ctp-mocha-pink m-[0.5rem] h-[3rem] active:shadow-lg border-1 p-3 text-black bg-ctp-mocha-pink",
    "input": "py-2 px-4 rounded-sm shadow-md focus:shadow-lg focus:shadow-ctp-frappe-sky shadow-ctp-mocha-sky py-2 px-4 border-1 border-pink-400 focus:border-pink-700 bg-pink-100 dark:bg-gray-700/50 dark:shadow-ctp-mocha-sky caret-pink dark:caret-ctp-mocha-sky m-[0.5rem] h-[3rem] focus:outline-1 focus:outline-blue-400",
    "label": "py-2 px-4",
    "viewerjs": "bg-ctp-mocha-base",
    "homefeaturelink": "bg-ctp-mocha-pink/50 border-ctp-mocha-pink/70 hover:border-ctp-mocha-pink/90 active:border-ctp-mocha-pink/100 active:bg-ctp-mocha-pink/60 dark:bg-ctp-mocha-crust/30 dark:border-ctp-mocha-crust/50 dark:hover:border-ctp-mocha-pink/70 dark:active:border-ctp-mocha-pink/100 dark:active:bg-ctp-mocha-crust/80",
    "homefeatureimg": "bg-ctp-mocha-pink/50 dark:bg-ctp-mocha-crust/50 p-[6px] border-rd-1",
    "codelangblock": "bg-white/90 border-1 border-ctp-mocha-sky/90 dark:(bg-ctp-mocha-base border-ctp-mocha-sky/50)",
    "sidebarLinks": "border-l-1 pl-[16px] border-rd-[2px] border-l-pink",
    "detailscustom": "bg-ctp-mocha-lavender/20 dark:bg-ctp-mocha-lavender/10",
    "customToggle": "bg-ctp-mocha-lavender/20 dark:bg-ctp-mocha-mantle border-rd-[5px] pr-[16px] mb-[1em] b-solid border-1 border-ctp-mocha-lavender/50 dark:border-ctp-mocha-surface1",
    "customSwitch": "border-1 b-solid border-ctp-mocha-lavender/50 active:border-ctp-mocha-lavender focus:border-ctp-mocha-lavender dark:border-ctp-mocha-surface1 border-rd-[11px]",
    "mySvg": "w-[350px] h-a",
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
      // @ts-expect-error it's fine
      'opacity': Array.from({ length: 11 }, (_, i) => i * 10),
      'font-size': '(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)',
    },
    // extractors: [
    //     // ...extractors
    // ],
  },
});
