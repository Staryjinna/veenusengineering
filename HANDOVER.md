# Handover: open questions, placeholders, photo usage

## 1. Open questions for the client

1. **Locality.** The old site text says "Tirupathur", the Google Maps pin says "Vaniyambadi". The site currently uses **Vaniyambadi, Tirupathur district**.
2. **Hours.** Contact page says Mon–Fri 9–7, Sat 9–12. The old services page says Mon–Sat 9–8. The site uses **Mon–Fri 9–7, Sat 9–12**.
3. **Street address.** Site text: "#351/1, Mariyamman Kovil St, Vadacheri". Map pin: "351, Mariyamman Kovil St, Fort, Shakirabad". The site uses the map-pin version.
4. **Stats.** Are "256 clients" and "650 projects" real? They are hidden until `CONFIRM_WITH_CLIENT` is set to `false` in `data/stats.ts`. We would rather show real years in business and towns served.
5. **Testimonials.** Are Ram Kumar, Pavithra, Sunil Kumar and Mohammed Abdullah real customers who agreed to be quoted? Better: replace them with real Google reviews.
6. **Photos.** Are all gallery photos Veenus projects? Several look like they were found online (see section 3). Please send original photos, ideally 1600px wide or larger.
7. **Logo.** The supplied logo is 170×100 px. Please send a vector or high-resolution file.
8. **Service area (shown for now, confirm later).** The site lists Vaniyambadi, Tirupathur, Ambur, Jolarpet, Natrampalli and Alangayam. Edit `serviceArea.towns` in `data/contact.ts` once the client confirms.
9. **Materials and finishes.** Which stainless grades (202 / 304) do you use? Powder coating? Motorised gates and shutters? Pages present these as questions, not claims.
10. **Hydraulic machinery and custom fabrication.** These are mentioned on the old About page. Do they deserve their own service pages?
11. **Business facts for About.** Founding year, owner name and story, team size, workshop description.
12. **Instagram / YouTube** handles are taken from the old site. Are they current?
13. **Policies.** Have the Terms and Refund Policy reviewed. They are condensed from the old site's wording.
14. **Domain / hosting.** Is the final domain veenusengineering.in? (`business.siteUrl` is set to it.)

## 2. Placeholders still needing real content

- About page: founding year / founder story (marked on the page), **workshop photo, team photo, owner portrait** (dashed placeholder boxes)
- Testimonials (`verified: false`, tagged "Awaiting client confirmation" on Home). Replace with Google reviews
- Stats (hidden): years in business, towns served
- Service-area town list (`data/contact.ts`): live on the site for now, to be confirmed by the client
- Service pages: material / finish / grade questions, and FAQ answers on timelines and pricing, should be checked by the client
- Open Graph image (`public/images/og.jpg`) is generated from the hero photo. Replace with a branded image
- Logo is low resolution (emblem plus typeset name used in the header)
- Policies: legal review

## 3. Photos

**Excluded (listed in `data/gallery.json` with `"include": false` and a reason):**
`service-51` (catalogue render), `service-53` (another company's watermark), `service-83/84/87/88/89` (white-background catalogue shots), `service-14` (looks computer-generated), `carousel-1` (landscape does not look local, upscaled), `gallery5`, `gallery33`, `gallery41`, `gallery42` (duplicates), `about.jpg` (template collage), `testimonial-1…4.jpg` (template stock photos).

**Included but provenance unverified:** the roofing shots `gallery3`, `gallery4`, `gallery32`, `gallery43`, `service-61`–`64`, the hero `carousel-3`, and `service-6` look like they may not be Tamil Nadu projects. Please confirm with the client.

**Where photos are used:**

| Place | Photo |
|---|---|
| Home hero, Roofing page hero, social share image | `carousel-3.jpg` |
| Home "Why Veenus" and About page | `service-62.jpg` (welders on site) |
| Home featured strip | `service-11, 2, 3, 41, 5, gallery4, carousel-2, service-8, service-72, service-13, service-23, service-31, service-45, service-54, gallery31, service-81, service-15, service-24, service-33, service-4, service-7, service-73` (interleaved by category) |
| SS Gates hero + card | `service-11.jpg` |
| SS Railings | `service-24.jpg` |
| MS Gates | `service-33.jpg` |
| MS Grills | `service-45.jpg` |
| Rolling Shutters | `service-54.jpg` |
| Roofing | hero `carousel-3.jpg`, card `gallery4.jpg` |
| Kerala Roofing | `service-7.jpg` |
| SS Furniture | `service-81.jpg` |
| Every service page gallery and `/projects/` | all included photos in that category (50 photos in total) |

Most photos are only 500×400 px, so they are never stretched past 1.7× in the lightbox, and service heroes use a split layout instead of full-bleed.

## 4. Quality checks run

Lighthouse (mobile, simulated slow 4G): Home 91 / 100 / 100 / 100, Service page 97 / 100 / 100 / 100, Projects 91 / 100 / 100 / 100, Contact 95 / 100 / 100 / 100 (performance / accessibility / best practices / SEO). No horizontal overflow at 360–1440 px. Every internal link resolves.
