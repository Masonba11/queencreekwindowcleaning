"use client";

import dynamic from "next/dynamic";

const OurWorkGallery = dynamic(() => import("./OurWorkGallery"), {
  ssr: false,
  loading: () => (
    <section
      id="our-work"
      className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-12 md:py-16"
      aria-labelledby="our-work-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="our-work-heading" className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
          Our Work
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:gap-6" role="list">
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i} className="aspect-[4/3] animate-pulse rounded-lg bg-slate-200" aria-hidden />
          ))}
        </ul>
      </div>
    </section>
  ),
});

/** Client boundary so `ssr: false` dynamic import is valid (not allowed in Server Components). */
export default function OurWorkGalleryShell() {
  return <OurWorkGallery />;
}
