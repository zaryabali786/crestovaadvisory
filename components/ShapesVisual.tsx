"use client";
import dynamic from "next/dynamic";

const Shapes = dynamic(() => import("./ShapesScene"), { ssr: false });

export default function ShapesVisual() {
  return <Shapes />;
}
