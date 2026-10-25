"use client";
import dynamic from "next/dynamic";

const Placeholder = () => (
  <div className="grid h-full w-full place-items-center">
    <div className="h-48 w-48 animate-pulse rounded-full bg-blue-100/70" />
  </div>
);

const Globe = dynamic(() => import("./GlobeScene"), { ssr: false, loading: Placeholder });
const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false, loading: Placeholder });

/**
 * Hero 3D visual.
 * Set NEXT_PUBLIC_SPLINE_SCENE to a published Spline scene URL (…/scene.splinecode)
 * to render your own Spline design here. Otherwise the built-in Three.js globe is used.
 */
export default function HeroVisual() {
  const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE;
  return scene ? <Spline scene={scene} /> : <Globe />;
}
