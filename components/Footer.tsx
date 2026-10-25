import Link from "next/link";
import Logo from "./Logo";
import Wave from "./Wave";
import { markets, services, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-blue-950 pt-28 text-blue-100">
      <Wave fill="#ffffff" flip height={80} />
      <div className="container-x grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs font-serif text-xl italic text-blue-200">“{site.tagline}”</p>
          <p className="mt-4 max-w-xs text-sm text-blue-300">SECP-registered, Chartered Accountant-led advisory for businesses across seven markets.</p>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-blue-300">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link className="transition hover:text-white" href={`/services/${s.slug}`}>
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link className="font-semibold text-white" href="/services">
                All services →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-blue-300">Company</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/industries", "Industries"],
              ["/blog", "Insights"],
              ["/faq", "FAQ"],
              ["/contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <Link className="transition hover:text-white" href={h}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-blue-300">{markets.map((m) => m.code).join(" · ")}</p>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-blue-300">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="transition hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href={`tel:${site.phoneHref}`}>
                {site.phone}
              </a>
            </li>
            <li className="text-blue-300">{site.hours}</li>
            <li className="pt-2 text-blue-300">{site.offices.map((o) => o.city).join(" · ")}, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-blue-300">
        © {new Date().getFullYear()} {site.legal}, trading as Crestova Advisory. All rights reserved.
      </div>
    </footer>
  );
}
