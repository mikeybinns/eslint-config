import globals from "globals";

import { testingLibraryRules } from "../rules/testing-library.js";

export const unstable__testingLibraryConfig = {
  files: ["**/__tests__/**/*", "**/*.{spec,test}.*"],
  languageOptions: {
    globals: { ...globals.jest },
  },
  rules: testingLibraryRules,
};
