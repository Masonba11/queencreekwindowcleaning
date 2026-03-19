import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, reviewSchema } from "@/lib/seo";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import { REVIEWS_PAGE_REVIEWS } from "@/lib/reviews";

export const metadata: Metadata = buildMetadata({
  title: "Reviews | Queen Creek Window Cleaning Customer Testimonials",
  description:
    "Read what Queen Creek and East Valley homeowners say about our window cleaning and window washing services. Real reviews from real customers.",
  path: "/reviews",
});

const schema = reviewSchema(
  REVIEWS_PAGE_REVIEWS.map((r) => ({ author: r.author, rating: r.rating, text: r.text }))
);

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="bg-slate-800 py-12 text-white md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Customer Reviews</h1>
          <p className="mt-3 text-lg text-slate-200">
            See what Queen Creek and East Valley homeowners say about our window cleaning and window washing services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-8 rounded-xl bg-neutral-100 p-6 text-center">
          <p className="text-2xl font-bold text-slate-900">Rated 5 Stars by Our Customers</p>
          <p className="mt-1 text-slate-700">
            We're proud to serve Queen Creek, San Tan Valley, Gilbert, Chandler, and the East Valley with professional window cleaning.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS_PAGE_REVIEWS.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Ready to experience the difference? Get a free quote for window cleaning in Queen Creek.
          </p>
          <Link
            href="/contact#quote"
            className="mt-4 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover"
          >
            Get Free Quote
          </Link>
        </div>
      </section>

      <CTASection
        headline="Join Our Happy Customers in Queen Creek"
        subheadline="Free quote. Professional window cleaning. Call or request online."
      />
    </>
  );
}
