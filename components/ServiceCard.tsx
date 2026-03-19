import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  ctaText?: string;
};

export default function ServiceCard({
  title,
  description,
  href,
  ctaText = "Learn more",
}: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-block font-semibold text-secondary-light hover:text-secondary-light/90 hover:underline"
      >
        {ctaText} →
      </Link>
    </article>
  );
}
