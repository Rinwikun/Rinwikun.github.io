# Student Portfolio Learning Log

An Astro portfolio for sharing student projects and the learning notes behind them.

## Local development

```bash
pnpm install
pnpm --filter @workspace/student-portfolio run dev
```

## GitHub Pages

The site is configured for static output. Set `SITE_URL` to the final Pages
origin and `BASE_PATH` to the repository path when the site is published from a
project repository (for example, `/student-portfolio/`), then run:

```bash
pnpm --filter @workspace/student-portfolio run build
```

The generated site is in `dist/public`.