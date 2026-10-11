# Velan Industries website

Steel works in Chennai: gates, railings, grills, rolling shutters, roofing and SS furniture.

**Stack:** Next.js 16 (App Router, React 19, TypeScript 7), Tailwind CSS 4, self-hosted fonts, static export. No CMS, no database, no server needed.

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static site in out/
npm run start     # preview out/ locally
npm run lint      # type-check
npm run images    # re-optimise photos after editing data/gallery.json
```

Requires Node 20+.

## Where to edit things

All content is in `data/`.

| To change | Edit |
|---|---|
| Phone, WhatsApp, email, address, map, hours, social links, service-area towns, owner name | `data/contact.ts` |
| Service names, descriptions, uses, options, FAQs, SEO titles | `data/services.ts` |
| Photos, categories, alt text, credits | `data/gallery.json` |
| Customer reviews (section hidden while empty) | `data/testimonials.ts` |
| Client / project counts (hidden until confirmed) | `data/stats.ts` |
| "How it works" steps and "Why choose us" | `data/process.ts` |
| Terms and refund policy | `data/policies.ts` |
| Site URL for sitemap / SEO | `NEXT_PUBLIC_SITE_URL` env var, or `business.siteUrl` in `data/contact.ts` |

### Adding a phone number or WhatsApp later

The phone number and WhatsApp are currently **removed**. In `data/contact.ts`:

- set `phoneDisplay` and `phoneTel` (`'+919876543210'`) and **Call** buttons appear in the header, hero, footer and contact page;
- set `whatsappNumber` (`'919876543210'`, digits only) and the quote buttons switch to WhatsApp, the quote form opens WhatsApp, and the floating WhatsApp button appears on phones;
- fill `hours`, `instagram`, `youtube` the same way.

Until then every "Get a quote" button goes to the contact form, which opens the visitor's email app with their details filled in and sends to `contact.email`.

### Replacing the sample photos with Velan's own

1. Put Velan's photos in `assets/stock/` (or rename the folder; update `SRC` in `scripts/optimise-images.mjs`).
2. Edit `data/gallery.json`: one entry per photo with `file`, `category`, a descriptive `alt`, `"include": true`. Add `"featured": true` to show it on the Home strip. Remove the `credit` / `source` / `license` fields for your own photos.
3. In `data/gallery.ts` set `usingSamplePhotos = false`. The "sample photos" notices disappear.
4. Run `npm run images`. It writes WebP files (max 2000 px, never upscaled) and 800 px thumbnails to `public/images/gallery/`.
5. To choose a service's hero or card photo, set `heroFile` / `cardFile` in `data/services.ts`.

Categories: `ss-gates`, `ss-railings`, `ms-gates`, `ms-grills`, `rolling-shutters`, `roofing`, `kerala-roofing`, `ss-furniture`, `other`.

Photos currently in the repo are Unsplash stock images; see `CREDITS.md`.

### Adding a service

Add an object to `services` in `data/services.ts`. The page, cards, footer link, sitemap and structured data are generated from it.

## Deploy to Vercel

1. Push the repo to GitHub and import it in Vercel (framework: Next.js, no settings to change).
2. Add `NEXT_PUBLIC_SITE_URL` (for example `https://www.your-domain.in`) under Environment Variables.
3. Add the custom domain.

## Upload to cPanel / shared hosting

1. Run `npm run build`.
2. Upload **everything inside `out/`** (including the hidden `.htaccess`) to `public_html/`.

Pages live at `/about/`, `/services/ss-gates/` and so on, each with its own `index.html`.

## Structure

```
app/             pages, sitemap.ts, robots.ts
components/      Header, Footer, Actions (quote/call buttons), PhotoGrid (filter + lightbox), QuoteForm, ...
data/            all editable content
lib/             quote/WhatsApp helpers, JSON-LD builders
scripts/         optimise-images.mjs
assets/stock     source photos (untouched)
assets/brand     logo
public/images    optimised output
```

See **HANDOVER.md** for placeholders and open questions.
