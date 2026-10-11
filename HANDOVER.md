# Handover: placeholders and open questions

## What was done

The site was converted from a template built for another business to **Velan Industries, Chennai** (owner: Velan), with a white theme drawn from the supplied logo (charcoal and spark orange). All earlier photos were deleted and replaced with free-licence Unsplash photos (see `CREDITS.md`). All phone, WhatsApp, social, hours and address details from the earlier business were removed.

## Placeholders to replace before launch

| What | Where | Current value |
|---|---|---|
| **Email** | `data/contact.ts` | `hello@velanindustries.example` (not a real address; the quote form sends here) |
| **Website domain** | `NEXT_PUBLIC_SITE_URL` / `business.siteUrl` | `https://velanindustries.example` (feeds sitemap, canonical links, structured data) |
| **Phone / WhatsApp** | `data/contact.ts` | removed on request. Add to switch Call and WhatsApp buttons on |
| **Street address** | `data/contact.ts` | only "Chennai, Tamil Nadu". Map shows the city |
| **Opening hours** | `data/contact.ts` | none |
| **Instagram / YouTube** | `data/contact.ts` | none |
| **Photos** | `data/gallery.json` | stock photos, labelled "sample" on the site. Replace with Velan's own |
| **Owner portrait, workshop and team photos, start year, story** | About page | dashed placeholder boxes |
| **Customer reviews** | `data/testimonials.ts` | empty, so the section is hidden |
| **Client / project counts** | `data/stats.ts` | hidden |
| **Service-area towns** | `data/contact.ts` | Chennai, Ambattur, Guindy, Avadi, Tambaram, Poonamallee, Sriperumbudur (a guess) |
| **Service list and copy** | `data/services.ts` | carried over from the template (SS/MS gates, railings, grills, shutters, roofing, Kerala roofing, SS furniture). Confirm what Velan actually offers |
| **Terms and refund policy** | `data/policies.ts` | starter wording, renamed. Needs review |
| **Materials / grades / finishes** | service pages | written as questions to discuss, not claims. Confirm |
| **Open Graph image** | `public/images/og.jpg` | generated from the hero photo and name. Replace with a designed image if wanted |

## Questions for Velan

1. Which services should the site list? Is the template's set (8 services) right?
2. Phone and WhatsApp number, email address, opening hours?
3. Street address in Chennai, and which areas are served?
4. Domain name?
5. Owner's short bio, year started, workshop and team photos, real project photos?

## Checks run

Lighthouse (mobile, simulated slow 4G): Home 92, Gallery 93, Service pages 94, Terms 95 performance; 100 accessibility, best practices and SEO. Every internal link resolves, every image has alt text, no horizontal overflow at 360 to 1440 px. The quote form's email hand-off (mailto) could not be exercised in a headless browser; validation was.
