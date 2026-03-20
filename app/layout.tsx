import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OurWorkGalleryShell from "@/components/OurWorkGalleryShell";
import StickyCTA from "@/components/StickyCTA";
import { SITE } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} | Professional Window Washing Queen Creek AZ`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Professional window cleaning in Queen Creek, AZ. Residential indoor and outdoor window washing. Free quotes. Call for streak-free windows.",
  openGraph: {
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "Nx-n7hxA87MpDUgoQRXXOOe7C8hePVbqZjvmABZ_UQ0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = localBusinessSchema();
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google tag (gtag.js) — single instance for entire site via root layout */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18028733189" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18028733189');
            `,
          }}
        />
        {/* Google Ads — click-to-call conversion; use gtag_report_conversion on phone links */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.gtag_report_conversion = function(url) {
                var callback = function () {
                  if (typeof url !== 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  send_to: 'AW-18028733189/uvazCL2QnYwcEIXG4pRD',
                  value: 1.0,
                  currency: 'USD',
                  event_callback: callback
                });
                return false;
              };
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-slate-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <OurWorkGalleryShell />
        <Footer />
        <StickyCTA />
        <div className="h-20 md:h-24" aria-hidden />
      </body>
    </html>
  );
}
