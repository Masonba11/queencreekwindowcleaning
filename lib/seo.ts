import type { Metadata } from "next";
import { SITE } from "./constants";

export type PageSEO = {
  title: string;
  description: string;
  path: string;
  canonical?: string;
  noIndex?: boolean;
  openGraph?: {
    title?: string;
    description?: string;
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
  };
};

export function buildMetadata(seo: PageSEO): Metadata {
  const canonical = seo.canonical ?? `${SITE.domain}${seo.path}`;
  const title = seo.title.includes(SITE.name) ? seo.title : `${seo.title} | ${SITE.name}`;
  const ogTitle = seo.openGraph?.title ?? title;
  const ogDesc = seo.openGraph?.description ?? seo.description;

  return {
    title,
    description: seo.description,
    robots: seo.noIndex ? "noindex, nofollow" : "index, follow",
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonical,
      siteName: SITE.name,
      locale: "en_US",
      type: seo.openGraph?.type ?? "website",
      publishedTime: seo.openGraph?.publishedTime,
      modifiedTime: seo.openGraph?.modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDesc,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: "Professional window cleaning and window washing services in Queen Creek, Arizona. Residential indoor and outdoor window cleaning.",
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.stateAbbr,
      postalCode: SITE.address.zip,
    },
    areaServed: SITE.serviceArea,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
    },
    areaServed: {
      "@type": "City",
      name: "Queen Creek",
      containedInPlace: { "@type": "State", name: "Arizona" },
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function reviewSchema(reviews: { author: string; rating: number; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: reviews.length.toString(),
      bestRating: "5",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating.toString(), bestRating: "5" },
      reviewBody: r.text,
    })),
  };
}
