# Student Portfolio Learning Log

A dark, static Astro portfolio where a student developer shares projects and the learning notes behind them.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/student-portfolio run dev` — run the Astro portfolio locally
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Astro static site generation, Tailwind CSS
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Portfolio pages: `artifacts/student-portfolio/src/pages/`
- Shared layout components: `artifacts/student-portfolio/src/components/` and `src/layouts/`
- Portfolio theme: `artifacts/student-portfolio/src/styles/global.css`
- GitHub Pages workflow: `.github/workflows/deploy-student-portfolio.yml`

## Architecture decisions

- The portfolio is a separate static artifact from the shared API server.
- Astro uses static output and directory-formatted routes for GitHub Pages.
- The visual system limits neutrals to Tailwind zinc and reserves emerald/indigo for accents.

## Product

- Home page introduces the student developer and current learning focus.
- Projects page groups school assignments, hobby projects, and experiments.
- Journey page records progress and debugging lessons.

## User preferences

- Keep the UI simple, readable, maintainable, and dark by default.

## Gotchas

- GitHub Pages project sites should set `BASE_PATH` to `/<repository-name>/` during the build.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
