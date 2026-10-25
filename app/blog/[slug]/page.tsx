import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import PostCard, { fmtDate } from "@/components/PostCard";
import ReadingProgress from "@/components/ReadingProgress";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== post.slug);
  const more = [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <PageHero eyebrow={`${post.category} · ${fmtDate(post.date)} · ${post.read} read`} title={post.title} />
      <article className="container-x max-w-3xl pb-16 pt-6">
        <div className="mb-8 flex items-center gap-3 border-b border-blue-100 pb-6">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-blue-700 to-cyan-glow font-serif text-sm font-semibold text-white">CA</span>
          <div className="text-sm"><p className="font-semibold text-blue-950">Crestova Advisory Team</p><p className="text-slate-500">{fmtDate(post.date)} · {post.read} read · {post.category}</p></div>
        </div>
        <p className="font-serif text-2xl leading-relaxed text-blue-900">{post.excerpt}</p>
        <div className="mt-10 space-y-6 text-[1.075rem] text-slate-700">
          {post.body.map((b, i) => (
            <section key={i} className="space-y-4">
              {b.h && <h2 className="pt-4 text-3xl font-medium">{b.h}</h2>}
              {b.p.map((t, j) => (
                <p key={j}>{t}</p>
              ))}
              {b.list && (
                <ul className="space-y-2">
                  {b.list.map((li) => (
                    <li key={li} className="flex gap-3">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-blue-50 p-7">
          <p className="font-serif text-xl text-blue-950">Want advice on your own situation?</p>
          <p className="mt-1 text-slate-600">This article is general information, not personal advice. Rules differ by country.</p>
          <Link href="/contact" className="btn btn-primary mt-5">Talk to an adviser</Link>
        </div>
      </article>
      <section className="container-x pb-24">
        <h2 className="mb-6 text-3xl font-medium">Keep reading</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {more.map((p, i) => (
            <PostCard key={p.slug} post={p} index={i + 1} />
          ))}
        </div>
      </section>
    </>
  );
}
