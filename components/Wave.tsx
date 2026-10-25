// Animated wavy divider. `fill` is the colour of the section the wave leads INTO.
export default function Wave({
  fill = "#ffffff", flip = false, className = "", height = 90,
}: { fill?: string; flip?: boolean; className?: string; height?: number }) {
  const d = "M0 50 Q 180 0 360 50 T 720 50 T 1080 50 T 1440 50 T 1800 50 T 2160 50 T 2520 50 T 2880 50 V100 H0 Z";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 overflow-hidden leading-[0] ${flip ? "top-0 rotate-180" : "bottom-0"} ${className}`}
      style={{ height }}
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute bottom-0 h-full w-[200%] animate-wave opacity-40" style={{ animationDuration: "26s" }}>
        <path d={d} fill={fill} transform="translate(0 -6)" />
      </svg>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute bottom-0 h-[88%] w-[200%] animate-wave opacity-70" style={{ animationDuration: "18s", animationDirection: "reverse" }}>
        <path d={d} fill={fill} />
      </svg>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute bottom-0 h-[70%] w-[200%] animate-wave" style={{ animationDuration: "34s" }}>
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
}
