// https://vitepress.dev/guide/custom-theme
// import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme-without-fonts';
// import './style.css';
import 'victormono';
import './fonts.scss';
import "@catppuccin/vitepress/theme/mocha/red.css";
import './rosepine.scss';
import LayoutBottom from './LayoutBottom.vue'

export default {
  
  extends: DefaultTheme,
  Layout: LayoutBottom,
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
