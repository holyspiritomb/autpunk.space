import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import { groupIconMdPlugin } from "vitepress-plugin-group-icons";
// import MarkdownItLabel from "@sirenia/markdown-it-label";
import markdownItAttrs from "markdown-it-attrs";
import markdownFootnote from "markdown-it-footnote";


if (process.env.NODE_ENV === "development") {
  console.debug("Vitepress env:\n", process.env);
}

const distDir: string = process.env.GITHUBRUNNER === "push" ? "../web/autpunk.space/public_html"
  : process.env.ZSH === "/usr/share/oh-my-zsh" ? "./dist"
    : "../web/autpunk.space/public_html";

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
  srcDir: "./",
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
      // md.use(MarkdownItLabel, {
      //   cssClassLabel: "mdi-label",
      //   cssClassTextLight: "mdi-label-text-light",
      //   cssClassTextDark: "mdi-label-text-dark",
      // });
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
      pattern: "https://github.com/holyspiritomb/autpunk.space/edit/main/:path",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects" },
      { text: "Thought Fossils", link: "/thought-fossils" },
      { text: "Unsorted Fragments", link: "/unsorted-fragments" },
      // { text: "Other People", link: "/other-people" },
      { text: "Demo", link: "/vitepress-default/components" },
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
      debugPrint: true,
      documentRootPath: "./",
      excludeFilesByFrontmatterFieldName: "exclude",
      excludePattern: ["README", "LICENSE", "LICENSE.md", "README.md", "vitepress-default", "fragments.md", "dist", "public", "node_modules"],
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
