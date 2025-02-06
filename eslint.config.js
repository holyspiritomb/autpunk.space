// @ts-check

import eslint from '@eslint/js';
import tseslint from "typescript-eslint";
import markdown from "@eslint/markdown";
import StylisticPlugin from '@stylistic/eslint-plugin';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  eslint.configs.recommended,
  // StylisticPlugin.configs['recommended-flat'],
  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ["**/*.ts"],
  })),
  {
    ignores: [
      ".vitepress/cache/",
      "LICENSE.md",
      "dist/",
      "src/public/",
    ],
  },
  {
    files: ["**/*.ts", "**/*.js"],
    // ...StylisticPlugin.configs['recommended-flat'],
    plugins: {
      stylistic: StylisticPlugin,
    },
    rules: {
      "stylistic/comma-dangle": [1, "always-multiline"],
      "stylistic/comma-spacing": ["error", { "before": false, "after": true }],
      "stylistic/indent": [1, 2, { "ignoreComments": true }],
      "stylistic/key-spacing": [1],
      "stylistic/no-tabs": 2,
      "stylistic/quotes": [1, "double", { "avoidEscape": true, "allowTemplateLiterals": "always" }],
      "stylistic/quote-props": [1, "as-needed", { "unnecessary": false }],
      "stylistic/semi": [2, "always", { "omitLastInOneLineBlock": true, "omitLastInOneLineClassBody": true }],
      "stylistic/semi-spacing": [1],
      "stylistic/no-extra-semi": [2],
      "stylistic/semi-style": [1],
      "stylistic/spaced-comment": [1, "always"],
      "stylistic/object-curly-spacing": [2, "always", { "arraysInObjects": false, "objectsInObjects": false }],
      "stylistic/array-bracket-spacing": [2, "never", { "arraysInArrays": false }],
    },
  },
  {
    files: ["src/**.md"],
    plugins: {
      markdown,
    },
    processor: "markdown/markdown",
    language: "markdown/commonmark",
    rules: {
      "no-irregular-whitespace": 0,
    },
  },
  {
    files: ["README.md"],
    plugins: {
      markdown,
    },
    processor: "markdown/markdown",
    language: "markdown/gfm",
  },
  {
    files: [".vitepress/config.ts"],
    rules: {
      "no-var": "off",
    },
  },
  {
    files: ["eslint.config.js"],
    plugins: {
      stylistic: StylisticPlugin,
    },
    rules: {
      "stylistic/indent": [2, 2, { "ignoreComments": true }],
      "stylistic/quotes": [0],
    },
  },
];
