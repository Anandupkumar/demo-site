# Manchester Apostolic Brethren Church

Static website for a local, independent Christian church in Atherton, Manchester.

## Scripts

```bash
npm run dev
npm test
npm run build
```

`npm run build` writes a static site to `out/`. Next.js generates `index.html` — do not create it by hand.

## GitHub Pages

Pushing `main` deploys `out/` via `.github/workflows/pages.yml`.

In the GitHub repo: **Settings → Pages → Source: GitHub Actions**.

The live URL will be `https://anandu-dooth.github.io/demo-site/`.

## Content

Edit Markdown in `content/`. Church name, motto, times, and address live in `content/site.md`. Page copy lives in `content/pages/`.

See `Docs/architecture.md` and `Docs/design.md`.
