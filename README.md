# Real-world Monorepo Example

This repo presents an example of a real-world monorepo application built with NX. This project use NX's React monorepo tutorial as a starting point, but then elaborates upon that foundation to provide a more realistic and comprehensive example.

Source code for the original React monorepo application tutorial from Nx docs:

- Tutorial: https://nx.dev/getting-started/tutorials/react-monorepo-tutorial#creating-a-new-react-monorepo

## What's inside?

This example contains two React applications and three shared libraries that started from the `react-monorepo` preset.

```
npx create-nx-workspace@latest myngapp --preset=react-monorepo
```

It contains

- two React application: `apps/microtech-store` and `apps/inventory`
- three local libraries: `libs/products`, `libs/orders` and `libs/shared/ui` to demo how to modularize a codebase
- uses [Nx module boundary rules](https://nx.dev/core-features/enforce-project-boundaries) to enforce architectural constraints

Follow through the tutorial linked above for more details.

## How to run it

Clone it locally, install all dependencies using `npm install`. You can then run commands Like

- `npx nx build` to build the React application
- `npx nx serve` to serve the app
- you can use `npx nx graph` to visualize the structure
