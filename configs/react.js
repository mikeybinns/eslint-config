import globals from "globals";
import babelParser from "@babel/eslint-parser";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

import { coreRules } from "../rules/core.js";
import { importRules } from "../rules/import.js";
import { reactRules } from "../rules/react.js";
import { jsxA11yRules } from "../rules/jsx-a11y.js";

export const unstable__reactConfig = [
  {
    files: ["**/*.{js?(x),ts?(x)}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.commonjs, ...globals.es6 },
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      reactHooks: reactHooksPlugin,
      jsxA11y: jsxA11yPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/ignore": ["node_modules", "\\.(css|md|svg|json)$"],
    },
    // NOTE: In general - we want to use prettier for the majority of stylistic
    // concerns.  However there are some "stylistic" eslint rules we use that should
    // not fail a PR since we can auto-fix them after merging to dev.  These rules
    // should be set to WARN.
    //
    // ERROR should be used for "functional" rules that indicate a problem in the
    // code, and these will cause a PR failure

    // IMPORTANT: Ensure that rules used here are compatible with
    // typescript-eslint. If they are not, we need to turn the rule off in our
    // overrides for ts/tsx.

    // To read the details for any rule, see https://eslint.org/docs/rules/[RULE-KEY]
    rules: { ...coreRules, ...importRules, ...reactRules, ...jsxA11yRules },
  },
];
