import type { ReactNode } from "react";
export default function Marquee({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`group relative overflow-hidden ${className}`} style={{ maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)" }}>
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {children}
        {children}
      </div>
    </div>
  );
}
