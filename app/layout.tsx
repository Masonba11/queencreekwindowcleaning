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
