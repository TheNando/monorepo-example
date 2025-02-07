# Frontend Challenge: PC Store Monorepo

[![monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=monorepo&color=blue)](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial#creating-a-new-react-monorepo)

Welcome to the frontend developer monorepo challenge! This repository contains a nearly complete frontend application built with NRWL's NX monorepo build system. Designed to resembles a real-world, enterprise-scalable, frontend stack, your task will be to complete a series of stories including adding features, fixing bugs, and writing tests for the existing applications. This challenge is meant to showcase your frontend development skills in a realistic scenario.

## What's included?

This repo contains two React applications and four libraries:

- React application:
  - `apps/inventory` - add new products to store inventory
  - `apps/microtech-store` - create order by adding products to a cart and checkout
- local libraries:
  - `libs/products` - import, add, edit, view products
  - `libs/orders` - add products to cart and checkout
  - `libs/shared/data` - shared app state, types, DB management, and utils
  - `libs/shared/ui` - common UI components

This repo also uses [Nx module boundary rules](https://nx.dev/core-features/enforce-project-boundaries) to enforce architectural constraints

## Tech stack

- [NX](https://nx.dev/) - monorepo management
- [Vite](https://vite.dev/) - build tool
- [TypeScript](https://www.typescriptlang.org/) - syntactic JavaScript superset adding static typing
- [React](https://react.dev/) - frontend web framework
- [React Router](https://reactrouter.com/) - routing library
- [Jotai](https://jotai.org/) - atomic app state management
- [TanStack Query](https://tanstack.com/query/latest) - async state management
- [idb](https://github.com/jakearchibald/idb) - promise-based IndexedDb wrapper
- [Tailwind](https://tailwindcss.com/) - CSS framework
- [Daisy UI](https://daisyui.com/) - Tailwind component library
- [Font Awesome](https://fontawesome.com/) - icon font library
- [Cypress](https://www.cypress.io/) - End-to-end and component testing framework
- [Testing Library](https://testing-library.com/) - Unit testing framework

## Getting started

Finally, check out the [Getting Started](https://github.com/TheNando/monorepo-example/wiki/Getting-started) wiki page to setup your local branch and access the development challenge stories.
