import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of service for Queen Creek Window Cleaning.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
      <p className="mt-2 text-slate-500">Last updated: March 2024</p>

      <div className="prose prose-slate mt-8 max-w-none text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">Agreement</h2>
        <p className="mt-2">
          By using the Queen Creek Window Cleaning website or requesting our services, you agree to these Terms of Service. If you do not agree, please do not use our site or services.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Services</h2>
        <p className="mt-2">
          We provide window cleaning and window washing services in Queen Creek, Arizona and surrounding areas. Service requests may be fulfilled by Queen Creek Window Cleaning or by our affiliated network, including Arizona Window Washing Pros. We reserve the right to refuse or limit service at our discretion.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Quotes and Payment</h2>
        <p className="mt-2">
          Quotes provided are estimates and may be subject to change based on the actual scope of work. Payment terms will be communicated at the time of booking. We accept payment as agreed prior to or upon completion of services.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Cancellation and Rescheduling</h2>
        <p className="mt-2">
          We ask that you contact us as soon as possible if you need to cancel or reschedule. Specific cancellation policies may apply depending on the type of service and timing.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Limitation of Liability</h2>
        <p className="mt-2">
          To the fullest extent permitted by law, Queen Creek Window Cleaning and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our liability for any claim shall not exceed the amount paid by you for the service in question.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Website Use</h2>
        <p className="mt-2">
          You may use our website for lawful purposes only. You may not attempt to gain unauthorized access to our systems or use our site to distribute malware or spam.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Changes</h2>
        <p className="mt-2">
          We may update these Terms from time to time. Continued use of our website or services after changes constitutes acceptance of the updated Terms.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-2">
          For questions about these Terms, please contact us through our website or by phone.
        </p>
      </div>
    </section>
  );
}
