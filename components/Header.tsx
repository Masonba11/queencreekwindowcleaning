"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE, NAV_LINKS } from "@/lib/constants";

const telHref = `tel:${SITE.phoneRaw}`;

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-40 border-b border-white/10 bg-primary/70 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center font-bold text-white">
          <Image
            src="/QueenCreekWindowCleaninglogo.png"
            alt={SITE.name}
            width={400}
            height={178}
            className="h-16 w-auto sm:h-24 md:h-32 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-offset-2 focus:ring-offset-primary rounded"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <span className="text-xs">▼</span>
                </button>
                {servicesOpen && (
                  <ul className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-primary hover:bg-neutral-100 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium ${pathname === link.href ? "text-secondary-light" : "text-white/90 hover:text-white"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={telHref}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover"
            aria-label={`Call ${SITE.phone}`}
          >
            {SITE.phone}
          </a>
          <Link
            href="/contact#quote"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          >
            Get Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-neutral-200 bg-white shadow-lg md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-4" aria-label="Mobile">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) =>
                "children" in link && link.children ? (
                  <li key={link.label}>
                    <p className="px-3 py-2 text-sm font-semibold uppercase tracking-wider text-primary-dark/70">
                      {link.label}
                    </p>
                    <ul className="space-y-0.5">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-3 text-primary-dark hover:bg-neutral-100"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-lg px-3 py-3 font-medium ${pathname === link.href ? "text-secondary" : "text-primary-dark"} hover:bg-neutral-100`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
