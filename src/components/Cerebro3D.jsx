import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";

function Modelo({ highlight }) {
  const { scene } = useGLTF("/models/cerebro.glb");
  const meshRef = useRef();

  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(highlight ? "#ff0000" : "#cccccc");
        }
      });
    }
  }, [highlight]);

  return <primitive ref={meshRef} object={scene} scale={1.5} />;
}

// ... (demais imports)
const REGIOES = [
  {
    nome: "Hipocampo",
    pos: [0.5, 1, 0],
    descricao: "Região crítica para a memória, afetada precocemente na Doença de Alzheimer."
  },
  {
    nome: "Córtex Pré-frontal",
    pos: [-1, 1.5, 1],
    descricao: "Envolvido no planejamento e tomada de decisões."
  },
  {
    nome: "Amígdala",
    pos: [-0.7, 0.7, -1],
    descricao: "Importante para emoções e memória emocional."
  }
];

function AreaInterativa({ nome, descricao, position }) {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.23, 32, 32]} />
      <meshBasicMaterial transparent opacity={0} />
      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-white text-black p-2 rounded shadow text-xs border border-blue-500">
            <strong>{nome}</strong><br />{descricao}
          </div>
        </Html>
      )}
    </mesh>
  );
}

export default function Cerebro3D() {
  const [highlight, setHighlight] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Canvas style={{ height: "500px", width: "100%" }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        <Modelo highlight={highlight} />
        {/* Mapeando todas as áreas interativas */}
        {REGIOES.map((regiao, idx) => (
          <AreaInterativa
            key={regiao.nome}
            nome={regiao.nome}
            descricao={regiao.descricao}
            position={regiao.pos}
          />
        ))}
      </Canvas>

      <div className="flex gap-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setHighlight(true)}
        >
          Destacar Área
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={() => setHighlight(false)}
        >
          Remover Destaque
        </button>
      </div>
    </div>
  );
}
