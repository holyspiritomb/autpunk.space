import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Autpunk.Space",
  description: "A VitePress Site",
  srcDir: "./src",
  outDir: "../web/autpunk.space/public_html",
  srcExclude: ["**/README.md", "**/LICENSE.md"],
  markdown: {
    theme: 'catppuccin-mocha',
    linkify: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/holyspiritomb' }
    ],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: 'CC BY-NC-SA 4.0',
      copyright: 'Copyright © 2025-present Hezekiah Michael'
    }
  }
})
