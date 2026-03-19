import type { FAQItem } from "./FAQ";

export type Review = {
  author: string;
  location?: string;
  rating: number;
  text: string;
  date?: string;
};

export default function ReviewCard({ author, location, rating, text, date }: Review) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex text-accent" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < rating ? "text-accent" : "text-slate-200"}>
              ★
            </span>
          ))}
        </div>
        <span className="text-sm font-medium text-slate-700">{rating}/5</span>
      </div>
      <p className="mb-4 text-slate-700">{text}</p>
      <footer>
        <p className="font-semibold text-slate-900">{author}</p>
        {location && <p className="text-sm text-slate-500">{location}</p>}
        {date && <p className="text-sm text-slate-400">{date}</p>}
      </footer>
    </article>
  );
}

export function ReviewsSection({
  reviews,
  title = "What Queen Creek Homeowners Say",
  faqItems,
}: {
  reviews: Review[];
  title?: string;
  faqItems?: FAQItem[];
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
