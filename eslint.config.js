import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { globals: {...globals.browser, ...globals.node, ...globals.jest} },
    rules: { semi: "error" }
  },
  pluginJs.configs.recommended,
  {
    ignores: [
      'node_modules/',
      'coverage/',
      'dist/',
      '__tests__/'
    ]
  }
];