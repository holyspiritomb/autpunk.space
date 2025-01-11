import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Autpunk Dot Space",
  titleTemplate: 'Autpunk Dot Space',
  description: "A VitePress Site",
  head: [
    ['link', {rel: 'icon', href: '/rainbow_space.png'}]
  ],
  lang: 'en-US',
  lastUpdated: true,
  appearance: 'dark',
  srcDir: "./src",
  outDir: "../web/autpunk.space/public_html",
  srcExclude: ["**/README.md", "**/LICENSE.md"],
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha'
    },
    linkify: true,
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
