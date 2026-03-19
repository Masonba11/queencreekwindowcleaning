import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

const telHref = `tel:${SITE.phoneRaw}`;

export default function Footer() {
  const flatLinks: { href: string; label: string }[] = [];
  for (const l of NAV_LINKS) {
    if ("children" in l && l.children) {
      for (const c of l.children) flatLinks.push({ href: c.href, label: c.label });
    } else {
      flatLinks.push({ href: l.href, label: l.label });
    }
  }

  return (
    <footer className="border-t border-primary-dark/30 bg-primary text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">{SITE.name}</h3>
            <p className="text-sm">{SITE.tagline}</p>
            <p className="mt-2 text-sm">{SITE.serviceArea}</p>
            <a
              href={telHref}
              className="mt-2 inline-block font-semibold text-secondary-light hover:text-white"
            >
              {SITE.phone}
            </a>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/60">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {flatLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#our-work" className="hover:text-white">
                  Our Work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/60">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="mt-1 text-xs">{SITE.affiliateNote}</p>
        </div>
      </div>
    </footer>
  );
}
