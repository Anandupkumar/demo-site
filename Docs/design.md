# Design

The visual system follows the supplied mobile mock: leather hero, parchment body, serif type, scripture-led tone.

## Tokens

| Token | Use |
|---|---|
| `--leather` `#2c1810` | Hero, header (inner pages), footer |
| `--parchment` `#f4efe4` | Page background |
| `--ink` `#2a1f18` | Headings and body |
| `--gold` `#c4a574` | Motto lines, ornaments, active nav |

Fonts: Cinzel (headings, small-caps) and Source Serif 4 (body).

## Tone of voice

- Formal, warm, short
- Keep the welcome copy from the mock unchanged
- Quote the KJV where Scripture is cited
- Do not write as a megachurch or cathedral
- Leadership is local brethren, not a branded pastor

## Layout

- Home: full-viewport leather wordmark over a photograph, then parchment welcome with a photo, image strip, and visit/gospel cards
- Inner pages: photograph title band with a leather overlay, then parchment article with supporting images
- Top nav: Home, Visit, Gatherings, About, Contact
- Footer: photo strip, columns, The Gospel, Safeguarding, Privacy, address, Matthew 18:20
- Photographs live in `public/images/` and are listed in `lib/media.ts`. Current files are stock from Pexels; replace with pictures of the Atherton hall and people when they are available.
