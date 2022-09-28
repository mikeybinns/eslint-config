const OFF = 0;
const WARN = 1;
const ERROR = 2;

export const typescriptRules = {
  "no-dupe-class-members": OFF,
  "no-undef": OFF,

  // Add TypeScript specific rules (and turn off ESLint equivalents)
  "typescript/consistent-type-assertions": WARN,
  "typescript/consistent-type-imports": WARN,

  "no-array-constructor": OFF,
  "typescript/no-array-constructor": WARN,

  // There is a bug w/ typescript/no-duplicate-imports triggered
  // by multiple imports inside of module declarations. We should reenable
  // this rule when the bug is fixed.
  // https://github.com/typescript-eslint/typescript-eslint/issues/3071
  "no-duplicate-imports": OFF,
  // "typescript/no-duplicate-imports": WARN,

  "no-redeclare": OFF,
  "typescript/no-redeclare": ERROR,
  "no-use-before-define": OFF,
  "typescript/no-use-before-define": [
    WARN,
    {
      functions: false,
      classes: false,
      variables: false,
      typedefs: false,
    },
  ],
  "no-unused-expressions": OFF,
  "typescript/no-unused-expressions": [
    WARN,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  "no-unused-vars": OFF,
  "typescript/no-unused-vars": [
    WARN,
    {
      args: "none",
      ignoreRestSiblings: true,
    },
  ],
  "no-useless-constructor": OFF,
  "typescript/no-useless-constructor": WARN,
};

export const typescriptJSXRules = {
  // Routes may use default exports without a name. At the route level
  // identifying components for debugging purposes is less of an issue, as
  // the route boundary is more easily identifiable.
  "react/display-name": OFF,
};
