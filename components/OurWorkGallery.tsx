import Image from "next/image";
import { getGalleryItems } from "@/lib/gallery";

export default function OurWorkGallery() {
  const items = getGalleryItems();

  if (items.length === 0) {
    return (
      <section id="our-work" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-12 md:py-16" aria-labelledby="our-work-heading">
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
    <section id="our-work" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-12 md:py-16" aria-labelledby="our-work-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="our-work-heading" className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
          Our Work
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:gap-6" role="list">
          {items.map((item) => (
            <li key={item.src} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200/80">
              {item.type === "image" ? (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
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
