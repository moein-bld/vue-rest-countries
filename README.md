# Vue.JS App using REST API to display country data

**Features include:**
- Loading animiation before API request completes
- Colour theme switchter (Dark Mode)
- Search bar that automatically filters results
- Dropdown filter to again filter results
- Border country links to other countries
- A back button which is based on user history
- Use repositories pattern for call api
- Dockerize App

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

```sh
yarn
```

```sh
npm i
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

```sh
yarn dev
```

```sh
npm run dev
```

### Compile, Build a docker image, and run

# Install docker first if not installed - one time
```sh
brew install docker
```

# Run Docker if not running (macos)
open --background -a Docker

```sh
docker build -t my-app .
```

```sh
docker run -d -p 3000:3000 --env-file config/.env my-app
```

Open browser to: http://localhost:3000

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

```sh
yarn build
```

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```
