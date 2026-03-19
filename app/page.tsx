import Hero from "@/components/Hero";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import ContactForm from "@/components/ContactForm";
import { ReviewsSection } from "@/components/ReviewCard";
import { HOME_REVIEWS } from "@/lib/reviews";
import { HOME_FAQ } from "@/lib/faq";
import { faqSchema } from "@/lib/seo";

const schema = faqSchema(HOME_FAQ.map((f) => ({ q: f.question, a: f.answer })));

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero
        headline="Professional Window Cleaning in Queen Creek, AZ"
        subheadline="Get streak-free windows inside and out. Trusted residential window washing for Queen Creek homeowners. Free quotes—call or request online."
        quoteLink="#quote"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
          Window Cleaning & Window Washing Services in Queen Creek
        </h2>
        <p className="mb-4 max-w-3xl text-slate-700 leading-relaxed">
          Queen Creek Window Cleaning provides professional residential window cleaning and window
          washing throughout Queen Creek, Arizona. Whether you need indoor window cleaning, outdoor
          window cleaning, or both, we help homeowners enjoy clear, streak-free windows year-round.
          Desert dust, pollen, and sun can leave windows looking dull—we remove buildup and restore
          the view with methods designed for Arizona homes.
        </p>
        <p className="mb-8 rounded-lg border border-secondary-light/30 bg-secondary-light/10 px-4 py-3 text-slate-800">
          <strong>Tracks, sills, and screens</strong> are included <strong>completely free</strong> with every window cleaning service—no extra charge.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Indoor Window Cleaning Queen Creek"
            description="Interior window cleaning for a spotless view from inside your home. We clean glass, sills, and frames with professional techniques for streak-free results."
            href="/indoor-window-cleaning"
            ctaText="Indoor cleaning details"
          />
          <ServiceCard
            title="Outdoor Window Cleaning Queen Creek"
            description="Exterior window washing to boost curb appeal. We remove dust, pollen, water spots, and desert buildup so your windows shine from the street."
            href="/outdoor-window-cleaning"
            ctaText="Outdoor cleaning details"
          />
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
            Water Fed Pole System &amp; Pure Deionized Water
          </h2>
          <p className="mb-6 max-w-3xl text-slate-700 leading-relaxed">
            We don’t rely on a squeegee and a mop. We use a professional <strong>water fed pole system</strong> with
            <strong> deionized water</strong>—purified to its purest form—so we leave <strong>no water marks or streaks</strong>.
            That’s how real professionals get windows spotless: pure water that dries clear, not tap water that spots.
          </p>
          <p className="mb-8 max-w-3xl text-slate-700 leading-relaxed">
            Our deionized water removes minerals and impurities, so when we rinse your windows there’s nothing left behind.
            You get streak-free, spot-free glass every time—the way it should be done, not just a quick wipe.
            <strong> Tracks, sills, and screens are included free</strong> with every window cleaning service.
          </p>
          <div className="mt-10">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">Our system</h3>
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md">
              <Image
                src="/newstuff/newstuff9.jpg"
                alt="Our professional water fed pole system and deionized water setup"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
            Why Choose Us for Window Washing in Queen Creek?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Local & Reliable</h3>
              <p className="mt-2 text-slate-600">
                We focus on Queen Creek and the East Valley. You get a team that knows the area and
                shows up when we say we will.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Quality Results</h3>
              <p className="mt-2 text-slate-600">
                We use professional-grade methods and solutions for streak-free windows. No
                shortcuts—just clean glass that lasts.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Clear Pricing</h3>
              <p className="mt-2 text-slate-600">
                Free quotes with no pressure. We explain what we'll do and what it costs so you can
                decide with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">Get Your Free Quote</h2>
        <p className="mb-8 max-w-2xl text-slate-700">
          Request a free quote for window cleaning in Queen Creek. We'll get back to you quickly with clear pricing.
        </p>
        <div className="mx-auto max-w-md">
          <ContactForm id="quote" showHeading={false} variant="default" />
        </div>
      </section>

      <ReviewsSection reviews={HOME_REVIEWS} title="What Queen Creek Homeowners Say" />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <ServiceAreas />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <FAQ items={HOME_FAQ} id="faq" />
        <div className="mt-10">
          <CTASection
            headline="Ready for Clean Windows in Queen Creek?"
            subheadline="Get your free quote today. We serve Queen Creek, San Tan Valley, Gilbert, and the East Valley."
            quoteHref="#quote"
          />
        </div>
      </section>
    </>
  );
}
