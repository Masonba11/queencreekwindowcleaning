import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, BLOG_POSTS } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import CTASection from "@/components/CTASection";

function renderBody(body: string) {
  const paragraphs = body.split(/\n\n+/).filter(Boolean);
  return paragraphs.map((p, i) => {
    const content = p.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return <p key={i} className="mt-4 text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />;
  });
}

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    openGraph: { type: "article", publishedTime: post.date },
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Link href="/blog" className="text-sm font-medium text-secondary-light hover:underline">
          ← Back to Blog
        </Link>
        <header className="mt-4">
          <time dateTime={post.date} className="text-sm text-slate-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">{post.title}</h1>
        </header>
        <div className="mt-8">{renderBody(post.body)}</div>
        <div className="mt-10 rounded-lg bg-slate-50 p-6">
          <p className="text-slate-700">
            Need professional window cleaning in Queen Creek? We offer free quotes for indoor and
            outdoor window washing.{" "}
            <Link href="/contact" className="font-semibold text-secondary-light hover:underline">
              Contact us
            </Link>{" "}
            or call for a no-obligation estimate.
          </p>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xl font-bold text-slate-900">More from our blog</h2>
            <ul className="mt-4 space-y-2">
              {otherPosts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-secondary-light hover:underline font-medium"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection
        headline="Ready for Clean Windows in Queen Creek?"
        subheadline="Get a free quote. We serve Queen Creek and the East Valley."
      />
    </>
  );
}
