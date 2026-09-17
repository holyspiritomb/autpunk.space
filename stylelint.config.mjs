/** @type {import('stylelint').Config} */
export default {
  plugins: [
    "stylelint-use-nesting"
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "@stylistic/stylelint-config"
  ],
  rules:{
    "@stylistic/indentation": [2, {baseIndentLevel: 0, indentClosingBrace: false}],
    "@stylistic/max-line-length": null,
    "alpha-value-notation": "number",
    "csstools/use-nesting": ["always", {"syntax": "scss"}],
    "custom-property-pattern": null,
    "font-family-no-missing-generic-family-keyword": null,
    "selector-class-pattern": null,
    "value-no-vendor-prefix": null,
  }
};
