# Veenus Engineering website (redesign concept)

Next.js (App Router, TypeScript) + Tailwind CSS v4, built as a **static export** (`out/`). No CMS, no database, no server needed.

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # writes the static site to out/
npm run start     # preview out/ locally
npm run lint      # type-check
```

Requires Node 20+.

## Where to edit things

All content lives in `data/`. Nothing about the business is hard-coded in the page files.

| To change | Edit |
|---|---|
| Phone, WhatsApp number, email, address, map, hours, social links, service-area towns | `data/contact.ts` |
| Service names, descriptions, uses, options, FAQs, SEO titles | `data/services.ts` |
| Photos, categories, alt text, which photos are shown | `data/gallery.json` |
| Testimonials | `data/testimonials.ts` |
| Client / project counts | `data/stats.ts` (hidden until `CONFIRM_WITH_CLIENT = false`) |
| "How it works" steps and "Why choose us" points | `data/process.ts` |
| Terms and refund policy text | `data/policies.ts` |
| Site URL (used in sitemap and structured data) | `business.siteUrl` in `data/contact.ts` |

### Adding or changing photos

1. Drop the original into `assets/original/` (originals are never modified).
2. Add an entry to `data/gallery.json`: `file`, `category`, a descriptive `alt`, `"include": true`. Add `"featured": true` to show it on the Home strip.
3. Run `npm run images`. This writes WebP files (max 2000px wide, never upscaled) to `public/images/gallery/` and fills in each photo's `src`, `width` and `height`.
4. To use a photo as a service's hero or card image, set `heroFile` / `cardFile` in `data/services.ts`.

Set `"include": false` to hide a photo without deleting it. The `note` field records why.

Categories: `ss-gates`, `ss-railings`, `ms-gates`, `ms-grills`, `rolling-shutters`, `roofing`, `kerala-roofing`, `ss-furniture`, `other`.

### Adding a service

Add an object to the `services` array in `data/services.ts`. The page `/services/<slug>/`, the cards, footer links, sitemap and structured data are all generated from it.

## Deploy to Vercel

1. Push this repo to GitHub and import it in Vercel.
2. Framework preset: **Next.js**. No settings to change. `vercel.json` already holds the old-URL redirects and cache headers.
3. Add the custom domain in the Vercel dashboard.

## Upload to cPanel / shared hosting

1. Run `npm run build`.
2. Open the `out/` folder. In cPanel File Manager (or FTP), upload **everything inside `out/`** to `public_html/` (hidden files included, so `.htaccess` goes up too).
3. Visit the site. Pages live at `/about/`, `/services/ss-gates/` and so on, each with its own `index.html`.

The old template URLs keep working: `.htaccess` redirects them on Apache, and the build also writes `about.html`, `service.html`, `gallery.html`, `contact.html`, `terms.html` and `return.html` as redirect stubs for hosts that ignore `.htaccess`.

## Old URL map

| Old | New |
|---|---|
| `/index.html` | `/` |
| `/about.html` | `/about/` |
| `/service.html` | `/services/` |
| `/gallery.html` | `/projects/` |
| `/contact.html` | `/contact/` |
| `/terms.html` | `/terms/` |
| `/return.html` | `/refund-policy/` |

## Structure

```
app/            pages (App Router), sitemap.ts, robots.ts
components/     Header, Footer, ServiceCard, PhotoGrid (filter + lightbox), QuoteForm, ...
data/           all editable content
lib/            WhatsApp link builder, JSON-LD schema builders
scripts/        optimise-images.mjs, postbuild.mjs (redirect stubs), redirects.mjs
assets/original untouched client photos
public/images   optimised output
```

Only two small client components ship JavaScript: the mobile menu and the photo grid / quote form.

See **HANDOVER.md** for open questions, placeholders and the list of photos used.
