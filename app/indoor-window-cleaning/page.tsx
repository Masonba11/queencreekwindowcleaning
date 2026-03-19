import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { buildMetadata, serviceSchema, faqSchema } from "@/lib/seo";
import { INDOOR_FAQ } from "@/lib/faq";

const title = "Indoor Window Cleaning Queen Creek AZ | Residential Interior";
const description =
  "Professional indoor window cleaning in Queen Creek, AZ. Residential interior window washing for streak-free glass. Free quote. Serving Queen Creek and the East Valley.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/indoor-window-cleaning",
});

const serviceSchemaJson = serviceSchema(
  "Indoor Window Cleaning Queen Creek",
  "Professional residential interior window cleaning in Queen Creek, Arizona. Streak-free glass, sills, and frames."
);

const faqSchemaJson = faqSchema(INDOOR_FAQ.map((f) => ({ q: f.question, a: f.answer })));

export default function IndoorWindowCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }}
      />
      <Hero
        headline="Indoor Window Cleaning in Queen Creek, AZ"
        subheadline="Professional interior window washing for Queen Creek homeowners. Streak-free glass and clean sills—without the hassle."
        quoteLink="#quote"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Residential Indoor Window Cleaning in Queen Creek
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Indoor window cleaning in Queen Creek keeps your view clear and your home feeling fresh.
            Dust, fingerprints, and cooking residue build up on interior glass over time. Our team
            uses professional techniques and solutions to remove buildup and leave your windows
            streak-free. We work efficiently around your furniture and window treatments, and we
            can clean interior screens on request.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">
            What Our Indoor Window Cleaning Includes
          </h3>
          <p className="mt-2 text-slate-700 leading-relaxed">
            Our interior window cleaning service focuses on the glass you see from inside your
            home. We clean both sides of interior-accessible glass, wipe down sills and frames where
            needed, and remove dust and streaks. We use lint-free tools and professional-grade
            cleaning solutions so you get a clear, streak-free result. If you have hard water
            spots or mineral deposits on interior glass, we can often reduce or remove them—ask
            when you request your quote.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">
            Who Benefits from Indoor Window Cleaning in Queen Creek?
          </h3>
          <p className="mt-2 text-slate-700 leading-relaxed">
            Queen Creek homeowners who want a spotless view from inside without doing it themselves
            benefit from our indoor service. It's ideal after remodeling, before gatherings, or as
            part of regular home maintenance. Many customers pair indoor cleaning with our{" "}
            <Link href="/outdoor-window-cleaning" className="text-secondary-light hover:underline">
              outdoor window cleaning
            </Link>{" "}
            for a complete refresh. Whether you have a few problem windows or a full house, we
            provide clear pricing and thorough service.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">
            Why Choose Professional Interior Window Washing?
          </h3>
          <p className="mt-2 text-slate-700 leading-relaxed">
            DIY window cleaning often leaves streaks and takes time. Professionals use the right
            tools and techniques for consistent, streak-free results. We also handle hard-to-reach
            or large windows safely. For Queen Creek residents who value their time and want
            reliable results, professional indoor window cleaning is a smart choice.
          </p>
        </div>

        <section id="quote" className="scroll-mt-24 mt-12">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Get Your Free Quote</h2>
          <p className="mt-2 mb-6 max-w-2xl text-slate-700">
            Request a free quote for indoor window cleaning in Queen Creek. We'll get back to you quickly.
          </p>
          <div className="mx-auto max-w-md">
            <ContactForm id="quote" showHeading={false} variant="default" />
          </div>
        </section>

        <div className="mt-12">
          <CTASection
            headline="Get a Free Quote for Indoor Window Cleaning"
            subheadline="Serving Queen Creek, AZ and the East Valley. Call or request a quote online."
            quoteHref="#quote"
          />
        </div>

        <div className="mt-12">
          <ServiceAreas />
        </div>

        <div className="mt-12">
          <FAQ items={INDOOR_FAQ} title="Indoor Window Cleaning FAQ" />
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600">
            Need outdoor cleaning too?{" "}
            <Link href="/outdoor-window-cleaning" className="font-semibold text-secondary-light hover:underline">
              See our outdoor window cleaning service
            </Link>{" "}
            or <Link href="/contact" className="font-semibold text-secondary-light hover:underline">contact us</Link> for both.
          </p>
        </div>

        <div className="mt-10">
          <CTASection
            headline="Ready for Streak-Free Interior Windows?"
            subheadline="Free quote. Professional service. Queen Creek and surrounding areas."
            quoteHref="#quote"
          />
        </div>
      </section>
    </>
  );
}
