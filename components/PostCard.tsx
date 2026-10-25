import Link from "next/link";
import type { Post } from "@/lib/posts";

const covers = [
  "from-blue-700 to-blue-500",
  "from-blue-900 to-blue-600",
  "from-cyan-glow/80 to-blue-600",
  "from-blue-800 to-cyan-glow/70",
];

export function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${covers[index % covers.length]}`}>
        <svg className="absolute inset-x-0 bottom-0 w-[200%] transition-transform duration-[2500ms] ease-out group-hover:-translate-x-1/4" viewBox="0 0 2880 100" preserveAspectRatio="none" height="70">
          <path d="M0 50 Q 180 0 360 50 T 720 50 T 1080 50 T 1440 50 T 1800 50 T 2160 50 T 2520 50 T 2880 50 V100 H0 Z" fill="#fff" fillOpacity=".25" />
        </svg>
        <svg className="absolute inset-x-0 bottom-0 w-[200%] -translate-x-1/4 transition-transform duration-[2500ms] ease-out group-hover:translate-x-0" viewBox="0 0 2880 100" preserveAspectRatio="none" height="46">
          <path d="M0 50 Q 180 0 360 50 T 720 50 T 1080 50 T 1440 50 T 1800 50 T 2160 50 T 2520 50 T 2880 50 V100 H0 Z" fill="#fff" />
        </svg>
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700">{post.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-slate-500">{fmtDate(post.date)} · {post.read} read</p>
        <h3 className="mt-2 text-[1.3rem] font-medium leading-snug transition-colors group-hover:text-blue-600">{post.title}</h3>
        <p className="mt-3 flex-1 text-[15px] text-slate-600">{post.excerpt}</p>
        <span className="mt-5 text-sm font-semibold text-blue-600">Read article →</span>
      </div>
    </Link>
  );
}
