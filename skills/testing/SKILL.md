---
name: testing
description: Use when verifying behavior manually, handling secrets, or documenting gaps—this repo has no automated test suite.
---

# Testing – Contentstack Kickstart: Nuxt

## When to use

- Confirming a change works end-to-end without unit or E2E tests in CI
- Ensuring credentials never land in git
- Deciding what to verify before opening a PR

## Instructions

### What exists today

- `package.json` has no `test` script and the repo has no `test/`, `__tests__/`, or Vitest/Jest config.
- Treat verification as **manual**: run `npm run dev`, exercise the home page and live preview from Contentstack as described in the root `README.md`.

### Secrets and environment

- Use a local `.env` (not committed); start from `.env.example`.
- Never commit API keys, delivery tokens, or preview tokens. Talisman or org hooks may apply where your team enables them.

### Suggested manual checklist

- App boots with valid env vars.
- Page content loads for `/` from the seeded `page` entry.
- With preview enabled and Live Preview in the stack, in-app updates still refresh when content changes (if you touch preview-related code).

### Future automation

- Adding Vitest, Playwright, or similar is out of scope for the skills rollout; if you introduce tests, document scripts and layout here in a follow-up change.
