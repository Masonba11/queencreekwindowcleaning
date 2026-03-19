import { SITE, SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreas() {
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
      <h2 className="mb-3 text-xl font-bold text-slate-900">
        Proudly Serving Queen Creek & Nearby Areas
      </h2>
      <p className="mb-4 text-slate-700">
        We provide professional window cleaning and window washing throughout Queen Creek, Arizona,
        and the surrounding East Valley. Whether you&apos;re in a residential neighborhood in Queen
        Creek or nearby San Tan Valley, Gilbert, or Chandler, we&apos;re here to help you get
        streak-free windows.
      </p>
      <ul className="flex flex-wrap gap-2">
        {SERVICE_AREAS.map((area) => (
          <li
            key={area}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
          >
            {area}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-slate-600">
        {SITE.serviceArea}. Not sure if we serve your area?{" "}
        <a href="/contact" className="font-medium text-secondary-light hover:underline">
          Contact us
        </a>{" "}
        and we&apos;ll let you know.
      </p>
    </section>
  );
}
