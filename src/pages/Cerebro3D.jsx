import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

function Cerebro() {
  const meshRef = useRef();

  // Rotaciona o cérebro suavemente
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="#9b59b6" wireframe={false} />
    </mesh>
  );
}

export default function Cerebro3D() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Cerebro />
        <OrbitControls />
        <Html position={[0, -2.5, 0]}>
          <div style={{ color: "white", textAlign: "center" }}>
            <h2>Cérebro 3D Interativo</h2>
            <p>Use o mouse para girar e ampliar</p>
          </div>
        </Html>
      </Canvas>
    </div>
  );
}
