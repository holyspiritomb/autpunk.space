// @ts-check

import tseslint from "typescript-eslint";
import markdown from "@eslint/markdown";
import StylisticPlugin from '@stylistic/eslint-plugin';
import globals from 'globals';
import eslint from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import vueParser from "vue-eslint-parser";
import unocss from '@unocss/eslint-config/flat';

const tsParser = tseslint.parser;
/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  unocss,
  eslint.configs.recommended,
  // StylisticPlugin.configs['recommended-flat'],
  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ["**/*.ts"],
  })),
  ...pluginVue.configs['flat/recommended'].map(config => ({
    ...config,
    files: ["**/*.vue", ".vitepress/**/*.vue"],
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
      "stylistic/comma-spacing": [1, { "before": false, "after": true }],
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
      "stylistic/object-curly-spacing": [1, "always", { "arraysInObjects": false, "objectsInObjects": false }],
      "stylistic/array-bracket-spacing": [1, "never", { "arraysInArrays": false }],
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
    files: ["eslint.config.js"],
    plugins: {
      stylistic: StylisticPlugin,
    },
    rules: {
      "stylistic/indent": [2, 2, { "ignoreComments": true }],
      "stylistic/quotes": [0],
    },
  },
  {
    files: ["*.vue", "**/*.vue", ".vitepress/**/*.vue"],
    languageOptions: {
      parser: vueParser,
      sourceType: "module",
      parserOptions: {
        parser: {
          "js": "espree",
          "ts": tsParser,
          "<template>": "espree",
        },
      },
    },
    rules: {
      "stylistic/indent": 0,
      "vue/script-indent": [1, 2],
      "vue/html-indent": [1, 2],
      "vue/singleline-html-element-content-newline": 0,
      "vue/no-v-html": 0,
      "vue/html-self-closing": 0,
    },
  },
];
