"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { markets } from "@/lib/data";

const R = 2;
const HUB = { lat: 31.5, lon: 74.3 }; // Lahore

function toVec(lat: number, lon: number, r = R) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const th = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th));
}

function Dots() {
  const geo = useMemo(() => {
    const n = 2800;
    const pos = new Float32Array(n * 3);
    const g = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = g * i;
      pos[i * 3] = Math.cos(t) * r * R * 1.002;
      pos[i * 3 + 1] = y * R * 1.002;
      pos[i * 3 + 2] = Math.sin(t) * r * R * 1.002;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geometry;
  }, []);
  return (
    <points geometry={geo}>
      <pointsMaterial size={0.036} color="#2F74F2" sizeAttenuation transparent opacity={0.95} depthWrite={false} />
    </points>
  );
}

function Arc({ to, index }: { to: { lat: number; lon: number }; index: number }) {
  const { curve, pts } = useMemo(() => {
    const a = toVec(HUB.lat, HUB.lon);
    const b = toVec(to.lat, to.lon);
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const lift = R + a.distanceTo(b) * 0.38;
    const c = new THREE.QuadraticBezierCurve3(a, mid.normalize().multiplyScalar(lift), b);
    return { curve: c, pts: c.getPoints(56) };
  }, [to]);
  const pulse = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!pulse.current) return;
    const t = (clock.elapsedTime * 0.22 + index * 0.17) % 1;
    pulse.current.position.copy(curve.getPoint(t));
  });
  return (
    <group>
      <Line points={pts} color="#35D4F5" lineWidth={1.3} transparent opacity={0.75} />
      <mesh ref={pulse}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

function Marker({ lat, lon, hub = false }: { lat: number; lon: number; hub?: boolean }) {
  const p = useMemo(() => toVec(lat, lon, R * 1.005), [lat, lon]);
  const ring = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ring.current) return;
    const s = 1 + ((clock.elapsedTime * 0.8) % 1) * 2.4;
    ring.current.scale.setScalar(s);
    (ring.current.material as THREE.MeshBasicMaterial).opacity = 0.7 * (1 - ((clock.elapsedTime * 0.8) % 1));
  });
  return (
    <group position={p} onUpdate={(g) => g.lookAt(0, 0, 0)}>
      <mesh>
        <sphereGeometry args={[hub ? 0.085 : 0.06, 16, 16]} />
        <meshBasicMaterial color={hub ? "#ffffff" : "#0D3F99"} />
      </mesh>
      <mesh ref={ring}>
        <ringGeometry args={[0.07, 0.085, 32]} />
        <meshBasicMaterial color="#1456D6" transparent opacity={0.6} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Globe() {
  const group = useRef<THREE.Group>(null);
  const rot = useRef(-1.6);
  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const scroll = typeof window !== "undefined" ? window.scrollY : 0;
    rot.current += dt * 0.16;
    g.rotation.y = rot.current + scroll * 0.0016;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, 0.28 + state.pointer.y * 0.22, 0.05);
    g.position.x = THREE.MathUtils.lerp(g.position.x, state.pointer.x * 0.25, 0.05);
  });
  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[R * 0.992, 64, 64]} />
        <meshBasicMaterial color="#E4EEFF" />
      </mesh>
      <mesh>
        <sphereGeometry args={[R * 1.1, 48, 48]} />
        <meshBasicMaterial color="#5E9BFF" transparent opacity={0.07} side={THREE.BackSide} depthWrite={false} />
      </mesh>
      <Dots />
      {markets
        .filter((m) => m.code !== "PK")
        .map((m, i) => (
          <Arc key={m.code} to={m} index={i} />
        ))}
      {markets.map((m) => (
        <Marker key={m.code} lat={m.lat} lon={m.lon} hub={m.code === "PK"} />
      ))}
    </group>
  );
}

function Orbit() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.25;
  });
  return (
    <group rotation={[1.25, 0.2, 0.3]}>
      <mesh>
        <torusGeometry args={[R * 1.42, 0.008, 12, 160]} />
        <meshBasicMaterial color="#5E9BFF" transparent opacity={0.55} />
      </mesh>
      <group ref={ref}>
        <mesh position={[R * 1.42, 0, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#1456D6" emissive="#2F74F2" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </group>
  );
}

function Bars() {
  const heights = [0.5, 0.85, 0.65, 1.2, 1.55];
  return (
    <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.9}>
      <group position={[-2.6, -1.55, 0.9]} rotation={[0.15, 0.55, 0]}>
        {heights.map((h, i) => (
          <mesh key={i} position={[i * 0.3, h / 2, 0]}>
            <boxGeometry args={[0.2, h, 0.2]} />
            <meshStandardMaterial color={i === 4 ? "#1456D6" : "#9CC2FF"} roughness={0.25} metalness={0.3} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Coin() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
      <mesh position={[2.0, 1.9, 0.8]} rotation={[1.1, 0.4, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.09, 48]} />
        <meshStandardMaterial color="#2F74F2" metalness={0.5} roughness={0.25} />
      </mesh>
    </Float>
  );
}

export default function GlobeScene() {
  const [visible, setVisible] = useState(true);
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas flat dpr={[1, 1.75]} camera={{ position: [0, 0, 11.2], fov: 38 }} gl={{ alpha: true, antialias: true }} frameloop={visible ? "always" : "never"}>
        <ambientLight intensity={1.05} />
        <directionalLight position={[4, 5, 5]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-5, -2, 3]} intensity={18} color="#5E9BFF" />
        <Globe />
        <Orbit />
        <Bars />
        <Coin />
      </Canvas>
    </div>
  );
}

