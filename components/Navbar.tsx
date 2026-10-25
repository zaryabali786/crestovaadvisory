"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { serviceGroups, services } from "@/lib/data";

const links = [
  { href: "/about", label: "About", mega: false },
  { href: "/services", label: "Services", mega: true },
  { href: "/industries", label: "Industries", mega: false },
  { href: "/blog", label: "Insights", mega: false },
  { href: "/faq", label: "FAQ", mega: false },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    setMega(false);
    setDrawer(false);
  }, [path]);
  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
  }, [drawer]);

  const dark = path !== "/" && !scrolled && path !== "/not-found";
  const tone = dark ? "text-white" : "text-blue-950";
  const active = (h: string) => path === h || path.startsWith(h + "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 shadow-[0_1px_0_rgba(20,86,214,.1)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo light={dark} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) =>
            l.mega ? (
              <div key={l.href} className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                <Link
                  href={l.href}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:text-blue-600 ${
                    active(l.href) ? (dark ? "text-cyan-glow" : "text-blue-600") : tone
                  }`}
                >
                  {l.label}
                  <svg width="10" height="10" viewBox="0 0 12 12" className={`transition-transform ${mega ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </Link>
                <AnimatePresence>
                  {mega && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-3"
                    >
                      <div className="card grid grid-cols-2 gap-x-8 gap-y-6 p-7 shadow-[0_30px_80px_-20px_rgba(7,29,74,.35)]">
                        {serviceGroups.map((g) => (
                          <div key={g}>
                            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">{g}</p>
                            <ul className="space-y-0.5">
                              {services
                                .filter((s) => s.group === g)
                                .map((s) => (
                                  <li key={s.slug}>
                                    <Link href={`/services/${s.slug}`} className="block rounded-lg px-3 py-2 text-[14.5px] text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
                                      {s.title}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                        <Link href="/services" className="col-span-2 border-t border-blue-100 pt-4 text-sm font-semibold text-blue-600 hover:text-blue-800">
                          View all {services.length} services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:text-blue-600 ${active(l.href) ? (dark ? "text-cyan-glow" : "text-blue-600") : tone}`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Book a Consultation
          </Link>
          <button onClick={() => setDrawer(true)} aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-full border border-blue-200 bg-white/80 lg:hidden">
            <svg width="18" height="18" viewBox="0 0 18 18" stroke="#0A2C6B" strokeWidth="2" strokeLinecap="round">
              <path d="M2 5h14M2 9h14M2 13h14" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {drawer && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-blue-950 p-6 text-white lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo light />
              <button onClick={() => setDrawer(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-white/20">
                <svg width="16" height="16" viewBox="0 0 16 16" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 2l12 12M14 2L2 14" />
                </svg>
              </button>
            </div>
            <nav className="mt-10 flex flex-col">
              {[{ href: "/", label: "Home" }, ...links, { href: "/contact", label: "Contact" }].map((l) => (
                <Link key={l.href} href={l.href} className="border-b border-white/10 py-4 font-serif text-3xl text-white">
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
