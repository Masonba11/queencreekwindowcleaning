import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import { CONTACT_FAQ } from "@/lib/faq";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Free Quote for Window Cleaning Queen Creek AZ",
  description:
    "Get a free quote for window cleaning in Queen Creek, AZ. Contact us by form or phone. Serving Queen Creek and the East Valley.",
  path: "/contact",
});

const telHref = `tel:${SITE.phoneRaw}`;

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-800 py-12 text-white md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Contact Us</h1>
          <p className="mt-3 text-lg text-slate-200">
            Get a free quote for window cleaning in Queen Creek. We'll respond quickly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Get Your Free Quote</h2>
            <p className="mt-2 text-slate-600">
              Fill out the form and we'll get back to you with a clear quote. No obligation. You can
              also call us directly for faster service.
            </p>
            <div className="mt-8 w-full max-w-lg mx-auto">
              <ContactForm id="quote" showHeading={false} variant="default" />
            </div>
          </div>
          <div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Call or Email</h3>
              <a
                href={telHref}
                className="mt-2 block text-xl font-bold text-accent hover:underline"
                aria-label={`Call ${SITE.phone}`}
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2 block text-secondary-light hover:text-secondary-light/90 hover:underline"
              >
                {SITE.email}
              </a>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">Service Area</h3>
              <p className="mt-2 text-slate-600">{SITE.serviceArea}</p>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">Hours</h3>
              <p className="mt-2 text-slate-600">{SITE.hours}</p>
            </div>
            <div className="mt-8">
              <ServiceAreas />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FAQ items={CONTACT_FAQ} title="Common Questions" id="faq" />
        </div>
      </section>
    </>
  );
}
