"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import PostCard, { fmtDate } from "./PostCard";
import type { Post } from "@/lib/posts";

const PAGE = 9;

export default function BlogExplorer({ posts, categories }: { posts: Post[]; categories: string[] }) {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(PAGE);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return posts.filter((p) => (cat === "All" || p.category === cat) && (!s || (p.title + " " + p.excerpt + " " + p.category).toLowerCase().includes(s)));
  }, [posts, cat, q]);

  const showFeatured = cat === "All" && !q.trim();
  const featured = showFeatured ? filtered[0] : null;
  const list = showFeatured ? filtered.slice(1) : filtered;
  const visible = list.slice(0, shown);
  const count = (c: string) => (c === "All" ? posts.length : posts.filter((p) => p.category === c).length);

  return (
    <div className="container-x pb-24 pt-4">
      {/* Controls */}
      <div className="sticky top-20 z-30 -mx-5 mb-10 border-b border-blue-100 bg-white/85 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => { setCat(c); setShown(PAGE); }}
                className={`relative shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${cat === c ? "border-blue-600 text-white" : "border-blue-200 bg-white text-blue-800 hover:border-blue-400"}`}
              >
                {cat === c && <motion.span layoutId="cat-pill" className="absolute inset-0 -z-0 rounded-full bg-blue-600" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative z-10">{c} <span className={cat === c ? "text-blue-200" : "text-slate-400"}>{count(c)}</span></span>
              </button>
            ))}
          </div>
          <label className="relative block lg:w-72">
            <span className="sr-only">Search articles</span>
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="9" r="6" /><path d="M14 14l4 4" /></svg>
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setShown(PAGE); }}
              placeholder="Search articles…"
              className="w-full rounded-full border border-blue-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </label>
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-10">
          <Link href={`/blog/${featured.slug}`} className="group relative grid overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-500 text-white shadow-glow lg:grid-cols-[1.2fr_1fr]">
            <div className="relative z-10 p-8 sm:p-12">
              <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">Latest · {featured.category}</span>
              <h2 className="mt-5 text-3xl font-medium leading-tight !text-white sm:text-4xl">{featured.title}</h2>
              <p className="mt-4 max-w-xl text-blue-100">{featured.excerpt}</p>
              <p className="mt-6 text-sm text-blue-200">{fmtDate(featured.date)} · {featured.read} read</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1">Read article →</span>
            </div>
            <div className="relative hidden min-h-[260px] lg:block">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.path key={i} d={`M-20 ${190 + i * 22} Q 100 ${120 + i * 14} 200 ${190 + i * 18} T 420 ${170 + i * 20}`} fill="none" stroke="#fff" strokeOpacity={0.14 + i * 0.05} strokeWidth="2"
                    animate={{ d: [`M-20 ${190 + i * 22} Q 100 ${120 + i * 14} 200 ${190 + i * 18} T 420 ${170 + i * 20}`, `M-20 ${180 + i * 22} Q 100 ${230 + i * 10} 200 ${170 + i * 18} T 420 ${200 + i * 20}`, `M-20 ${190 + i * 22} Q 100 ${120 + i * 14} 200 ${190 + i * 18} T 420 ${170 + i * 20}`] }}
                    transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }} />
                ))}
              </svg>
              <span className="absolute right-10 top-10 font-serif text-[9rem] font-semibold leading-none text-white/10">Σ</span>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Grid */}
      {visible.length > 0 ? (
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div key={p.slug} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}>
                <PostCard post={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="card mx-auto max-w-md p-10 text-center">
          <p className="font-serif text-2xl">No articles found</p>
          <p className="mt-2 text-slate-600">Try a different keyword or category.</p>
          <button onClick={() => { setQ(""); setCat("All"); }} className="btn btn-ghost mt-5">Clear filters</button>
        </div>
      )}

      {list.length > shown && (
        <div className="mt-12 text-center">
          <button onClick={() => setShown((s) => s + PAGE)} className="btn btn-primary">Load more articles</button>
          <p className="mt-3 text-xs text-slate-500">Showing {visible.length} of {list.length}</p>
        </div>
      )}
    </div>
  );
}
