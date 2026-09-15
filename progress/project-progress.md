# Project progress

## 8 September 2026

Built v1 of the Manchester Apostolic Brethren Church static site.

- Stack: Next.js static export, TypeScript, Tailwind, Markdown content
- Pages: Home, Visit, Gatherings, About, The Gospel, Contact, Safeguarding, Privacy
- Design: leather hero and parchment body from the supplied mock
- Identity locked: Atherton assembly, “Gathered unto His Name”, Matthew 18:20 KJV
- Tests cover the content loader and, after `next build`, the `out/` HTML routes
- Blog folder reserved at `content/posts/`; not linked in the nav yet

Replace placeholders in `content/site.md` before a public launch (address, times, email, charity number).

## 8 September 2026 — UI photography

Raised the visual design using patterns from [St Paul’s](https://www.stpauls.co.uk/) and [The Methodist Church](https://www.methodist.org.uk/): photograph heroes, a welcome split with an image, a three-image strip, visit/gospel cards, and image-led gathering rows.

Photographs are stock (Pexels) in `public/images/`. Swap them for pictures of the Atherton hall and people when available.

## 8 September 2026 — GitHub Pages static export

Confirmed `output: 'export'` and `images.unoptimized`. Added `public/.nojekyll`, `/demo-site` `basePath` for CI, and a GitHub Actions Pages workflow. `npm run build` writes `out/` including `index.html`.

## 8 September 2026 — GitHub Pages image 404

Images used root paths (`/images/...`) which resolve to `github.io/images/...` instead of `github.io/demo-site/images/...`. `SiteImage` now prefixes with `NEXT_PUBLIC_BASE_PATH`.

## 9 September 2026 — Solid mock colours

Restored the supplied mock palette: solid burgundy `#3d1b11` and cream `#f5f3e7`. Removed photographic backgrounds and image strips so the hero and welcome match the original design.

## 15 September 2026 — Site copy and information architecture

Replaced Visit / Gatherings / About / The Gospel with the supplied pages: What we are, Services, Join us for fellowship, Our beginnings, and Contact us.

- Homepage: church name top-left at three-quarters width, Baskerville, menu icon top-right, Welcome centred
- Welcome, services times, fellowship, and beginnings copy taken from the supplied text
- Doctrine page states Open Brethren practice and Apostolic (not Nicene/Trinitarian) teaching
- Meeting times: Sunday 11:00 Breaking of Bread, 12:00 Sunday School and Word, 14:00 Bible Teaching; Thursday 20:00 Zoom prayer

## 15 September 2026 — Desktop navigation

The header no longer uses a right-aligned hamburger on desktop. Main links sit in an open, centred row. The menu icon remains for small screens only.

The homepage hero is now centred too (name, motto, Matthew 18.20 KJV), replacing the earlier left-aligned three-quarter-width block.
