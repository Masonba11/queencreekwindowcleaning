import Link from "next/link";
import CallPhoneLink from "@/components/CallPhoneLink";
import { SITE } from "@/lib/constants";

export default function CTASection({
  headline = "Ready for Streak-Free Windows in Queen Creek?",
  subheadline = "Get a free quote today. We serve Queen Creek and the East Valley.",
  showFormLink = true,
  quoteHref = "/contact#quote",
}: {
  headline?: string;
  subheadline?: string;
  showFormLink?: boolean;
  /** Use "#quote" when the form is on the same page (home, indoor, outdoor) */
  quoteHref?: string;
}) {
  return (
    <section className="bg-primary py-12 text-white md:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">{headline}</h2>
        <p className="mb-8 text-white/80">{subheadline}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {showFormLink && (
            <Link
              href={quoteHref}
              className="inline-flex rounded-lg bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              Get Free Quote Now
            </Link>
          )}
          <CallPhoneLink className="inline-flex rounded-lg bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary">
            Call Now — {SITE.phone}
          </CallPhoneLink>
        </div>
      </div>
    </section>
  );
}
