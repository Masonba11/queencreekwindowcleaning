"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";

const telHref = `tel:${SITE.phoneRaw}`;

const PAGES_WITH_QUOTE_FORM = ["/", "/indoor-window-cleaning", "/outdoor-window-cleaning", "/contact"];

export default function StickyCTA() {
  const pathname = usePathname();
  const quoteHref = PAGES_WITH_QUOTE_FORM.includes(pathname) ? "#quote" : "/contact#quote";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-3 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm p-3 safe-area-pb md:gap-4 md:p-4"
      aria-label="Quick actions"
    >
      <Link
        href={quoteHref}
        className="flex-1 max-w-[200px] md:max-w-[220px] rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        Get Free Quote
      </Link>
      <a
        href={telHref}
        className="flex-1 max-w-[200px] md:max-w-[220px] rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
        aria-label={`Call now: ${SITE.phone}`}
      >
        Call Now
      </a>
    </div>
  );
}
