---
name: dev-workflow
description: Use when installing dependencies, running the app, or aligning with CI and PR expectations for this kickstart.
---

# Dev workflow – Contentstack Kickstart: Nuxt

## When to use

- Setting up or refreshing a local workspace
- Verifying what runs in GitHub Actions on pull requests
- Preparing changes for review

## Instructions

### Commands

- Install: `npm install` — `postinstall` runs `nuxt prepare` (Nuxt codegen).
- Local dev: `npm run dev` (default Nuxt dev server, typically http://localhost:3000).
- Production build: `npm run build`; preview that build: `npm run preview`.
- Static output: `npm run generate`.

### Optional type check

- There is no `typecheck` script in `package.json`. You may run `npx nuxi typecheck` locally after `npm install` if you want a one-off TS check.

### CI (this repo)

- `.github/workflows/policy-scan.yml` — public-repo checks (e.g. `SECURITY.md`, license/year).
- `.github/workflows/sca-scan.yml` — dependency / SCA (Snyk + org policy action).
- `.github/workflows/issues-jira.yml` — issue automation.

There is no workflow that runs `npm run build` or tests; keep changes small and manually verifiable.

### Repository hygiene

- `.talismanrc` may be used where Talisman pre-commit hooks are enabled; do not commit secrets or live tokens.
- Security reporting: `SECURITY.md`.
- CODEOWNERS: `@contentstack/devex-pr-reviewers` for general paths; security paths list additional owners.

Branch naming and merge targets are not defined in-repo; follow your org’s defaults.
