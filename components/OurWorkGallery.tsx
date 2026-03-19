"use client";

import { useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  type: "image" | "video";
  alt: string;
};

function GallerySkeleton() {
  return (
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
            <li
              key={i}
              className="aspect-[4/3] animate-pulse rounded-lg bg-slate-200"
              aria-hidden
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * Client-only gallery: loads file list from /api/gallery after mount.
 * Avoids next/image + Sharp during `next build` for dozens of large JPGs/MOVs
 * (major cause of Vercel OOM when this lived in the root layout as a server component).
 */
export default function OurWorkGallery() {
  const [items, setItems] = useState<GalleryItem[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/gallery")
      .then((r) => r.json())
      .then((data: { items?: GalleryItem[] }) => {
        if (!cancelled) setItems(Array.isArray(data.items) ? data.items : []);
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (items === null) {
    return <GallerySkeleton />;
  }

  if (items.length === 0) {
    return (
      <section
        id="our-work"
        className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-12 md:py-16"
        aria-labelledby="our-work-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="our-work-heading" className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
            Our Work
          </h2>
          <p className="text-slate-600">Check back soon for more of our window cleaning work.</p>
        </div>
      </section>
    );
  }

  return (
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
          {items.map((item) => (
            <li key={item.src} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200/80">
              {item.type === "image" ? (
                <div className="relative aspect-[4/3]">
                  {/* Native img: no Sharp pipeline at build time; lazy-loads in the browser */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                </div>
              ) : (
                <div className="relative aspect-[4/3]">
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="h-full w-full object-cover"
                    aria-label={item.alt}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
