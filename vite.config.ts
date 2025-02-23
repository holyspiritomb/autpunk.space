import { defineConfig } from "vite";
import { gitCommitHashPlugin } from "vite-plugin-git-commit-hash";
import Components from "unplugin-vue-components/vite";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";
import Icons from "unplugin-icons/vite";
import { VueUseComponentsResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import UnoCSS from "unocss/vite";
import Terminal from "vite-plugin-terminal";
import vueDevTools from "vite-plugin-vue-devtools";
import { NodePackageImporter } from "sass-embedded";
import svgLoader from "vite-svg-loader";
import type { PluginOption } from "vite";
import type { LogsOutput } from "vite-plugin-terminal";
import tsConfigPaths from "vite-tsconfig-paths";

// if (process.env.NODE_ENV === "development") {
//   console.debug("Vite env:\n", process.env);
// }

const devOnlyPlugins: PluginOption = process.env.NODE_ENV === "development" ? [vueDevTools()] : [];
const terminalOutputOpts: LogsOutput = process.env.NODE_ENV === "development" ? ["terminal", "console"] : ["terminal"];

const vitePlugins: PluginOption = [
  ...devOnlyPlugins,
  tsConfigPaths(),
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
      IconsResolver(),
    ],
  }),
  Icons(),
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
