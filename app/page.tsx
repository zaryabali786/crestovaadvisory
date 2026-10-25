import Link from "next/link";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import LedgerScroll from "@/components/LedgerScroll";
import CloseTimeline from "@/components/CloseTimeline";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import TiltCard from "@/components/TiltCard";
import Marquee from "@/components/Marquee";
import Wave from "@/components/Wave";
import PostCard from "@/components/PostCard";
import ShapesVisual from "@/components/ShapesVisual";
import { industries, markets, services } from "@/lib/data";
import { posts } from "@/lib/posts";

const featured = ["accounting-bookkeeping", "ifrs-financial-reporting", "virtual-cfo", "corporate-tax-advisory", "audit-readiness", "finance-outsourcing"];

export default function Home() {
  const picks = featured.map((s) => services.find((x) => x.slug === s)!);

  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="relative bg-blue-800 pb-32 pt-10 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(53,212,245,.18),transparent_55%)]" />
        <div className="container-x relative grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {[
            { n: 8, s: "+", l: "Years of Big 4-calibre experience" },
            { n: 7, s: "", l: "Global markets served" },
            { n: 5, s: " days", l: "Guaranteed month-end close" },
            { n: 48, s: " hrs", l: "To a fixed-fee proposal" },
          ].map((x, i) => (
            <Reveal key={x.l} delay={i * 0.08} className="px-2 text-center lg:border-l lg:border-white/15 lg:first:border-0">
              <p className="font-serif text-5xl font-medium sm:text-6xl">
                <Counter to={x.n} suffix={x.s} />
              </p>
              <p className="mx-auto mt-2 max-w-[200px] text-sm text-blue-200">{x.l}</p>
            </Reveal>
          ))}
        </div>
        <Wave fill="#ffffff" height={90} />
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What we do</p>
            <h2 className="h-section mt-4">Everything your finance function needs, under one roof.</h2>
            <p className="lead mt-5">From monthly bookkeeping to board-level strategy, delivered under direct Chartered Accountant oversight.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {picks.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <TiltCard>
                  <Link href={`/services/${s.slug}`} className="card group relative flex h-full flex-col overflow-hidden p-7 transition-shadow duration-300 hover:shadow-glow">
                    <span className="absolute -right-6 -top-8 font-serif text-[7rem] font-semibold leading-none text-blue-50 transition-colors duration-300 group-hover:text-blue-100">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative mb-6 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-glow">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
                      </svg>
                    </span>
                    <h3 className="relative text-2xl font-medium">{s.title}</h3>
                    <p className="relative mt-2 flex-1 text-slate-600">{s.short}</p>
                    <span className="relative mt-6 text-sm font-semibold text-blue-600 transition-transform group-hover:translate-x-1">Learn more →</span>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/services" className="btn btn-ghost">View all {services.length} services</Link>
          </Reveal>
        </div>
      </section>

      <LedgerScroll />
      <CloseTimeline />

      <Process />

      {/* Markets + industries */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950 py-36 text-white">
        <Wave fill="#F4F8FF" flip height={90} />
        <Wave fill="#ffffff" height={90} />
        <div className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="container-x relative">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow !text-cyan-glow before:!bg-cyan-glow">Global reach</p>
              <h2 className="h-section mt-4 !text-white">One professional standard across seven markets.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-blue-200">Local compliance depth in every jurisdiction we serve, combined with international reporting standards. Your books stay consistent wherever you operate.</p>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {markets.map((m, i) => (
              <Reveal key={m.code} delay={i * 0.06}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-glow/60 hover:bg-white/10">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-glow/80 text-sm font-bold tracking-wider text-white shadow-glow">{m.code}</span>
                  <p className="mt-2 text-sm font-semibold">{m.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Marquee className="mt-14">
            {industries.map((x) => (
              <Link key={x.slug} href={`/industries/${x.slug}`} className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-blue-100 transition hover:border-cyan-glow hover:text-white">
                {x.title}
              </Link>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Insights */}
      <section className="section">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow">Insights</p>
              <h2 className="h-section mt-4">Practical thinking from our advisers.</h2>
            </div>
            <Link href="/blog" className="btn btn-ghost">All articles</Link>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <PostCard post={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 px-6 pb-28 pt-16 text-center text-white sm:px-16 sm:pt-20">
              <div className="pointer-events-none absolute inset-0 opacity-80">
                <ShapesVisual />
              </div>
              <div className="relative mx-auto max-w-2xl">
                <h2 className="h-section !text-white">Ready for finance you can rely on?</h2>
                <p className="mt-5 text-lg text-blue-100">Book a free 30-minute conversation with a senior Chartered Accountant. No sales process, just an honest look at your numbers.</p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <Link href="/contact" className="btn btn-light">Book a Free Consultation</Link>
                  <Link href="/faq" className="btn border border-white/30 text-white hover:bg-white/10">Read the FAQ</Link>
                </div>
              </div>
              <Wave fill="#ffffff" height={70} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
