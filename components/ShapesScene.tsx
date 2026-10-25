"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

function Shape({ position, scale = 1, kind }: { position: [number, number, number]; scale?: number; kind: "ico" | "oct" | "torus" | "box" }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.25;
    ref.current.rotation.y += dt * 0.35;
  });
  return (
    <Float speed={1.4} floatIntensity={1.4} rotationIntensity={0.4}>
      <mesh ref={ref} position={position} scale={scale}>
        {kind === "ico" && <icosahedronGeometry args={[1, 0]} />}
        {kind === "oct" && <octahedronGeometry args={[1, 0]} />}
        {kind === "torus" && <torusGeometry args={[0.8, 0.22, 20, 64]} />}
        {kind === "box" && <boxGeometry args={[1.2, 1.2, 1.2]} />}
        <meshStandardMaterial color="#2F74F2" roughness={0.18} metalness={0.5} transparent opacity={0.9} />
      </mesh>
      <mesh position={position} scale={scale * 1.0001}>
        {kind === "ico" && <icosahedronGeometry args={[1, 0]} />}
        {kind === "oct" && <octahedronGeometry args={[1, 0]} />}
        {kind === "torus" && <torusGeometry args={[0.8, 0.22, 20, 64]} />}
        {kind === "box" && <boxGeometry args={[1.2, 1.2, 1.2]} />}
        <meshBasicMaterial color="#9CC2FF" wireframe transparent opacity={0.35} />
      </mesh>
    </Float>
  );
}

export default function ShapesScene() {
  const [visible, setVisible] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas flat dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 40 }} gl={{ alpha: true }} frameloop={visible ? "always" : "never"}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 5]} intensity={2} />
        <pointLight position={[-4, -2, 3]} intensity={25} color="#35D4F5" />
        <Shape position={[-5.2, 1.2, 0]} scale={1.15} kind="ico" />
        <Shape position={[5.0, 1.4, -1]} scale={1} kind="oct" />
        <Shape position={[4.2, -1.6, 0.6]} scale={0.9} kind="torus" />
        <Shape position={[-4.0, -1.8, 0.5]} scale={0.7} kind="box" />
        <Shape position={[0.4, 3.4, -3]} scale={0.55} kind="ico" />
      </Canvas>
    </div>
  );
}

