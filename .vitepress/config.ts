import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import { groupIconMdPlugin } from "vitepress-plugin-group-icons";
import { fileURLToPath, URL } from "node:url";
import markdownItAttrs from "markdown-it-attrs";
import markdownFootnote from "markdown-it-footnote";
import markdownAbbr from "markdown-it-abbr";


// if (process.env.NODE_ENV === "development") {
//   console.debug("Vitepress env:\n", process.env);
// }

const distDir: string = process.env.GITHUBRUNNER === "push" ? "../web/autpunk.space/public_html"
  : process.env.ZSH === "/usr/share/oh-my-zsh" ? "./dist"
    : "../web/autpunk.space/public_html";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    resolve: {
      alias: [
        {
          find: /^~([^/])/, 
          replacement: "$1",
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL("/.vitepress/theme/components/LayoutBottom.vue", import.meta.url),
          ),
        },
      ],
    },
    build: {
      reportCompressedSize: true,
      dynamicImportVarsOptions: {
        include: ["pages/wordart/*.md"],
      },
      rollupOptions: {
        output: {
          minifyInternalExports: true,
        },
      },
    },
  },
  title: "Autpunk Space",
  base: "/",
  // titleTemplate: 'Autpunk Dot Space',
  description: "An autism with personhood. Stuff, things, and the difference between them.",
  head: [
    ["link", { rel: "icon", href: "/galaxy_heart.png" }],
    ["link", { rel: "me atproto", href: "https://spiritomb.bsky.social" }],
    ["link", { rel: "me", href: "https://github.com/holyspiritomb" }],
    ["meta", { name: "robots", content: "noai, noimageai" }],
    ["meta", { name: "theme-color", content: "#b4befe" }],
    ["meta", { property: "og:image", content: "https://autpunk.space/buttons/autpunk_space_checkers.png" }],
    ["script", { id: "check-pixel-preference", src: "/fonts/pixelPrefChecker.js", type: "text/javascript" }],
  ],
  ignoreDeadLinks: false,
  lang: "en-US",
  lastUpdated: true,
  appearance: "dark",
  srcDir: "./",
  outDir: distDir,
  metaChunk: true,
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
      md.use(markdownAbbr);
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
    logo: "/galaxy_heart.png", // TODO: add sizes
    externalLinkIcon: true,
    editLink: {
      text: "Edit",
      pattern: "https://github.com/holyspiritomb/autpunk.space/edit/main/:path",
    },
    nav: [
      // {{{
      { text: "Home", link: "/" },
      { text: "About", link: "/pages/about/" },
      { text: "Wordart", link: "/pages/wordart/" },
      { text: "Projects", link: "/pages/projects/" },
      { text: "Writing", link: "/pages/thought-fossils/" },
      { text: "Resources", link: "/pages/resources/" },
      { text: "Links", link: "/pages/other-people/" },
      // }}}
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
      capitalizeFirst: false, // {{{
      collapsed: true,
      // debugPrint: true,
      documentRootPath: "./",
      scanStartPath: "/pages/",
      excludeFilesByFrontmatterFieldName: "exclude",
      excludePattern: ["README", "LICENSE", "LICENSE.md", "README.md", "vitepress-default", "fragments.md", "dist", "public", "node_modules", "AGENTS.md", "AAA-NO-SLOP.md"],
      includeEmptyFolder: false,
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
      { icon: "codeberg", ariaLabel: "my codeberg profile", link: "https://codeberg.org/holyspiritomb" },
      { icon: "gitlab", ariaLabel: "my gitlab profile", link: "https://gitlab.com/holyspiritomb" },
      { icon: "archlinux", ariaLabel: "my arch user repository packages", link: "https://aur.archlinux.org/packages?SeB=m&K=spiritomb" },
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
