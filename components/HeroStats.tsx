"use client";

import { useEffect, useMemo, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp({
  from,
  to,
  durationMs,
}: {
  from: number;
  to: number;
  durationMs: number;
}) {
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const [value, setValue] = useState(from);

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);
      const next = from + (to - from) * eased;
      setValue(next);

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, from, prefersReducedMotion, to]);

  return value;
}

export default function HeroStats() {
  const homeowners = useCountUp({ from: 0, to: 400, durationMs: 10000 });
  const rating = useCountUp({ from: 0, to: 5, durationMs: 2000 });

  // We animate rating to 5 stars; show whole stars only.
  const ratingInt = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:items-center">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-medium text-slate-100/90">Homeowners served</div>
        <div className="mt-1 text-3xl font-bold tracking-tight text-white">
          {Math.round(homeowners).toLocaleString("en-US")}+
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-medium text-slate-100/90">Rated</div>
        <div className="mt-1 flex items-center gap-2">
          <div className="flex text-accent" aria-label={`Rating: ${ratingInt} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < ratingInt ? "opacity-100" : "opacity-25"}>
                ★
              </span>
            ))}
          </div>
          <div className="text-sm font-semibold text-white">{ratingInt}/5</div>
        </div>
      </div>
    </div>
  );
}

