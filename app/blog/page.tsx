import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Window Cleaning Tips & Advice for Queen Creek, AZ",
  description:
    "Tips and advice on window cleaning, window washing, and home care for Queen Creek and Arizona homeowners. Stay informed and get the most from your windows.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-slate-800 py-12 text-white md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Blog</h1>
          <p className="mt-3 text-lg text-slate-200">
            Window cleaning tips, seasonal advice, and local insights for Queen Creek and the East Valley.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <time dateTime={post.date} className="text-sm text-slate-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-secondary-light hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-slate-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 font-semibold text-secondary-light hover:text-secondary-light/90 hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
