import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Crestova Advisory home">
      <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-white shadow-card ring-1 ring-blue-100">
        <Image src="/logo.png" alt="" width={44} height={44} priority />
      </span>
      <span className="leading-none">
        <span className={`block font-serif text-[1.15rem] font-semibold tracking-[0.08em] ${light ? "text-white" : "text-blue-950"}`}>CRESTOVA</span>
        <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.34em] ${light ? "text-blue-300" : "text-blue-600"}`}>Advisory</span>
      </span>
    </Link>
  );
}
