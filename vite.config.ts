import { defineConfig } from "vite";
import { gitCommitHashPlugin } from "vite-plugin-git-commit-hash";
import Components from "unplugin-vue-components/vite";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { VueUseComponentsResolver } from "unplugin-vue-components/resolvers";
import UnoCSS from "unocss/vite";
import Terminal from "vite-plugin-terminal";
import vueDevTools from "vite-plugin-vue-devtools";
import { NodePackageImporter } from "sass-embedded";
import svgLoader from "vite-svg-loader";
import type { PluginOption } from "vite";
import type { LogsOutput } from "vite-plugin-terminal";
import postcssFilterFallback from "postcss-filter-fallback";
// import postCssUnoCSS from "@unocss/postcss";

// if (process.env.NODE_ENV === "development") {
//   console.debug("Vite env:\n", process.env);
// }

const devOnlyPlugins: PluginOption = process.env.NODE_ENV === "development" ? [vueDevTools()] : [];
const terminalOutputOpts: LogsOutput = process.env.NODE_ENV === "development" ? ["terminal", "console"] : ["terminal"];

const vitePlugins: PluginOption = [
  ...devOnlyPlugins,
  UnoCSS(),
  groupIconVitePlugin(),
  svgLoader(),
  Components({
    dirs: [".vitepress/theme/components"],
    extensions: ["vue", "md"],
    include: [/\.(vue|md)($|\?)/],
    dts: true,
    resolvers: [
      VueUseComponentsResolver(),
    ],
  }),
  Terminal({
    console: "terminal",
    output: terminalOutputOpts,
  }),
  gitCommitHashPlugin({
    isLongHash: true,
  }),
];

export default defineConfig({
  optimizeDeps: {
    exclude: [
      "vitepress",
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  css: {
    postcss: {
      plugins: [
        // postCssUnoCSS(),
        postcssFilterFallback({
          oldIE: false,
          svg: true,
          webkit: true,
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        importers: [new NodePackageImporter()],
      },
    },
    devSourcemap: true,
  },
  define: {
    BUILD_DATE: JSON.stringify(new Date().toUTCString()),
  },
  plugins: vitePlugins,
  resolve: {
    alias: [
      {
        find: /^~([^/])/, 
        replacement: "$1",
      },
    ],
  },
});
