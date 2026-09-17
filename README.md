# Arcus Mons Bookkeeping Services — Website

A static marketing site whose single job is to get a prospective business owner to **pick
up the phone**. Colours, typography and logo carry over from the original Arcus Mons brand
system (`Arcus Mons AI Systems V1.5.pptx`); all copy is new and written for bookkeeping.

No build step, no framework, no dependencies. Open `index.html` in a browser and it works.

---

## 1. Live contact details

These are real values, already wired in across every page:

| | |
|---|---|
| Phone | **720-937-6463** — displayed as `720-937-6463`, linked as `tel:+17209376463` |
| Email | **arcusmons@gmail.com** |
| Hours | **Monday – Saturday, 8:30 a.m. – 6:00 p.m.** |
| Service area | **All 50 states** — remote, nationwide |
| Starting price | **$50 / month** |
| Governing law | **Utah** (`terms.html`) |

> **Keep the two phone formats in sync.** The display string and the `tel:` string are
> deliberately different: `+17209376463` is E.164 — no dashes, no spaces — and that is
> what makes the number tap-to-dial on a phone. If you change the number, change both,
> plus `+1-720-937-6463` in the structured-data block near the bottom of `index.html`.

**Hours appear in four places.** Change them together: the footer Contact column on
`index.html`, `privacy.html` and `terms.html`; the line under the closing call-to-action
on `index.html`; and the `openingHoursSpecification` block in the structured data.

**Nationwide coverage appears in seven places.** The hero specs strip (`50 / States
served`), the stats band, the "Where you are" panel and its badge, the FAQ, the closing
call-to-action line, the footer Contact column on all three pages, and the `areaServed`
block in the structured data.

---

## 2. Placeholders — what still needs your input

Search every file for **`[PLACEHOLDER`** to find them. As of the last edit:

### Pricing (`index.html`, the `#pricing` section)

| What | Status |
|---|---|
| Starter price | **$50/month — real.** |
| Growth price | `$XX` + `[PLACEHOLDER: set this price]` |
| Full service price | `$XX` + `[PLACEHOLDER: set this price]` |
| Account / transaction limits in every tier | `[PLACEHOLDER]` — these are what actually separate the tiers, so decide them before launch |
| Growth's sixth feature | `[PLACEHOLDER: e.g. a monthly review call]` |
| Full service's three differentiators | `[PLACEHOLDER: …]` |
| Catch-up pricing (the dashed panel below the tiers) | `[PLACEHOLDER: e.g. $X for each month brought current]` |

### Elsewhere on `index.html`

- **Software migration card** — which platforms you migrate from and to.
- **Plain-language reporting card** — whether the monthly written note is included or an add-on.
- **Onboarding step (02)** — typical onboarding time.
- **Monthly rhythm step (03)** — which day statements land.
- **FAQ: accounting software** — the platforms you support (QuickBooks Online, Xero, Wave, …).
- **FAQ: taxes** — whether you also prepare and file returns, and for which entity types.
- **FAQ: documents** — the name of your portal or file-sharing tool.
- **FAQ: contracts** — your actual terms (month-to-month? notice period? who keeps the file?).
- **FAQ: security** — the specifics you are willing to publish (MFA, encryption, insurance, bonding).
- **Testimonials** — all three quotes and all three attributions. Replace them with real,
  attributed quotes, or **delete the whole `<section>`**. It is marked with a comment
  saying exactly that. Do not launch with the placeholder quotes visible.

### On the legal pages

- `privacy.html` — named portal/software providers, your retention period, what you hand
  back when an engagement ends, and any security specifics you want to publish.
- `terms.html` — an HTML comment asks counsel to confirm the **Utah venue clause** still
  makes sense now that clients can be in any state.

### Everywhere

- `www.arcusmons.com` — the domain. Find and replace across `index.html`, `privacy.html`,
  `terms.html`, `sitemap.xml` and `robots.txt` once the real domain is registered. It is
  used for canonical links, Open Graph / Twitter share URLs and the structured data.

> **The legal pages are templates, not legal advice.** Have counsel read `privacy.html`
> and `terms.html` before launch. Bookkeeping means holding other people's financial
> records, so the privacy policy is doing real work here, not box-ticking.

### A note on what is *not* a placeholder

Service descriptions (categorization, reconciliation, statements, payables and
receivables, payroll and sales tax recorded in the books, tax-ready year-end) are written
as plain, standard-scope bookkeeping copy. **Read them against what your engagement letter
actually promises** and trim anything you do not do. Nothing on the page claims a
credential, a certification, a client count, a years-in-business figure or a turnaround
time, because those were not supplied — if you want them, add them.

---

## 3. What is on the page

`index.html` is one scrolling page, in this order:

1. **Hero** — the promise, the price, both calls to action, and the monthly deliverables panel
2. **Where this starts** — bookkeeping is the work that waits; the $50 / 50 states / 100% remote strip
3. **How it goes wrong** — the four-step cost of falling behind
4. **How It Works** — what you send → the monthly close → and the "Where you are" nationwide panel
5. **Services** — the six things we do every month
6. **More than a close** — catch-up, setup, migration, reporting
7. **Pricing** — three tiers plus the catch-up aside
8. **Testimonials** — placeholder quotes (delete or replace)
9. **Getting started** — the call, onboarding, the monthly rhythm
10. **FAQ** — eight questions, native `<details>` accordions
11. **Closing call-to-action** — the phone number, large

The nav mirrors the sections that sell: How It Works · Services · Pricing · FAQ, plus a
phone button visible at every scroll position.

**Sections alternate cream → white → cream** so no two neighbouring bands share a
background, with navy reserved for the hero, How It Works, the closing call-to-action and
the footer. If you add or remove a section, keep that alternation going.

---

## 4. Files

```
index.html          The whole sales page
privacy.html        Privacy Policy (template)
terms.html          Terms of Use (template)
404.html            Not-found page, routes visitors back to the phone number
robots.txt          Search-engine directives + sitemap pointer
sitemap.xml         Three URLs; update <lastmod> when copy changes
README.md           This file

assets/css/styles.css   All styling. Brand tokens are at the very top.
assets/js/main.js       Mobile menu, scroll-spy, reveal-on-scroll, back-to-top.
                        Purely optional — the page works with JS disabled.
assets/img/
  arcus-mons-logo.png        Logo, for light backgrounds (header)
  arcus-mons-logo-light.png  Recoloured logo, for navy backgrounds
  favicon.ico                16 / 32 / 48 px browser icon
  apple-touch-icon.png       180 px iOS home-screen icon
  icon-512.png               512 px icon, also used as the social-share image
  asus-ascent-gx10.png       LEFTOVER from the AI-server site. Nothing references
                             it any more — safe to delete.
```

`Arcus Mons AI Systems V1.5.pptx` is also still in the folder. It is the source of the
brand palette, but it is an AI-server deck — **do not upload it with the site.**

---

## 5. Brand system

Defined once as CSS custom properties at the top of `styles.css` — change a value there
and it propagates through the whole site.

| Token | Value | Used for |
|---|---|---|
| `--navy-800` | `#102a43` | Hero, dark sections, headings, primary buttons |
| `--navy-900` | `#0b1e30` | Footer |
| `--blue-500` | `#2f5f87` | Eyebrows, links, icons, pricing checkmarks |
| `--blue-300` | `#8fb4d6` | Accent text on navy |
| `--blue-200` | `#a9b8c7` | Body text on navy |
| `--cream` | `#faf7ef` | Page background |
| `--sand` | `#ddd8cb` | Hairlines, step numerals |
| `--slate` | `#55606c` | Body text on light |

**Type.** Source Serif 4 for headings, Source Sans 3 for body — the closest web
equivalents to the deck's Cambria and Calibri, which are named as fallbacks. Fonts load
from Google Fonts; if you would rather not depend on that (it is disclosed in the privacy
policy), download the two families into `assets/fonts/`, add `@font-face` rules, and
delete the three `<link>` tags in each page's `<head>`.

**Stylesheet sections**, in order: tokens, reset, layout primitives, buttons, header,
hero, stats, cards, the how-it-works diagram, process, FAQ, **pricing**, **testimonials**,
final CTA, footer, back-to-top, legal pages, utilities, print.

A few utility classes are defined but currently unused — `.grid--2`, `.section--mist`,
`.section--tight`, `.stat-src`, `.text-center`, `.visually-hidden`. They are kept on
purpose: `.stat-src`, for instance, is the caption style you would want if you ever swap
the stats band for cited industry statistics.

---

## 6. Publishing

Upload the whole folder — minus the `.pptx` — to any static host: Netlify, Cloudflare
Pages, GitHub Pages, Vercel, or ordinary shared hosting via FTP. There is nothing to
compile and no server-side code.

Two things to set up on the host:

1. **HTTPS**, which every host above provides free. Do not launch without it.
2. **The 404 page.** Netlify and Cloudflare Pages pick up `404.html` automatically.
   On Apache add `ErrorDocument 404 /404.html` to `.htaccess`; on Nginx add
   `error_page 404 /404.html;`.

After launch: submit `sitemap.xml` in Google Search Console, and claim the Google Business
Profile. A profile can be set up as a service-area business, so no street address is
required — and for a nationwide remote service, set the service area accordingly rather
than to a single city.

---

## 7. Notes on how it is built

- **One page, anchor navigation.** Nothing stands between a visitor and the phone number.
  The number appears in the sticky header, the hero, all three pricing buttons, the
  closing call-to-action and the footer — reachable at any scroll position, on any screen.
- **No contact form**, by choice. Call and email only.
- **Accessibility.** Skip link, semantic landmarks, labelled sections, visible focus
  rings, `aria-expanded` on the menu, and alt text on every image. The FAQ uses native
  `<details>`/`<summary>`, so it opens without JavaScript.
- **`prefers-reduced-motion`** is respected — all animation and scroll-reveal is disabled
  for visitors who ask for it.
- **SEO.** Per-page titles and descriptions, canonical URLs, Open Graph and Twitter cards,
  and JSON-LD structured data describing the business as an `AccountingService` with a
  United States service area, a `$50/month` offer, opening hours, and the FAQ (which can
  earn expandable FAQ results in Google).
- **Print.** A print stylesheet flattens the dark sections to black-on-white so the page
  does not consume a toner cartridge. Pricing cards and testimonials avoid page breaks.
- **Checked at 400 / 768 / 1024 / 1400 px** with no horizontal overflow at any width.

### If you edit the FAQ

The questions live in **two** places in `index.html`: the visible `<details>` blocks, and
the `FAQPage` JSON-LD block near the bottom of the file. Update both, or the structured
data will describe a page that no longer exists.

The JSON-LD deliberately carries **five** of the eight questions, and no bracketed
placeholder text appears anywhere in it — you do not want `[PLACEHOLDER: …]` showing up in
a Google search result. The split:

- **Three answers are clean** (cost, Utah, behind on the books) and appear in the JSON-LD
  word for word.
- **Two** (taxes, documents) appear in the JSON-LD with their trailing placeholder
  sentence trimmed off, so the structured-data version is a shortened form of what the
  page shows.
- **Three are omitted** (software, contracts, security) because their answers are mostly
  placeholder and there is nothing useful to publish yet.

Once you have filled those answers in, add the missing three to the JSON-LD, and restore
the trimmed sentences to the two shortened ones so both copies match again.
