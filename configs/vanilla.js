import globals from "globals";
import babelParser from "@babel/eslint-parser";
import importPlugin from "eslint-plugin-import";
import { coreRules } from "../rules/core.js";
import { importRules } from "../rules/import.js";

export const unstable__vanillaConfig = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.commonjs, ...globals.es6 },
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
    },
    plugins: { import: importPlugin },
    settings: {
      "import/ignore": ["node_modules", "\\.(css|md|svg|json)$"],
    },
    rules: { ...coreRules, ...importRules },
  },
];
