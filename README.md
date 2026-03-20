# Queen Creek Window Cleaning

Production-ready, SEO-focused local lead generation website for **queencreekwindowcleaning.com**. Built with Next.js, TypeScript, and Tailwind CSS. Geo-targeted for Queen Creek, AZ window cleaning searches and optimized for conversions.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build: `npm run build` then `npm run start`.

## Project Structure

- **`app/`** – Pages (App Router): home, indoor/outdoor services, blog, reviews, contact, FAQ, privacy, terms, thank-you
- **`components/`** – Reusable UI: Header (with Services dropdown), Footer, Hero, ContactForm, StickyCTA, FAQ, ReviewCard, ServiceAreas, CTASection, ServiceCard
- **`lib/`** – `constants.ts` (site config, nav, service areas), `seo.ts` (metadata + schema helpers), `faq.ts`, `reviews.ts`, `blog.ts`
- **`app/api/contact/`** – Optional POST handler for paid Web3Forms server-side use; the **quote form submits from the browser** to Web3Forms using `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

### Contact form (Web3Forms)

Web3Forms’ **free** plan only accepts submissions from the **browser**, not from a server (Vercel) unless you’re on a **paid** plan with IP allowlisting.

1. Copy `.env.example` to `.env.local` and set either **`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`** or **`WEB3FORMS_ACCESS_KEY`** to your Web3Forms access key (same UUID as in the dashboard).
2. On **Vercel**: add **`WEB3FORMS_ACCESS_KEY`** or **`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`** (either works — `next.config.ts` maps the former into the client at build time). Redeploy after changes.
3. Optional: **`WEB3FORMS_ACCESS_KEY`** also powers `/api/contact` if you use paid Web3Forms + allowlisted server IPs.

Submissions include name, email, phone, address, service, and message.

## Recommended Page Titles & Meta Descriptions

| Page | Title | Meta Description |
|------|--------|-------------------|
| Home | Queen Creek Window Cleaning \| Professional Window Washing Queen Creek AZ | Professional window cleaning in Queen Creek, AZ. Residential indoor and outdoor window washing. Free quotes. Call for streak-free windows. |
| Indoor | Indoor Window Cleaning Queen Creek AZ \| Residential Interior | Professional indoor window cleaning in Queen Creek, AZ. Residential interior window washing for streak-free glass. Free quote. Serving Queen Creek and the East Valley. |
| Outdoor | Outdoor Window Cleaning Queen Creek AZ \| Exterior Window Washing | Professional outdoor window cleaning in Queen Creek, AZ. Exterior window washing for desert dust, pollen & streak-free glass. Free quote. East Valley. |
| Blog | Blog \| Window Cleaning Tips & Advice for Queen Creek, AZ | Tips and advice on window cleaning, window washing, and home care for Queen Creek and Arizona homeowners. |
| Reviews | Reviews \| Queen Creek Window Cleaning Customer Testimonials | Read what Queen Creek and East Valley homeowners say about our window cleaning and window washing services. Real reviews from real customers. |
| Contact | Contact Us \| Free Quote for Window Cleaning Queen Creek AZ | Get a free quote for window cleaning in Queen Creek, AZ. Contact us by form or phone. Serving Queen Creek and the East Valley. |
| FAQ | FAQ \| Window Cleaning Queen Creek AZ | Frequently asked questions about window cleaning and window washing in Queen Creek, AZ. Pricing, services, and what to expect. |

All of the above are implemented in each page’s `metadata` export via `buildMetadata()` in `lib/seo.ts`.

## Schema Implementation

- **LocalBusiness** (root layout) – Name, description, URL, telephone, email, address, areaServed, openingHours. Injected as JSON-LD in the root layout.
- **Service** (indoor + outdoor service pages) – Name, description, provider (LocalBusiness), areaServed (Queen Creek, AZ). Injected on each service page.
- **FAQPage** (home, indoor, outdoor, contact, FAQ page) – `mainEntity` array of Question/Answer. Injected where FAQ sections exist.
- **Review / AggregateRating** (reviews page) – Reviews and aggregate rating for the business. Injected on the reviews page.

Schema helpers live in `lib/seo.ts` and are reused across pages.

## Internal Linking Logic

- **Header** – Home, Services (Indoor, Outdoor), Blog, Reviews, Contact.
- **Footer** – Same nav (flattened) plus FAQ, Privacy Policy, Terms.
- **Home** – Links to Indoor and Outdoor service pages via service cards and body copy.
- **Indoor page** – Links to Outdoor, Contact, Home, and service areas.
- **Outdoor page** – Links to Indoor, Contact, Home, and service areas.
- **Blog index** – Links to each post.
- **Blog posts** – “Back to Blog”, “Contact us”, and “More from our blog” links to other posts.
- **ServiceAreas** – Link to Contact for “not sure if we serve your area”.
- **CTAs** – “Get Free Quote” → `/contact#quote`, “Call Now” → `tel:`.
- **Thank-you page** – Back to Home, Contact again.

Anchor text uses natural, keyword-relevant phrases (e.g. “outdoor window cleaning”, “indoor window cleaning”, “contact us”) to support topical relevance and crawlability.

## How the Site Supports Ranking for Queen Creek Window Cleaning

1. **Exact-location + service intent** – Primary keywords (Queen Creek window cleaning, window cleaning Queen Creek AZ, Queen Creek window washing, residential/indoor/outdoor window cleaning Queen Creek) appear in H1s, H2s, and body copy without stuffing.
2. **Unique, substantial content** – Each core page has a single H1, multiple H2s/H3s, and full body copy. Indoor vs outdoor content is distinct to avoid thin or duplicate content.
3. **Local relevance** – Queen Creek, AZ, East Valley, desert dust, pollen, sun, and residential homeowners are woven into copy. Service areas (Queen Creek, San Tan Valley, Gilbert, Chandler, etc.) appear in a dedicated component and in meta/body.
4. **Technical SEO** – Static/SSG where possible, `sitemap.xml`, `robots.txt`, canonical tags, Open Graph and Twitter cards, semantic HTML, fast load, mobile-first. Core Web Vitals–friendly structure.
5. **Trust & conversion** – Reviews, FAQ sections, clear CTAs, sticky “Get Free Quote” and “Call Now” bars, contact form on hero and contact page. Affiliate note (Arizona Window Washing Pros) is disclosed in the footer without dominating the experience.
6. **Blog for topical authority** – Six posts target long-tail and supporting queries (how often to clean windows in Queen Creek, indoor vs outdoor, best time of year in Arizona, desert buildup, home appearance, tips for homeowners). Each post is internally linked and links back to contact/services.

## Checklist (from requirements)

- [x] Unique H1 on every page  
- [x] H2s/H3s present on core pages  
- [x] FAQ on every core page (home, indoor, outdoor, contact, reviews context, FAQ page)  
- [x] Body content on every core page  
- [x] Contact form in hero (home, indoor, outdoor) and on contact page  
- [x] “Get Free Quote Now” button in hero and site-wide  
- [x] “Call Now” button in hero and site-wide  
- [x] Sticky CTA buttons (Get Free Quote, Call Now)  
- [x] Services dropdown (Indoor, Outdoor)  
- [x] Blog section with index + 6 posts  
- [x] Reviews section (home + dedicated reviews page)  
- [x] On-page SEO (titles, descriptions, headings, internal links)  
- [x] Technical SEO (sitemap, robots, canonicals, OG, schema)  
- [x] Mobile responsive  
- [x] Fast, clean structure (reusable components, static generation)

## Contact Form Integration

The **ContactForm** posts directly to **`https://api.web3forms.com/submit`** from the browser (required for Web3Forms’ free tier). **`POST /api/contact`** is only used if you later wire paid server-side Web3Forms or another backend.

## Configuration

- **Phone, email, domain** – Edit `lib/constants.ts` (`SITE`, `NAV_LINKS`, `SERVICE_AREAS`).
- **Metadata base URL** – Set in `app/layout.tsx` via `metadataBase` and in `lib/constants.ts` (`SITE.domain`) for sitemap/schema.

## License

Private. All rights reserved.
