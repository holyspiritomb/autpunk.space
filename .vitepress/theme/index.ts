import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import "virtual:group-icons.css";
import "victormono";
import "@infolektuell/noto-color-emoji";
import "./fonts.scss";
import "@catppuccin/vitepress/theme/mocha/sky.css";
import "uno.css";
import "./custom.scss";
import { VPButton } from "vitepress/theme-without-fonts";
import LayoutBottom from "./components/LayoutBottom.vue";
import SpeechEasy from "./components/SpeechEasy.vue";
import CustomHeroImg from "./components/CustomHeroImg.vue";
import TextInput from "./components/TextInput.vue";
import { onDevToolsClientConnected, addCustomTab } from "@vue/devtools-api";
import eruda from "eruda";

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
        <div>
          <a href="/vitepress-default/components" target="_blank">Demo page</a>
        </div>
      </div>
    </template>
  `;
  const erudaOpts = {
    autoScale: true,
    defaults: {
      theme: "Night Owl",
      displaySize: 40,
      transparency: 0.9,
    },
  };

  onDevToolsClientConnected(() => {
    console.debug("devtools client connected");
    eruda.init(erudaOpts);
    eruda.position({ x: 300, y: 100 });
    const eConsole = eruda.get("console");
    eConsole.config.set("displayExtraInfo", true);
    eConsole.config.set("overrideConsole", true);
    eConsole.config.set("displayIfErr", true);
    console.log("eruda is a console for %s.", "mobile browsers");
    console.table([{ test: 1 }, { test: 2 }, { test2: 3 }], "test");
    console.error(new Error("eruda"));
    const snippets = eruda.get("snippets");
    snippets.add("enhuge", function () {
      eruda.scale(2);
    }, "Make eruda big");
    snippets.add("debiggerize", function () {
      eruda.scale(1);
    }, "Make eruda original size");
    snippets.add("Shut down eruda", function () {
      eruda.destroy();
    }, "Close eruda");
    snippets.add("Reset icon position", function () {
      eruda.position({ x: 300, y: 100 });
    }, "Yep");
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
      component("SpeechEasy", SpeechEasy);
  },
} satisfies Theme // eslint-disable-line stylistic/semi
