# Architecture

Static Next.js site for Manchester Apostolic Brethren Church. There is no server, database, or API.

## Stack

- Next.js App Router with `output: 'export'`
- TypeScript
- Tailwind CSS
- Markdown in `content/` parsed by `gray-matter`
- Host: any static host (Netlify, GitHub Pages, Cloudflare Pages)

`next build` writes HTML/CSS/JS to `out/`. GitHub Pages is configured in `.github/workflows/pages.yml`. CI sets `GITHUB_PAGES=true` so `basePath` is `/demo-site`. `public/.nojekyll` stops GitHub from hiding the `_next` folder.

Plain `<img>` tags do not get `basePath` automatically. `lib/asset.ts` prefixes public files; `SiteImage` uses it.

## Content model

| Path | Purpose |
|---|---|
| `content/site.md` | Name, motto, verse, welcome fields, meeting times |
| `content/pages/*.md` | What we are, services, join us, our beginnings, contact, safeguarding, privacy |
| `content/gatherings/*.md` | Optional longer notes for individual meeting types |
| `content/posts/` | Reserved for a future news/blog |

`lib/content.ts` is the only place that reads files. Pages render typed data. A later CMS should replace this loader, not the React pages.

## Public routes

Home, What we are, Services, Join us for fellowship, Our beginnings, Contact, Safeguarding, Privacy.

## What static export cannot use

- Route handlers / Server Actions
- Next.js image optimization (images are `unoptimized`)
- Incremental Static Regeneration

Contact uses `mailto:` in the browser. Forms that must store messages can be pointed at Formspree later without changing the page layout.
