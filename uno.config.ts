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
import processorLightningCSS from '@unocss/processor-lightningcss';
// import browserslist from 'browserslist';
import { Features } from 'lightningcss';
import { flavors } from "@catppuccin/palette";

// let targets = browserslistToTargets(browserslist('>= 0.25%'));
const mocha = flavors.mocha.colors;
const latte = flavors.latte.colors;
const gradMocha = `linear-gradient(90deg, ${mocha.red.hex} 0%, ${mocha.peach.hex} 30%, ${mocha.yellow.hex} 40%, ${mocha.green.hex} 50%, ${mocha.teal.hex} 60%, ${mocha.sky.hex} 70%, ${mocha.sapphire.hex} 80%, ${mocha.blue.hex} 90% ${mocha.lavender.hex} 100%)`;

const gradLatte = `linear-gradient(90deg, ${latte.red.hex} 0%, ${latte.peach.hex} 30%, ${latte.yellow.hex} 40%, ${latte.green.hex} 50%, ${latte.teal.hex} 60%, ${latte.sky.hex} 70%, ${latte.sapphire.hex} 80%, ${latte.blue.hex} 90% ${latte.lavender.hex} 100%)`;

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,vue,scss,css}", "pages/**/*.md"],
  },
  processors: [
    processorLightningCSS({
      include: Features.VendorPrefixes,
    }),
  ],
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
  rules: [
    ["jetbrains", { "font-family": "'JetBrains Mono', monospace !important" }],
    ["victor", { "font-family": "'Victor Mono', monospace !important" }],
    ["victorFeatures", { "font-feature-settings": "'ss06' on, 'ss01' off, 'ss07' on" }],
    [/^z-(\d+)$/, ([, d]) => ({ "z-index": `${d}` })],
    ["list-decimal", { "list-style-type": "decimal" }],
    ["smaller", { "font-size": "smaller" }],
    ["bg-gradient-pink-blue", { "background-image": "linear-gradient(-45deg, #ea76cb 50%, #04a5e5 50%)" }],
    ["ctpGradMocha", { "background-image": gradMocha }],
    ["ctpGradLatte", { "background-image": gradLatte }],
    ["zilla", { "font-family": "Zilla Slab" }],
    ["ySerif", { "font-family": "Noto Serif Hebrew" }],
    ["ySans", { "font-family": "Noto Sans Hebrew" }],
    ["rtl", { "dir": "rtl" }],
    ["crosshair", { "cursor": "crosshair" }],
  ],
  shortcuts: {
    "btn": "rounded-md shadow-md py-2 px-2 border-ctp-mocha-pink outline-ctp-latte-pink outline-1 shadow-ctp-mocha-pink m-[0.5rem] h-[3rem] active:shadow-lg border-1 text-black bg-ctp-mocha-pink",
    "input": "py-2 px-4 rounded-sm shadow-md focus:shadow-lg focus:shadow-ctp-frappe-sky shadow-ctp-mocha-sky py-2 px-4 border-1 border-pink-400 focus:border-pink-700 bg-pink-100 dark:bg-gray-700/50 dark:shadow-ctp-mocha-sky caret-pink dark:caret-ctp-mocha-sky m-[0.5rem] h-[3rem] focus:outline-1 focus:outline-blue-400",
    "label": "py-2 px-4",
    "viewerjs": "bg-ctp-mocha-base",
    "homefeaturelink": "bg-ctp-mocha-pink/50 border-ctp-mocha-pink/70 hover:border-ctp-mocha-pink/90 active:border-ctp-mocha-pink/100 active:bg-ctp-mocha-pink/60 dark:bg-ctp-mocha-crust/30 dark:border-ctp-mocha-crust/50 dark:hover:border-ctp-mocha-pink/70 dark:active:border-ctp-mocha-pink/100 dark:active:bg-ctp-mocha-crust/80",
    "homefeatureimg": "bg-ctp-mocha-pink/50 dark:bg-ctp-mocha-crust/50 p-[6px] border-rd-1",
    "codelangblock": "bg-white/90 border-1 border-ctp-mocha-sky/90 dark:(bg-ctp-mocha-base border-ctp-mocha-sky/50)",
    "sidebarLinks": "border-l-1 pl-[16px] border-rd-[2px] border-l-ctp-mocha-pink/50",
    "detailscustom": "bg-ctp-mocha-lavender/20 dark:bg-ctp-mocha-lavender/10",
    "customToggle": "bg-ctp-mocha-lavender/20 dark:bg-ctp-mocha-mantle border-rd-[5px] pr-[16px] mb-[1em] b-solid border-1 border-ctp-mocha-lavender/50 dark:border-ctp-mocha-surface1",
    "customSwitch": "border-1 b-solid border-ctp-mocha-lavender/50 active:border-ctp-mocha-lavender focus:border-ctp-mocha-lavender dark:border-ctp-mocha-surface1 border-rd-[11px]",
    "mySvg": "w-[350px] h-a",
    "customContainer": "border-1 bg-ctp-mocha-lavender/20 active:border-ctp-mocha-lavender focus:border-ctp-mocha-lavender text-ctp-latte-text border-ctp-mocha-lavender/50 text-ctp-latte-text dark:(bg-ctp-mocha-mantle border-ctp-mocha-lavender/50 text-ctp-mocha-text) p-[1em]",
    "customSelect": "border-1 border-solid rounded border-ctp-mocha-lavender/40 bg-white/50 text-ctp-latte-text dark:(bg-ctp-mocha-crust text-ctp-mocha-text) p-[0.5em]",
    "customButton": "shadow-none border-1 border-solid rounded border-ctp-mocha-lavender/40 bg-white/50 text-ctp-latte-text dark:(bg-ctp-mocha-crust text-ctp-mocha-text) p-[0.5em] active:(border-ctp-mocha-lavender) focus:(border-ctp-mocha-lavender) my-1 shadow-sm",
    "lavenderShadows": "shadow-sm shadow-ctp-mocha-lavender shadow-none active:(shadow-lg) focus:(shadow-lg)",
    "yiddishSerif": "ySerif rtl",
    "yiddishSans": "ySans rtl",
    "ctpGrad": "ctpGradLatte dark:ctpGradMocha",
    "crosshairLink": "hover:crosshair",
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
