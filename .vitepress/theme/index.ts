import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import "virtual:group-icons.css";
import "victormono";
import "@infolektuell/noto-color-emoji";
import "./fonts.scss";
import "@catppuccin/vitepress/theme/mocha/sky.css";
// import "uno.css";
import "virtual:uno.css";
import "./custom.scss";
import { VPButton } from "vitepress/theme-without-fonts";
import LayoutBottom from "./components/LayoutBottom.vue";
import SpeechEasy from "./components/SpeechEasy.vue";
import CustomHeroImg from "./components/CustomHeroImg.vue";
import TextInput from "./components/TextInput.vue";
import { onDevToolsClientConnected, addCustomTab } from "@vue/devtools-api";
import UseSpeech from "./components/UseSpeech.vue";

// devtools stuff {{{
if (process.env.NODE_ENV === "development") {
  const SFC = /* vue */ `
    <template>
      <div class="h-full w-full flex flex-col items-center justify-center">
        <div>
          <a href="/__unocss">Inspector</a>
        </div>
        <div>
          <a href="/__unocss" target="_blank">Inspector 🆕</a>
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
      component("UseSpeech", UseSpeech).
      component("SpeechEasy", SpeechEasy);
  },
} satisfies Theme // eslint-disable-line stylistic/semi
