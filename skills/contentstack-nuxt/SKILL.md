---
name: contentstack-nuxt
description: Use when wiring Contentstack tokens, region/endpoints, the Delivery SDK plugin, composable queries, or live preview in this Nuxt kickstart.
---

# Contentstack + Nuxt – Contentstack Kickstart: Nuxt

## When to use

- Setting or changing Contentstack-related environment variables
- Initializing or modifying the stack / live preview setup
- Fetching content or adjusting the `page` content type query
- Updating TypeScript models for Contentstack entries in `types.ts`

## Instructions

### Environment variables

- Template: `.env.example`. Keys use the `NUXT_CONTENTSTACK_*` prefix and map into `runtimeConfig.public` in `nuxt.config.ts` (`apiKey`, `deliveryToken`, `previewToken`, `environment`, `preview`, `region`, plus optional endpoint overrides).
- Optional: `NUXT_CONTENTSTACK_CONTENT_DELIVERY`, `NUXT_CONTENTSTACK_PREVIEW_HOST`, `NUXT_CONTENTSTACK_CONTENT_APPLICATION` for non-default endpoints (internal testing).

### Region and endpoints

- `nuxt.config.ts` uses `getRegionForString` and `getContentstackEndpoints` from `@timbenniks/contentstack-endpoints` to derive delivery/preview/application hosts when env overrides are absent.

### SDK and live preview (plugin)

- `app/plugins/contentstack.ts` builds the stack with `@contentstack/delivery-sdk`, enables `live_preview` when `preview` is true, and on the client initializes `@contentstack/live-preview-utils` (builder mode, edit button).
- Injected on the Nuxt app: `stack`, `preview`, `ContentstackLivePreview` (access via `useNuxtApp().$stack`, etc.).

### Fetching pages

- `app/composables/useGetPage.ts` queries content type `page` with `where("url", QueryOperation.EQUALS, url)`, uses `useAsyncData` with a key `page-${url}`, applies `livePreviewQuery` from the route when preview is on and `live_preview` appears in the query, and calls `contentstack.Utils.addEditableTags` for preview tagging when enabled.

### Root UI and preview refresh

- `app/app.vue` calls `useGetPage("/")`, imports live-preview helpers, and on mount calls `livePreview.onEntryChange(refresh)` when preview mode is active.

### Types

- Shared entry shapes: `types.ts` (`Page`, blocks, `File`, etc.). Keep these aligned with your stack’s content types.

### Stack setup (humans)

- README describes Contentstack CLI login, seeding `contentstack/kickstart-stack-seed`, creating delivery/preview tokens, and enabling Live Preview for the preview environment.
