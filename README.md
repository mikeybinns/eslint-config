# `@binns/eslint-config`

This package includes a shareable ESLint config for different types of projects.

## Installation

First, install this package along with ESLint in your project. **This package requires at least version 8.1 of ESLint**

```sh
npm install -D eslint @binns/eslint-config
```

Then create a file named `eslint.config.js` in the root of your project:

```js
import { vanillaConfig } from "@binns/eslint-config";

export default [...vanillaConfig];
```

OR

```js
import { reactConfig } from "@binns/eslint-config";

export default [...reactConfig];
```

### Additional configs

This packages also ships with optional configuration objects for projects that use the following:

- [Node](https://nodejs.org/en/). To use this config, import `nodeConfig`.
- [Remix](https://remix.run/). To use this config, import `remixConfig`. You must use the React base for this.
- [Typescript](https://www.typescriptlang.org/). To use this config, import `typescriptConfig`.
- [Jest](https://jestjs.io/) with [Testing Library](https://testing-library.com). To use this config, import `testingLibraryConfig`.

Then, include the configs by spreading the config into your own `eslint.config.js`, like so:

```js
import {
  reactConfig, // or vanillaConfig,
  nodeConfig,
  remixConfig,
  typescriptConfig,
  testingLibraryConfig,
} from "@binns/eslint-config";

export default [
  ...reactConfig, // or ...vanillaConfig,
  ...nodeConfig,
  ...remixConfig,
  ...typescriptConfig,
  ...testingLibraryConfig,
];
```
