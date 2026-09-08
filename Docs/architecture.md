# Architecture

Static Next.js site for Manchester Apostolic Brethren Church. There is no server, database, or API.

## Stack

- Next.js App Router with `output: 'export'`
- TypeScript
- Tailwind CSS
- Markdown in `content/` parsed by `gray-matter`
- Host: any static host (Netlify, GitHub Pages, Cloudflare Pages)

`next build` writes HTML/CSS/JS to `out/`.

## Content model

| Path | Purpose |
|---|---|
| `content/site.md` | Name, motto, verse, address, meeting times |
| `content/pages/*.md` | About, visit, gatherings intro, gospel, contact, safeguarding, privacy |
| `content/gatherings/*.md` | Individual meeting types |
| `content/posts/` | Reserved for a future news/blog |

`lib/content.ts` is the only place that reads files. Pages render typed data. A later CMS should replace this loader, not the React pages.

## What static export cannot use

- Route handlers / Server Actions
- Next.js image optimization (images are `unoptimized`)
- Incremental Static Regeneration

Contact uses `mailto:` in the browser. Forms that must store messages can be pointed at Formspree later without changing the page layout.
