# Arcus Mons AI Systems — Website

A static marketing site whose single job is to get a prospective firm to **pick up the
phone**. Colours, typography, logo and copy are taken from
`Arcus Mons AI Systems V1.5.pptx`.

No build step, no framework, no dependencies. Open `index.html` in a browser and it
works.

---

## 1. Live contact details

These are real values, already wired in across every page:

| | |
|---|---|
| Phone | **720-937-6463** — displayed as `720-937-6463`, linked as `tel:+17209376463` |
| Email | **arcusmons@gmail.com** |
| Hours | **Monday – Saturday, 8:30 a.m. – 6:00 p.m.** |
| Service area | **Utah** |
| Governing law | **Utah** (`terms.html`) |

> **Keep the two phone formats in sync.** The display string and the `tel:` string are
> deliberately different: `+17209376463` is E.164 — no dashes, no spaces — and that is
> what makes the number tap-to-dial on a phone. If you change the number, change both,
> plus `+1-720-937-6463` in the structured-data block near the bottom of `index.html`.

**Hours appear in four places.** Change them together: the footer Contact column on
`index.html`, `privacy.html` and `terms.html`; the line under the closing call-to-action
on `index.html`; and the `openingHoursSpecification` block in the structured data.

### The one remaining placeholder

`www.arcusmons.com` — the domain. Find and replace it across `index.html`,
`privacy.html`, `terms.html`, `sitemap.xml` and `robots.txt` once the real domain is
registered. It is used for the canonical links, the Open Graph / Twitter share URLs and
the structured data.

### Still to settle

- **The legal pages are templates, not legal advice.** Have counsel read `privacy.html`
  and `terms.html` before launch. Two `[PLACEHOLDER: …]` notes remain in `privacy.html`
  marking decisions only you can make (a retention period, and any analytics or booking
  tool you add later).
- **Statistics.** The 78% / 79% / 11% figures and their attributions came from the deck.
  Confirm each source still says what it is quoted as saying — cited numbers on a public
  site are a liability if they drift.

---

## 2. What is on the page

`index.html` is one scrolling page, in this order:

1. **Hero** — the promise, both call-to-action buttons, and the server itself
2. **The Risk** — the three survey statistics
3. **The invisible path** — what happens when a document gets pasted into a chatbot
4. **How It Works** — the network diagram: your perimeter vs. the public internet
5. **What your team sees** — the six things that make it usable on day one
6. **Configured around how your firm works** — groups, models, retention, offboarding
7. **The Engagement** — build, install, train and hand over
8. **FAQ** — six questions, native `<details>` accordions
9. **Closing call-to-action** — the phone number, large

The nav mirrors this: The Risk · How It Works · The Engagement · FAQ, plus a phone button
that is visible at every scroll position.

Three sections were removed by request: **pricing**, **hardware**, and **"One server. In
your office. Behind your lock."** The page now runs problem → mechanism → engagement, and
turns on the white-to-navy break between "The invisible path" and "How It Works."

Two things to know about what those removals took with them. The GX10 and its dimensions
still appear in the hero panel, so the product stays tangible without putting numbers on a
public page — cost is a conversation for the call, and the closing copy says so. But the
three plain-language value propositions that lived in the removed solution section — *you
own the box*, *traffic stops at your walls*, *everyone gets a seat* — are now only implied
by the hero subheading and the architecture diagram. If the page ever feels like it
explains the mechanism without stating the benefit, that is the gap to fill.

---

## 3. Files

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
  arcus-mons-logo-light.png  Recoloured logo, for navy backgrounds (footer)
  asus-ascent-gx10.png       Product photo (hero panel)
  favicon.ico                16 / 32 / 48 px browser icon
  apple-touch-icon.png       180 px iOS home-screen icon
  icon-512.png               512 px icon, also used as the social-share image
```

Both logo files were extracted from the PowerPoint, cropped, and resized. The light
variant is the same artwork remapped onto a cream-to-slate ramp so it reads against
`#102a43`; the original navy artwork disappears on a dark background.

---

## 4. Brand system

Taken from the deck. Defined once as CSS custom properties at the top of `styles.css` —
change a value there and it propagates through the whole site.

| Token | Value | Used for |
|---|---|---|
| `--navy-800` | `#102a43` | Hero, dark sections, headings, primary buttons |
| `--navy-900` | `#0b1e30` | Footer |
| `--blue-500` | `#2f5f87` | Eyebrows, links, icons |
| `--blue-300` | `#8fb4d6` | Accent text on navy |
| `--blue-200` | `#a9b8c7` | Body text on navy |
| `--cream` | `#faf7ef` | Page background |
| `--sand` | `#ddd8cb` | Hairlines, step numerals |
| `--slate` | `#55606c` | Body text on light |

Sections alternate cream → white → cream so no two neighbouring bands share a background,
with navy reserved for the hero, How It Works, the closing call-to-action and the footer.
If you add or remove a section, keep that alternation going.

**Type.** Source Serif 4 for headings, Source Sans 3 for body — the closest web
equivalents to the deck's Cambria and Calibri, which are named as fallbacks. Fonts load
from Google Fonts; if you would rather not depend on that (it is disclosed in the privacy
policy), download the two families into `assets/fonts/`, add `@font-face` rules, and
delete the three `<link>` tags in each page's `<head>`.

---

## 5. Publishing

Upload the whole folder — minus the `.pptx` — to any static host: Netlify, Cloudflare
Pages, GitHub Pages, Vercel, or ordinary shared hosting via FTP. There is nothing to
compile and no server-side code.

Two things to set up on the host:

1. **HTTPS**, which every host above provides free. Do not launch without it.
2. **The 404 page.** Netlify and Cloudflare Pages pick up `404.html` automatically.
   On Apache add `ErrorDocument 404 /404.html` to `.htaccess`; on Nginx add
   `error_page 404 /404.html;`.

After launch: submit `sitemap.xml` in Google Search Console, and claim the Google
Business Profile — for a call-driven business that listing usually generates more calls
than the website itself. A profile can be set up as a service-area business, so no street
address is required.

---

## 6. Notes on how it is built

- **One page, anchor navigation.** Nothing stands between a visitor and the phone number.
  The number appears in the sticky header, the hero, the closing call-to-action and the
  footer — five `tel:` links in all, reachable at any scroll position and on any screen.
- **No contact form**, by choice. Call and email only.
- **Accessibility.** Skip link, semantic landmarks, labelled sections, visible focus
  rings, `aria-expanded` on the menu, and alt text on every image. The FAQ uses native
  `<details>`/`<summary>`, so it opens without JavaScript.
- **`prefers-reduced-motion`** is respected — all animation and scroll-reveal is disabled
  for visitors who ask for it.
- **SEO.** Per-page titles and descriptions, canonical URLs, Open Graph and Twitter cards,
  and JSON-LD structured data describing the business, its hours, its Utah service area
  and the FAQ (which can earn expandable FAQ results in Google).
- **Print.** A print stylesheet flattens the dark sections to black-on-white so the page
  does not consume a toner cartridge.

### If you edit the FAQ

The questions live in **two** places in `index.html`: the visible `<details>` blocks, and
the `FAQPage` JSON-LD block near the bottom of the file. Update both, or the structured
data will describe a page that no longer exists.

---

## 7. Third-party assets

The ASUS Ascent GX10 product photograph came from the deck and is ASUS's image; "ASUS"
and "Ascent" are their trademarks. Using a manufacturer photo to show hardware you resell
is normal practice, but if you want to be careful, confirm it against ASUS's channel-partner
asset terms — or replace `assets/img/asus-ascent-gx10.png` with your own photograph of a
unit you have built. A real photo of your own build would probably sell better anyway.
