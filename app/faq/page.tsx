import type { Metadata } from "next";
import { buildMetadata, faqSchema } from "@/lib/seo";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { HOME_FAQ, INDOOR_FAQ, OUTDOOR_FAQ, CONTACT_FAQ } from "@/lib/faq";

const ALL_FAQ = [
  { title: "General", items: HOME_FAQ },
  { title: "Indoor Window Cleaning", items: INDOOR_FAQ },
  { title: "Outdoor Window Cleaning", items: OUTDOOR_FAQ },
  { title: "Contact & Booking", items: CONTACT_FAQ },
];

const flatFaq = ALL_FAQ.flatMap((s) => s.items.map((f) => ({ q: f.question, a: f.answer })));
const schema = faqSchema(flatFaq);

export const metadata: Metadata = buildMetadata({
  title: "FAQ | Window Cleaning Queen Creek AZ",
  description:
    "Frequently asked questions about window cleaning and window washing in Queen Creek, AZ. Pricing, services, and what to expect.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="bg-slate-800 py-12 text-white md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Frequently Asked Questions</h1>
          <p className="mt-3 text-lg text-slate-200">
            Common questions about window cleaning and window washing in Queen Creek, AZ.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
        <div className="space-y-12">
          {ALL_FAQ.map((section) => (
            <FAQ
              key={section.title}
              title={section.title}
              items={section.items}
              id={section.title.toLowerCase().replace(/\s+/g, "-")}
            />
          ))}
        </div>
        <div className="mt-12">
          <CTASection
            headline="Still Have Questions?"
            subheadline="Get a free quote or call us. We're happy to help."
          />
        </div>
      </section>
    </>
  );
}
