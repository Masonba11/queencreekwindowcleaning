import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { buildMetadata, serviceSchema, faqSchema } from "@/lib/seo";
import { OUTDOOR_FAQ } from "@/lib/faq";

const title = "Outdoor Window Cleaning Queen Creek AZ | Exterior Window Washing";
const description =
  "Professional outdoor window cleaning in Queen Creek, AZ. Exterior window washing for desert dust, pollen & streak-free glass. Free quote. East Valley."

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/outdoor-window-cleaning",
});

const serviceSchemaJson = serviceSchema(
  "Outdoor Window Cleaning Queen Creek",
  "Professional exterior window washing in Queen Creek, Arizona. Removes desert dust, pollen, and buildup for streak-free residential windows."
);

const faqSchemaJson = faqSchema(OUTDOOR_FAQ.map((f) => ({ q: f.question, a: f.answer })));

export default function OutdoorWindowCleaningPage() {
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
        headline="Outdoor Window Cleaning in Queen Creek, AZ"
        subheadline="Exterior window washing that handles desert dust, pollen, and sun buildup. Get your Queen Creek home's windows shining again."
        quoteLink="#quote"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Residential Outdoor Window Cleaning in Queen Creek
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Outdoor window cleaning in Queen Creek is essential for curb appeal and a clear view.
            Arizona's desert dust, wind, pollen, and intense sun cause exterior windows to get dirty
            faster than in many other climates. Monsoon rain and sprinkler overspray can leave water
            spots and mineral deposits. Our exterior window washing removes this buildup and
            restores your windows to a streak-free shine. We serve Queen Creek and the surrounding
            East Valley with professional equipment and methods designed for residential homes.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">
            What Our Outdoor Window Washing Includes
          </h3>
          <p className="mt-2 text-slate-700 leading-relaxed">
            Our outdoor window cleaning service focuses on the exterior glass, frames, and sills of
            your home. We remove dust, pollen, water spots, hard water stains where possible, and
            general desert buildup. We use purified water and professional techniques to avoid
            streaks and leave your windows looking great from the street. Screen cleaning can be
            added so your screens look clean and allow maximum light through. We're equipped to
            safely reach second-story and higher windows—mention your home's layout when you request
            a quote.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">
            Why Exterior Windows Get So Dirty in Queen Creek
          </h3>
          <p className="mt-2 text-slate-700 leading-relaxed">
            In the Queen Creek area, wind carries fine dust and pollen that sticks to glass. The
            strong sun can bake on dirt and leave mineral deposits when water evaporates. Sprinklers
            and monsoon rain often leave spots if not wiped away. Regular professional outdoor
            window cleaning keeps buildup under control and helps maintain your home's appearance.
            Many homeowners schedule exterior washing one to two times per year, or more often if
            they're near construction or heavy dust.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-slate-900">
            Indoor vs. Outdoor: Do You Need Both?
          </h3>
          <p className="mt-2 text-slate-700 leading-relaxed">
            Outdoor cleaning addresses the side of the glass facing the elements; indoor cleaning
            addresses the interior side. For the clearest view and best curb appeal, many Queen
            Creek customers choose both. We offer{" "}
            <Link href="/indoor-window-cleaning" className="text-secondary-light hover:underline">
              indoor window cleaning
            </Link>{" "}
            as well—you can book one or both. Get a free quote and we'll outline the options for
            your home.
          </p>
        </div>

        <section id="quote" className="scroll-mt-24 mt-12">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Get Your Free Quote</h2>
          <p className="mt-2 mb-6 max-w-2xl text-slate-700">
            Request a free quote for outdoor window cleaning in Queen Creek. We'll get back to you quickly.
          </p>
          <div className="mx-auto max-w-md">
            <ContactForm id="quote" showHeading={false} variant="default" />
          </div>
        </section>

        <div className="mt-12">
          <CTASection
            headline="Get a Free Quote for Outdoor Window Cleaning"
            subheadline="Queen Creek, San Tan Valley, Gilbert, Chandler, and the East Valley. Call or request online."
            quoteHref="#quote"
          />
        </div>

        <div className="mt-12">
          <ServiceAreas />
        </div>

        <div className="mt-12">
          <FAQ items={OUTDOOR_FAQ} title="Outdoor Window Cleaning FAQ" />
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600">
            Need interior cleaning too?{" "}
            <Link href="/indoor-window-cleaning" className="font-semibold text-secondary-light hover:underline">
              See our indoor window cleaning service
            </Link>{" "}
            or <Link href="/contact" className="font-semibold text-secondary-light hover:underline">contact us</Link> for a full service.
          </p>
        </div>

        <div className="mt-10">
          <CTASection
            headline="Ready for Clean Exterior Windows in Queen Creek?"
            subheadline="Free quote. Professional exterior window washing. Serving the East Valley."
            quoteHref="#quote"
          />
        </div>
      </section>
    </>
  );
}
