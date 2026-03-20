import Link from "next/link";
import { SITE } from "@/lib/constants";
import HeroStats from "./HeroStats";

const telHref = `tel:${SITE.phoneRaw}`;

type HeroProps = {
  headline: string;
  subheadline: string;
  /** Link for "Get Free Quote Now" — use "#quote" when form is on same page, else "/contact#quote" */
  quoteLink?: string;
  compact?: boolean;
};

export default function Hero({ headline, subheadline, quoteLink = "/contact#quote", compact = false }: HeroProps) {
  return (
    <section className="relative min-h-[32rem] overflow-hidden text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src="/NEWHERO.MOV" type="video/quicktime" />
        <source src="/NEWHERO.MOV" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary/75 to-primary-dark/85" />
      <div className="relative z-10 mx-auto flex min-h-[32rem] max-w-6xl flex-col justify-center px-4 py-12 sm:px-6 md:py-16 lg:py-20">
        <div className="relative">
          <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/95 backdrop-blur-sm sm:text-sm">
            Partner of Arizona Window Washing Pros
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {headline}
          </h1>
          <p className="mt-4 text-lg text-slate-200 md:text-xl">{subheadline}</p>
          <HeroStats />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href={quoteLink}
              className="inline-flex justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              Get Free Quote Now
            </Link>
            <a
              href={telHref}
              className="inline-flex justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              aria-label={`Call ${SITE.phone}`}
            >
              Call Now
            </a>
          </div>
          <p className="mt-1 text-sm text-slate-300">
            Serving Queen Creek, AZ and the East Valley • {SITE.phone}
          </p>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-white/95 sm:text-base">
              Top-rated window cleaning in Queen Creek, Arizona
            </p>

            <p className="text-sm font-semibold text-secondary-light sm:text-base">
              Outdoor Cleaning and Indoor Cleaning
            </p>

            <div className="space-y-1 text-sm text-slate-100/90">
              <p className="inline-flex items-center gap-2">
                <span aria-hidden className="text-secondary-light">
                  ✓
                </span>
                Licensed &amp; Insured
              </p>
              <p className="inline-flex items-center gap-2">
                <span aria-hidden className="text-secondary-light">
                  ✓
                </span>
                Streak-Free Guarantee
              </p>
              <p className="inline-flex items-center gap-2">
                <span aria-hidden className="text-secondary-light">
                  ✓
                </span>
                Free Estimate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
