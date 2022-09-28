// const OFF = 0;
const WARN = 1;
// const ERROR = 2;

export const jsxA11yRules = {
  "jsxA11y/alt-text": WARN,
  "jsxA11y/anchor-has-content": [WARN, { components: ["Link", "NavLink"] }],
  "jsxA11y/anchor-is-valid": [WARN, { aspects: ["noHref", "invalidHref"] }],
  "jsxA11y/aria-activedescendant-has-tabindex": WARN,
  "jsxA11y/aria-props": WARN,
  "jsxA11y/aria-proptypes": WARN,
  "jsxA11y/aria-role": [WARN, { ignoreNonDOM: true }],
  "jsxA11y/aria-unsupported-elements": WARN,
  "jsxA11y/iframe-has-title": WARN,
  "jsxA11y/img-redundant-alt": WARN,
  "jsxA11y/lang": WARN,
  "jsxA11y/no-access-key": WARN,
  "jsxA11y/no-redundant-roles": WARN,
  "jsxA11y/role-has-required-aria-props": WARN,
  "jsxA11y/role-supports-aria-props": WARN,
};
