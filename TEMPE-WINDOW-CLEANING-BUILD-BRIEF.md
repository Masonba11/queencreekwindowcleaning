# Tempe Window Cleaning Website — Build Brief for AI Agent

Use this document to build **tempewindowcleaning.com** with the same strategy, design system, SEO approach, and content structure as the reference site (Queen Creek Window Cleaning). Replace all city/location references with **Tempe** and Tempe-appropriate details.

---

## 1. Color Scheme (Exact — Do Not Change)

Use these CSS variables and Tailwind theme. Keep the same hex values.

| Token | Hex | Usage |
|-------|-----|--------|
| **Primary** | `#1e3a5f` | Headers, nav bar, hero overlay, footer, primary buttons |
| **Primary dark** | `#152a47` | Darker gradients, text accents |
| **Secondary** | `#2563eb` | Links, hover states |
| **Secondary light** | `#3b82f6` | Highlights, active nav, focus rings |
| **Accent** | `#ea580c` | CTAs: “Get Free Quote”, “Call Now”, key buttons |
| **Accent hover** | `#c2410c` | CTA hover state |
| **Neutral 100** | `#f1f5f9` | Light gray backgrounds |
| **Neutral 200** | `#e2e8f0` | Borders |
| **Background** | `#ffffff` | Page background |
| **Foreground** | `#152a47` | Body text |

- Map these to Tailwind `@theme` (e.g. `primary`, `primary-dark`, `secondary`, `secondary-light`, `accent`, `accent-hover`, `neutral-100`, `neutral-200`).
- Favicon/manifest `theme_color`: use primary `#1e3a5f`.

---

## 2. SEO Strategy (Mirror Exactly)

- **Metadata**
  - Root layout: `metadataBase` = `https://tempewindowcleaning.com`.
  - Default title: `{SITE.name} | Professional Window Washing Tempe AZ`.
  - Template: `%s | {SITE.name}` for all pages.
  - Description: Professional window cleaning in Tempe, AZ; indoor/outdoor; free quotes; streak-free.
  - `openGraph.type`: `website`; `locale`: `en_US`.
  - `robots`: `index, follow` unless a page is noindex (e.g. thank-you).

- **Structured data**
  - **LocalBusiness** (root layout): name, description, url, telephone, email, address (Tempe, AZ), areaServed, priceRange, openingHoursSpecification (e.g. Mon–Sat 7am–6pm).
  - **Service** (service pages): service name/description, provider = business name, areaServed = Tempe, Arizona.
  - **FAQPage** (pages with FAQ): `mainEntity` array of Question/Answer.
  - **Review / AggregateRating** (reviews page or section): review count, rating value, individual Review items.

- **Canonical & per-page**
  - Every page has a canonical URL (`alternates.canonical`) = `metadataBase` + path.
  - Use a shared `buildMetadata(seo)` helper that sets title, description, robots, canonical, openGraph, twitter card.

- **Sitemap**
  - Include: `/`, `/indoor-window-cleaning`, `/outdoor-window-cleaning`, `/blog`, `/reviews`, `/contact`, `/faq`, `/privacy-policy`, `/terms`, plus all `/blog/[slug]` URLs.
  - Priorities: home 1; main service/contact ~0.9; blog index/reviews ~0.8; FAQ ~0.7; blog posts ~0.7; legal ~0.3.
  - `changeFrequency`: weekly for home/blog; monthly for services/reviews/contact/faq/blog posts; yearly for legal.

- **Robots**
  - Allow all `/`; disallow `/thank-you`, `/api/`; `sitemap`: `{domain}/sitemap.xml`.

---

## 3. Content Strategy (Same Structure, Tempe Copy)

- **City swap**
  - Replace “Queen Creek” with “Tempe” in headlines, body copy, and meta descriptions.
  - Replace “East Valley” with Tempe-appropriate phrasing (e.g. “Tempe and the Phoenix metro” or “Tempe and surrounding areas”).
  - Service areas: Tempe-first list (e.g. Tempe, Scottsdale, Mesa, Chandler, Phoenix, etc.) — keep same component pattern.

- **Messaging (keep tone and structure)**
  - Professional, residential, streak-free; free quotes; call or request online.
  - **Water fed pole + deionized water**: We don’t use “just a squeegee and a mop”; we use a water fed pole system with deionized water (purest form) so we leave **no water marks or streaks** like real professionals.
  - **Tracks, sills, screens**: Included **completely free** with every window cleaning service — call this out in a highlighted box on the home page and again in the water-fed-pole section.
  - **Our system**: One hero image (e.g. “our system” photo) under the water-fed-pole copy on the home page.

- **Home page sections (order and purpose)**
  1. **Hero**: Headline (e.g. “Professional Window Cleaning in Tempe, AZ”), subhead (streak-free, trusted, free quotes), primary CTA “Get Free Quote Now”, secondary “Call Now”, optional stats.
  2. **Intro**: “Window Cleaning & Window Washing Services in Tempe” + short intro paragraph; then **callout**: “Tracks, sills, and screens are included completely free with every window cleaning service.”
  3. **Service cards**: Two cards — Indoor Window Cleaning Tempe, Outdoor Window Cleaning Tempe (same structure as reference).
  4. **Water fed pole section**: “Water Fed Pole System & Pure Deionized Water” — two paragraphs (deionized water, no streaks; tracks/sills/screens free). Subheading “Our system” + one image (e.g. system/equipment photo).
  5. **Why choose us**: Three cards (e.g. Local & Reliable, Quality Results, Clear Pricing) — copy tailored to Tempe.
  6. **Quote section**: “Get Your Free Quote” + contact form (id=`quote`).
  7. **Reviews**: “What Tempe Homeowners Say” (or similar).
  8. **Service areas**: “Proudly Serving Tempe & Nearby Areas” + list of cities.
  9. **FAQ**: Home FAQ block; then CTA section (“Ready for Clean Windows in Tempe?” etc.).

- **Global layout**
  - **Our Work gallery**: Section (id=`our-work`) on every page (e.g. above footer). Gallery reads from `public/newstuff` (images + videos). Nav link “Our Work” (href=`#our-work`) in header and footer.
  - **Sticky CTA bar** (mobile-friendly): “Get Free Quote” + “Call Now” at bottom; on pages with quote form use `#quote`, else `/contact#quote`.
  - **Header**: Logo, main nav (Home, Services dropdown, Blog, Reviews, Our Work, Contact), and on desktop: phone + “Get Quote” buttons. Mobile: hamburger; **no** Call/Get Quote in mobile menu (per reference).
  - **Footer**: Business name, tagline, service area, phone; Quick Links (nav + FAQ + Our Work); Legal (Privacy, Terms). Same structure.

- **Pages to implement**
  - `/` — Home (sections above).
  - `/indoor-window-cleaning` — Indoor service page (SEO title/description, body copy for Tempe, FAQ, CTA).
  - `/outdoor-window-cleaning` — Outdoor service page (same pattern).
  - `/contact` — Contact page + quote form; thank-you redirect.
  - `/thank-you` — Noindex; thank you message.
  - `/reviews` — Reviews list + schema.
  - `/blog` — Blog index; `/blog/[slug]` — Blog post (title, date, body).
  - `/faq` — FAQ page (reuse FAQ component + schema).
  - `/privacy-policy`, `/terms` — Legal; low priority in sitemap.

---

## 4. Technical / UX Conventions (Match Reference)

- **Next.js App Router**: `app/` for routes; `layout.tsx` with Header, main, Our Work gallery, Footer, StickyCTA.
- **Favicons**: `app/favicon.ico`, `app/apple-icon.png`; in `public/`: `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`; `public/site.webmanifest` with name/short_name, icons, theme_color `#1e3a5f`, background_color `#ffffff`.
- **Layout metadata**: `icons` (favicon.ico, 16x16, 32x32, apple), `manifest: "/site.webmanifest"`.
- **Hero**: Optional video or image background; overlay gradient (primary/primary-dark) for readability; headline + subhead + CTAs.
- **Forms**: Contact/quote form; POST to API route; thank-you page; noindex thank-you.
- **Accessibility**: Focus visible (e.g. accent outline); aria-labels on CTAs; semantic headings (h1 → h2 → h3).
- **Mobile**: Nav collapses to hamburger; white/blurred “Our Work” panel; sticky CTA at bottom with safe-area padding.

---

## 5. Constants / Config to Replace for Tempe

- **SITE**: name “Tempe Window Cleaning”, tagline “Professional Window Washing in Tempe, AZ”, domain `https://tempewindowcleaning.com`, phone/email/address for Tempe, serviceArea “Tempe, AZ and surrounding areas”, hours “Mon–Sat 7am–6pm”. Keep an affiliate note if applicable.
- **NAV_LINKS**: Same structure; “Our Work” href `#our-work`; other paths same.
- **SERVICE_AREAS**: Tempe, then nearby cities (e.g. Scottsdale, Mesa, Chandler, Phoenix, Gilbert, etc.).

---

## 6. Copy Patterns (Tempe-Specific)

- Headlines: “[Service] in Tempe, AZ” or “Professional Window Cleaning in Tempe, AZ”.
- Subheads: “Get streak-free windows… Trusted… Tempe homeowners… Free quotes.”
- CTAs: “Get Free Quote Now”, “Call Now” (same).
- Service areas: “Proudly Serving Tempe & Nearby Areas”; “We provide… throughout Tempe, Arizona…”
- FAQ: “Do you serve Tempe, AZ?”; “How much does window cleaning cost in Tempe?”; same question types, Tempe in answers.

---

## 7. Checklist for the AI Agent

- [ ] Same color palette and Tailwind theme (exact hex values).
- [ ] Same SEO: metadata, canonicals, LocalBusiness + Service + FAQ + Review schema, sitemap, robots.
- [ ] Same home page section order: Hero → Intro + free tracks/sills/screens callout → Service cards → Water fed pole + “Our system” image → Why choose us → Quote form → Reviews → Service areas → FAQ → CTA.
- [ ] Same layout: Header (logo, nav, Our Work, Contact), main, Our Work gallery, Footer, Sticky CTA.
- [ ] Same pages: home, indoor, outdoor, contact, thank-you, reviews, blog (+ slugs), faq, privacy, terms.
- [ ] Favicons and manifest with theme_color primary.
- [ ] All copy and schema use “Tempe” (and chosen service areas) instead of Queen Creek.
- [ ] Water fed pole + deionized water + free tracks/sills/screens messaging and “Our system” image on home page.
- [ ] Mobile: hamburger nav; no Call/Quote in mobile menu; sticky CTA at bottom; Our Work panel styled (e.g. white) and usable.

Use this brief so **tempewindowcleaning.com** is a direct, city-swapped counterpart of the reference site with the same color scheme, SEO strategy, and content strategy.
