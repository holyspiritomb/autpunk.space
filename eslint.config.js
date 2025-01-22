import eslint from '@eslint/js';
import tseslint from "typescript-eslint";
import markdown from "eslint-plugin-markdown";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...markdown.configs.recommended,
  {
    ignores: [
      ".vitepress/cache/",
      ".vitepress/dist/",
    ],
  },
  {
    plugins: {
      markdown
    }
  },
  {
    files: ["src/**/*.md"],
    processor: "markdown/markdown",
  },
  {
    files: [".vitepress/config.ts"],
    rules: {
      "no-var": "off",
    }
  }
];
