import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import "virtual:group-icons.css";
import "victormono";
import "@infolektuell/noto-color-emoji";
import "./fonts.scss";
import "@catppuccin/vitepress/theme/mocha/red.css";
import "./custom.scss";
/* @ts-expect-error vitepress understands this import */
import LayoutBottom from "./components/LayoutBottom.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "layout-bottom": () => h(LayoutBottom),
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme // eslint-disable-line stylistic/semi
