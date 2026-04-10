---
name: framework
description: Use when changing Nuxt configuration, modules, the app directory layout, or TypeScript setup for this kickstart.
---

# Nuxt framework – Contentstack Kickstart: Nuxt

## When to use

- Editing `nuxt.config.ts` or adding Nuxt modules
- Adding or reorganizing files under `app/`
- Adjusting TypeScript configuration for the Nuxt app or server context

## Instructions

### Configuration

- Main config: `nuxt.config.ts`.
- `compatibilityDate` and `devtools` are set there; public runtime config for Contentstack-related keys lives under `runtimeConfig.public`.
- Registered module in config: `@nuxtjs/tailwindcss` (Tailwind CSS for Vue/Nuxt).

### App directory

- Root Vue app: `app/app.vue`.
- Plugins: `app/plugins/` (e.g. `contentstack.ts` is auto-registered by Nuxt’s plugin discovery).
- Composables: `app/composables/` (e.g. `useGetPage.ts`).

### TypeScript

- Root TS config: `tsconfig.json` extends `./.nuxt/tsconfig.json` (generated after `nuxt prepare`).
- Server TS: `server/tsconfig.json` extends `../.nuxt/tsconfig.server.json`.

### Dependencies worth knowing

- `package.json` lists `nuxt`, `vue`, `vue-router`, `@nuxtjs/tailwindcss`, `@nuxt/image`, and Contentstack-related packages.
