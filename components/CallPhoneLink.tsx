"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { SITE } from "@/lib/constants";

const telHref = `tel:${SITE.phoneRaw}`;

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  children: ReactNode;
};

/**
 * Phone link that fires Google Ads call conversion before opening `tel:`.
 * Requires `gtag_report_conversion` from root layout (after gtag.js).
 */
export default function CallPhoneLink({
  children,
  className,
  "aria-label": ariaLabel,
  ...rest
}: Props) {
  return (
    <a
      href={telHref}
      className={className}
      aria-label={ariaLabel ?? `Call ${SITE.phone}`}
      onClick={(e) => {
        e.preventDefault();
        if (typeof window.gtag_report_conversion === "function") {
          window.gtag_report_conversion(telHref);
        } else {
          window.location.href = telHref;
        }
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
