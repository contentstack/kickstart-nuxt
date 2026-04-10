# Contentstack Kickstart: Nuxt – Agent guide

**Universal entry point** for contributors and AI agents. Detailed conventions live in **`skills/*/SKILL.md`**.

## What this repo is

| Field | Detail |
| --- | --- |
| **Name:** | https://github.com/contentstack/kickstart-nuxt |
| **Purpose:** | Minimal Nuxt application that connects to Contentstack: Delivery SDK setup, live preview, and visual builder–friendly bindings. |
| **Out of scope (if any):** | Not a published npm SDK; no standalone HTTP API beyond the Nuxt app. |

## Tech stack (at a glance)

| Area | Details |
| --- | --- |
| Language | TypeScript (Vue SFCs with `lang="ts"`), Node.js for tooling |
| Build | npm; Nuxt 4 (`nuxt`); key files `nuxt.config.ts`, `package.json`, `tsconfig.json` |
| Tests | No automated test runner or test directories in this repo |
| Lint / coverage | Not configured in `package.json` |
| Runtime / CMS | Nuxt 4, Vue 3, Tailwind (`@nuxtjs/tailwindcss`); Contentstack Delivery SDK and Live Preview utils |

## Commands (quick reference)

| Command Type | Command |
| --- | --- |
| Install | `npm install` (runs `nuxt prepare` via `postinstall`) |
| Build | `npm run build` |
| Dev | `npm run dev` |
| Static generate | `npm run generate` |
| Preview production build | `npm run preview` |

**CI (security / automation):** `.github/workflows/policy-scan.yml`, `.github/workflows/sca-scan.yml`, `.github/workflows/issues-jira.yml` — there is no dedicated build/test workflow.

## Where the documentation lives: skills

| Skill | Path | What it covers |
| --- | --- | --- |
| Dev workflow | `skills/dev-workflow/SKILL.md` | npm scripts, CI workflows, local checks, contributor expectations |
| Nuxt framework | `skills/framework/SKILL.md` | Nuxt config, modules, `app/` layout, TypeScript project setup |
| Contentstack + Nuxt | `skills/contentstack-nuxt/SKILL.md` | Env vars, SDK plugin, composables, live preview, stack seeding |
| Testing | `skills/testing/SKILL.md` | Manual verification; no automated suite in repo; secrets policy |
| Code review | `skills/code-review/SKILL.md` | PR checklist for this kickstart |

Quick links to those files: [skills/README.md](skills/README.md).

## Using Cursor (optional)

If you use **Cursor**, `.cursor/rules/README.md` only points to **`AGENTS.md`** — same docs as everyone else.
