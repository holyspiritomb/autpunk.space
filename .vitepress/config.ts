import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import MarkdownItLabel from "@sirenia/markdown-it-label";
import markdownItAttrs from "markdown-it-attrs";
import markdownFootnote from "markdown-it-footnote";
import { gitCommitHashPlugin } from "vite-plugin-git-commit-hash";
import Terminal from "vite-plugin-terminal";
import vueDevTools from "vite-plugin-vue-devtools";
import { NodePackageImporter } from "sass-embedded";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import { VueUseComponentsResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import UnoCSS from "unocss/vite";

import type { PluginOption, UserConfig } from "vite";
import type { LogsOutput } from "vite-plugin-terminal";

const extraPlugins: PluginOption = process.env.GITHUBRUNNER === "push" ? [] : [vueDevTools()];
const terminalOutputOpts: LogsOutput = process.env.GITHUBRUNNER === "push" ? ["terminal"]
  : process.env.ZSH === "/usr/share/oh-my-zsh" ? ["terminal", "console"]
    : ["terminal"];
const distDir: string = process.env.GITHUBRUNNER === "push" ? "../web/autpunk.space/public_html"
  : process.env.ZSH === "/usr/share/oh-my-zsh" ? "./dist"
    : "../web/autpunk.space/public_html";

const vitePlugins: PluginOption = [
  ...extraPlugins,
  groupIconVitePlugin(),
  UnoCSS(),
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

const viteOptions: UserConfig = {
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
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: viteOptions,
  title: "Autpunk Space",
  base: "/",
  // titleTemplate: 'Autpunk Dot Space',
  description: "An autism with personhood rambles about things, stuff and the difference between them.",
  head: [
    ["link", { rel: "icon", href: "/rainbow_space.png" }],
  ],
  ignoreDeadLinks: true,
  lang: "en-US",
  lastUpdated: true,
  appearance: "dark",
  srcDir: "./src",
  outDir: distDir,
  srcExclude: ["**/README.md", "**/LICENSE.md"],
  markdown: {
    // {{{
    theme: {
      light: "snazzy-light",
      dark: "poimandres",
    },
    typographer: true,
    linkify: true,
    config: (md) => {
      md.use(markdownFootnote);
      md.use(markdownItAttrs);
      md.use(groupIconMdPlugin);
      md.use(MarkdownItLabel, {
        cssClassLabel: "mdi-label",
        cssClassTextLight: "mdi-label-text-light",
        cssClassTextDark: "mdi-label-text-dark",
      });
      md.renderer.rules.footnote_block_open = () => (
        /* eslint-disable stylistic/quotes */
        '<hr>\n' +
        '<h4 class="mt-3">Footnotes</h4>\n' +
        '<section class="footnotes">\n' +
        '<ol class="footnotes-list">\n'
        /* eslint-enable stylistic/quotes */
      );
    }, // }}}
  },
  sitemap: {
    hostname: "https://autpunk.space",
  },

  themeConfig: { 
    logo: "/rainbow_space.png", // TODO: add sizes
    externalLinkIcon: true,
    editLink: {
      text: "Edit",
      pattern: "https://github.com/holyspiritomb/autpunk.space/edit/main/src/:path",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects" },
      { text: "Thought Fossils", link: "/thought-fossils" },
      { text: "Unsorted Fragments", link: "/unsorted-fragments" },
      // { text: "Other People", link: "/other-people" },
      // { text: "Vitepress Resources", link: "/vitepress-default" },
    ],
    search: {
      // {{{
      provider: "local",
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          },
        },
      }, // }}}
    },
    sidebar: generateSidebar({ 
      capitalizeFirst: true, // {{{
      collapsed: true,
      // debugPrint: true,
      documentRootPath: "/src",
      excludeFilesByFrontmatterFieldName: "exclude",
      excludePattern: ["README", "LICENSE", "vitepress-default", "fragments.md"],
      includeEmptyFolder: false,
      // includeFolderIndexFile: true,
      includeRootIndexFile: true,
      sortMenusByFrontmatterOrder: true,
      useFolderLinkFromIndexFile: true,
      useFolderTitleFromIndexFile: true,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      manualSortFileNameByPriority: ["fragments.md"], // }}}
    }),
    socialLinks: [
      { icon: "vitepress", ariaLabel: "source repository for this site", link: "https://github.com/holyspiritomb/autpunk.space" },
      { icon: "github", ariaLabel: "my github profile", link: "https://github.com/holyspiritomb" },
      { icon: "gitlab", ariaLabel: "my gitlab profile", link: "https://gitlab.com/holyspiritomb" },
      { icon: "bluesky", ariaLabel: "my bluesky", link: "https://bsky.app/profile/spiritomb.bsky.social" },
    ],

    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "long",
        timeStyle: "medium",
      },
    },
    footer: {
      message: 'Released under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> license',
      copyright: "Copyright © 2025-present Hezekiah Michael",
    },
  },
});
