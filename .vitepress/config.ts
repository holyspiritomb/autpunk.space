import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Autpunk Dot Space",
  titleTemplate: 'Autpunk Dot Space',
  description: "A VitePress Site",
  head: [
    ['link', {rel: 'icon', href: '/vitepress-logo-mini.svg'}]
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
    logo: '/vitepress-logo-mini.svg',
    externalLinkIcon: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Unsorted Fragments', link: '/unsorted-fragments' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Unsorted Fragments',
        items: [
          { text: 'All', link: '/unsorted-fragments' },
          { text: '2021', link: '/unsorted-fragments/2021' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

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
      message: 'Released under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA 4.0</a> license',
      copyright: 'Copyright © 2025-present Hezekiah Michael'
    }
  }
})
