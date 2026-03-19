import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Thank You | We'll Be in Touch Soon",
  description: "Thank you for requesting a quote. We'll contact you shortly.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Thank You</h1>
      <p className="mt-4 text-lg text-slate-600">
        We've received your request and will get back to you soon with a quote for window cleaning
        in Queen Creek.
      </p>
      <p className="mt-2 text-slate-600">
        Need to reach us right away? Call us at{" "}
        <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-accent hover:underline">
          {SITE.phone}
        </a>
        .
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
        >
          Contact Again
        </Link>
      </div>
    </section>
  );
}
