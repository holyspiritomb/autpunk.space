import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import "virtual:group-icons.css";
import "victormono";
import "@fontsource/zilla-slab/400.css"; // Specify weight
import "@fontsource/zilla-slab/600.css"; // Specify weight
import "inter-ui/inter.css";
import "inter-ui/inter-variable.css";
import "@infolektuell/noto-color-emoji";
import "@catppuccin/palette/css/catppuccin.css";
import "@catppuccin/vitepress/theme/mocha/sky.css";
import "viewerjs/dist/viewer.css";
// import "uno.css";
import "virtual:uno.css";
import "./fonts.scss";
import "./custom.scss";
import { VPButton } from "vitepress/theme-without-fonts";
// @ts-expect-error You always complain about my custom components, but they still work
import LayoutBottom from "./components/LayoutBottom.vue";
import CustomHeroImg from "./components/CustomHeroImg.vue";
import TextInput from "./components/TextInput.vue";
import { onDevToolsClientConnected, addCustomTab } from "@vue/devtools-api";
import MyBadge from "./components/MyBadge.vue";
import DarkBox from "./components/DarkBox.vue";
import useImageViewer from "vitepress-plugin-viewerjs";


// devtools stuff {{{
if (process.env.NODE_ENV === "development") {
  const SFC = /* vue */ `
    <template>
      <div class="h-full w-full flex flex-col items-center justify-center">
        <div>
          <a href="/__unocss">open in this window</a>
        </div>
        <div>
          <a href="/__unocss" target="_blank">open in 🆕 window</a>
        </div>
      </div>
    </template>
  `;
  const viteSFC = /* vue */ `
    <template>
      <div class="h-full w-full flex flex-col items-center justify-center">
        <div>
          <a href="/__inspect">Vite Inspect</a>
        </div>
        <div>
          <a href="/__inspect" target="_blank">Vite Inspect 🆕</a>
        </div>
      </div>
    </template>
  `;
  onDevToolsClientConnected(() => {
    console.debug("devtools client connected");
    addCustomTab({
      // unique identifier
      name: "unocss",
      // title to display in the tab
      title: "UnoCSS",
      // any icon from material design icons or a URL to an image
      icon: "/__unocss/favicon.svg",
      view: {
        type: "sfc",
        sfc: SFC,
      },
      category: "app",
    });
    addCustomTab({
      // unique identifier
      name: "vite-inspect-better",
      // title to display in the tab
      title: "Vite Inspect",
      // any icon from material design icons or a URL to an image
      icon: "https://vite.dev/logo.svg",
      view: {
        type: "sfc",
        sfc: viteSFC,
      },
      category: "app",
    });
  });
}
// }}}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "layout-bottom": () => h(LayoutBottom),
      "home-hero-image": () => h(CustomHeroImg),
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enhanceApp({ app, router, siteData }) {
    app.component("VPButton", VPButton).
      component("TextInput", TextInput).
      component("MyBadge", MyBadge).
      component("DarkBox", DarkBox);
  },
  setup() {
    useImageViewer({
      selector: ".vp-doc",   // container(s) to scan; every match gets its own viewer
      svg: true,             // also open inline <svg> (mermaid diagrams, etc.)
      viewer: {
        backdrop: true,
        button: true,
      },            // https://github.com/fengyuanchen/viewerjs#options
    });
  },
} satisfies Theme // eslint-disable-line stylistic/semi
