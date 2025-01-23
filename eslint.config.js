// @ts-check

import eslint from '@eslint/js';
import tseslint from "typescript-eslint";
import markdown from "@eslint/markdown";

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended.map(config => ({
		...config,
		files: ["**/*.ts"],
	})),
  {
    ignores: [
      ".vitepress/cache/",
      "LICENSE.md",
      "dist/",
      "src/public/"
    ],
  },
  {
    files: ["src/**.md"],
    plugins: {
      markdown
    },
    processor: "markdown/markdown",
    language: "markdown/commonmark",
    rules: {
      "no-irregular-whitespace": 0,
    }
  },
  {
    files: ["README.md"],
    plugins: {
      markdown
    },
    processor: "markdown/markdown",
    language: "markdown/gfm",
  },
  {
    files: [".vitepress/config.ts"],
    rules: {
      "no-var": "off",
    }
  }
];
