export const unstable__remixConfig = [
  {
    files: ["**/*.{js?(x),ts?(x)}"],
    settings: {
      react: {
        version: "detect",
        formComponents: ["Form"],
        linkComponents: [
          {
            name: "Link",
            linkAttribute: "to",
          },
          {
            name: "NavLink",
            linkAttribute: "to",
          },
        ],
      },
    },
  },
];
