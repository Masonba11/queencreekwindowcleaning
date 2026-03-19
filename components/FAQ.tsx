"use client";

import { useState } from "react";

export type FAQItem = { question: string; answer: string };

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
  id = "faq",
}: {
  items: FAQItem[];
  title?: string;
  id?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="rounded-lg border border-slate-200 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-800 focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-inset"
              aria-expanded={openIndex === i}
            >
              <span className="font-medium">{item.question}</span>
              <span
                className={`ml-2 shrink-0 text-slate-500 transition ${openIndex === i ? "rotate-180" : ""}`}
                aria-hidden
              >
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all ${openIndex === i ? "max-h-[500px]" : "max-h-0"}`}
            >
              <div className="border-t border-slate-100 px-4 py-3 text-slate-600">
                {item.answer}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
