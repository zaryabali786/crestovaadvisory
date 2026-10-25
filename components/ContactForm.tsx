"use client";
import { useState } from "react";
import { services, site } from "@/lib/data";

const field =
  "w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Company: ${d.get("company") || "-"}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone") || "-"}`,
      `Market: ${d.get("market")}`,
      `Interested in: ${d.get("service")}`,
      "",
      `${d.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Consultation request: " + d.get("name"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-blue-950">Full name<input required name="name" className={`${field} mt-1.5`} /></label>
        <label className="block text-sm font-medium text-blue-950">Company<input name="company" className={`${field} mt-1.5`} /></label>
        <label className="block text-sm font-medium text-blue-950">Email<input required type="email" name="email" className={`${field} mt-1.5`} /></label>
        <label className="block text-sm font-medium text-blue-950">Phone / WhatsApp<input name="phone" className={`${field} mt-1.5`} /></label>
        <label className="block text-sm font-medium text-blue-950">Market
          <select name="market" className={`${field} mt-1.5`}>
            {["United States", "United Kingdom", "Canada", "UAE", "Saudi Arabia", "Australia", "Pakistan", "Other"].map((m) => <option key={m}>{m}</option>)}
          </select>
        </label>
        <label className="block text-sm font-medium text-blue-950">Interested in
          <select name="service" className={`${field} mt-1.5`}>
            <option>Not sure yet</option>
            {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          </select>
        </label>
      </div>
      <label className="block text-sm font-medium text-blue-950">How can we help?
        <textarea required name="message" rows={5} className={`${field} mt-1.5 resize-y`} />
      </label>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">Send enquiry →</button>
      {sent && <p role="status" className="rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-800">Your email app should open with the message ready to send. If it did not, write to {site.email}.</p>}
    </form>
  );
}
