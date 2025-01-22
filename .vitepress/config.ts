import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import type { PluginOption } from 'vite';
import Terminal from 'vite-plugin-terminal';
import markdownFootnote from 'markdown-it-footnote';

var pluginArray: PluginOption;
var outDirVar: string;

if (process.env.GITHUBRUNNER === "push") {
  outDirVar = "../web/autpunk.space/public_html";
  pluginArray = [
    Terminal({
      console: 'terminal',
      output: ['terminal'],
    }),
  ]
} else {
  // I know this is hacky okay
  if (process.env.ZSH === "/usr/share/oh-my-zsh") {
    outDirVar = "./dist";
  } else {
    outDirVar = "../web/autpunk.space/public_html";
  }
  pluginArray = [
    Terminal({
      console: 'terminal',
      output: ['terminal', 'console'],
    }),
  ];
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Autpunk Dot Space",
  titleTemplate: 'Autpunk Dot Space',
  description: "idk what i'm doing",
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
      dark: 'rose-pine'
    },
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
  vite: {
    css: {
      preprocessorOptions: {
        sass: {api: "modern-compiler"},
        scss: {api: "modern-compiler"},
      }
    },
    plugins: pluginArray,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/rainbow_space.png',
    externalLinkIcon: true,
    editLink: {
      pattern: "https://github.com/holyspiritomb/autpunk.space/edit/main/src/:path",
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Thought Fossils', link: '/thought-fossils' },
      { text: 'Unsorted Fragments', link: '/unsorted-fragments' },
      { text: 'Other People', link: '/other-people' },
      { text: 'Vitepress Cheatsheet', link: '/vitepress-default' }
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
      text: 'Last updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: 'Released under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> license',
      copyright: 'Copyright © 2025-present Hezekiah Michael'
    }
  }
})
