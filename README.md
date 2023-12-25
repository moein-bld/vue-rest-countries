# REST Countries API with color theme switcher

This is a solution to the [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) challenge on [Frontend Mentor](https://www.frontendmentor.io). The challenge was to integrate with the [REST Countries API](https://restcountries.com/v2/) to pull country data and display it like in the designs. This project was built to practice Vue.js and GitHub flow.

Live Site URL: https://vue3-rest-countries-api.vercel.app/

**Features include:**

-   Loading animiation before API request completes
-   Colour theme switchter (Dark Mode)
-   Search bar that automatically filters results
-   Dropdown filter to filter results by continent
-   Border country links to other countries
-   A back button which is based on user history
-   Repositories pattern for api
-   Dockerize App

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

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

### Type-Check, Compile and Minify for Production

```sh
pnpm build-check
```

```sh
yarn build-check
```

```sh
npm run build-check
```

### Compile, Build a docker image, and run

### Install docker first if not installed - one time

```sh
brew install docker
```

### Run Docker if not running (macos)

open --background -a Docker

```sh
docker build -t my-app .
```

```sh
docker run -d -p 3000:3000 --env-file config/.env my-app
```

Open browser to: http://localhost:3000


