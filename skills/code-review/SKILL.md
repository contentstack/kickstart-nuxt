---
name: code-review
description: Use when reviewing or polishing a pull request against security, Contentstack wiring, and kickstart scope.
---

# Code review – Contentstack Kickstart: Nuxt

## When to use

- Acting as reviewer or author doing a final pass before merge
- Checking compliance with org workflows (policy/SCA) and CODEOWNERS expectations

## Instructions

### Scope and clarity

- Keep the kickstart **minimal**; avoid unrelated refactors or new dependencies unless required for the fix or feature.
- Prefer changes that match existing patterns in `app/` and `nuxt.config.ts`.

### Contentstack and config

- Env vars in `nuxt.config.ts` `runtimeConfig.public` must stay consistent with `.env.example` and README instructions.
- Plugin and composable changes should preserve live preview: query handling, `addEditableTags`, and `onEntryChange(refresh)` behavior unless intentionally redesigned.

### Security

- No secrets, tokens, or internal URLs in committed files.
- Dependency changes will surface in SCA workflows; justify version bumps.
- License/year and `SECURITY.md` expectations are enforced for public repos (see policy workflow).

### Quality bar (no automated gate)

- There is no CI build or test job; reviewers rely on author verification and spot checks (`npm install` / `npm run build` locally if the change touches build paths).
