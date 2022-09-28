import globals from "globals";
import nodePlugin from "eslint-plugin-node";

export const unstable__nodeConfig = [
  {
    plugins: [nodePlugin],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
