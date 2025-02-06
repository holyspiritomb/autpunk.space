// import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme-without-fonts';
import 'virtual:group-icons.css';
// import './style.css';
import 'victormono';
import "@infolektuell/noto-color-emoji";
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
