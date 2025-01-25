import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import type { PluginOption, UserConfig } from 'vite';
import { gitCommitHashPlugin } from "vite-plugin-git-commit-hash";
import Terminal, {LogsOutput} from 'vite-plugin-terminal';
import markdownFootnote from 'markdown-it-footnote';
import vueDevTools from 'vite-plugin-vue-devtools';
import { NodePackageImporter } from "sass-embedded";

var pluginArray: PluginOption;
var outDirVar: string;
var terminalOutputOpts: LogsOutput = ['terminal'];

if (process.env.GITHUBRUNNER === "push") {
  outDirVar = "../web/autpunk.space/public_html";
  pluginArray = [];
} else {
  // I know this is hacky okay
  if (process.env.ZSH === "/usr/share/oh-my-zsh") {
    outDirVar = "./dist";
    terminalOutputOpts.push("console");
  } else {
    outDirVar = "../web/autpunk.space/public_html";
  }
  pluginArray = [
    vueDevTools(),
  ];
}

const vitePlugins: PluginOption = [
  ...pluginArray,
  Terminal({
    console: 'terminal',
    output: terminalOutputOpts,
  }),
  gitCommitHashPlugin({
    isLongHash: true,
  }),
]

// pluginArray.concat(vitePlugins);

const viteOptions: UserConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        importers: [new NodePackageImporter()],
        additionalData: `@use 'sass:color';
        @use 'pkg:@rose-pine/palette/dist/css/rose-pine.css' as *;
        `
      },
      
    },
  },
  define: {
    BUILD_DATE: JSON.stringify(new Date().toUTCString()),
  },
  plugins: vitePlugins,
  resolve: {
    alias: [{
      find: /^~([^/])/, 
      replacement: "$1"
    }],
  }
}

// console.log(JSON.stringify({viteOptions}, null, 2));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Autpunk Space",
  // titleTemplate: 'Autpunk Dot Space',
  description: "An autism with personhood rambles about things, stuff and the difference between them.",
  head: [
    ['link', {rel: 'icon', href: '/rainbow_space.png'}]
  ],
  lang: 'en-US',
  lastUpdated: true,
  appearance: 'dark',
  srcDir: "./src",
  outDir: outDirVar,
  srcExclude: ["**/README.md", "**/LICENSE.md"],
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'rose-pine-moon'
    },
    typographer: true,
    linkify: true,
    config: (md) => {
      md.use(markdownFootnote)
      md.renderer.rules.footnote_block_open = () => (
        '<hr>\n' +
        '<h4 class="mt-3">Footnotes</h4>\n' +
        '<section class="footnotes">\n' +
        '<ol class="footnotes-list">\n'
      );
    },
  },
  sitemap: {
    hostname: "https://autpunk.space"
  },
  vite: viteOptions,
  themeConfig: { 
    // {{{
    logo: '/rainbow_space.png',
    externalLinkIcon: true,
    editLink: {
      pattern: "https://github.com/holyspiritomb/autpunk.space/edit/main/src/:path",
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Thought Fossils', link: '/thought-fossils' },
      { text: 'Unsorted Fragments', link: '/unsorted-fragments' },
      { text: 'Other People', link: '/other-people' },
      { text: 'Vitepress Resources', link: '/vitepress-default' }
    ],
    sidebar: generateSidebar({
      capitalizeFirst: true,
      collapsed: false,
      debugPrint: true,
      documentRootPath: "/src",
      excludeFilesByFrontmatterFieldName: "exclude" ,
      excludePattern: ["README", "LICENSE", "vitepress-default", "fragments.md"],
      includeEmptyFolder: false,
      // includeFolderIndexFile: true,
      includeRootIndexFile: true,
      sortMenusByFrontmatterOrder: true,
      useFolderLinkFromIndexFile: true,
      useFolderTitleFromIndexFile: true,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      manualSortFileNameByPriority: ["fragments.md"]
    }),
    socialLinks: [
      { icon: 'github', ariaLabel: 'source repository for this site', link: 'https://github.com/holyspiritomb/autpunk.space' },
      { icon: 'github', ariaLabel: 'my github profile', link: 'https://github.com/holyspiritomb' },
      { icon: 'gitlab', ariaLabel: 'my gitlab profile', link: 'https://gitlab.com/holyspiritomb' },
    ],

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: "long",
        timeStyle: 'medium'
      }
    },
    footer: {
      message: 'Released under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> license',
      copyright: 'Copyright © 2025-present Hezekiah Michael',
    } // }}}
  }
})
