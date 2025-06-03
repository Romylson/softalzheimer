// ... imports
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Html, useGLTF } from "@react-three/drei";

// Imagens estáticas das regiões
import cortexImg from "../assets/cortex.png";
import hippocampusImg from "../assets/hipocampo.png";
import ventriclesImg from "../assets/ventriculos.png";

function BrainModel({ url, highlight }) {
  const { scene } = useGLTF(url);
  scene.traverse(child => {
    if (child.isMesh) {
      child.material.emissive?.set(highlight ? "orange" : "black");
    }
  });
  return <primitive object={scene} scale={1.2} />;
}

const REGIONS_INFO = {
  all: {
    pt: "Visualize o cérebro completo. Compare estrutura global dos cérebros.",
    en: "View the complete brain. Compare overall brain structures.",
    es: "Visualice el cerebro completo. Compare la estructura global.",
  },
  cortex: {
    pt: "Córtex: Responsável pela cognição. Atrofia evidente em Alzheimer.",
    en: "Cortex: Responsible for cognition. Marked atrophy in Alzheimer's.",
    es: "Corteza: Responsable de la cognición. Atrofia evidente en Alzheimer.",
  },
  hippocampus: {
    pt: "Hipocampo: Essencial para a memória. Atrofia precoce na doença.",
    en: "Hippocampus: Essential for memory. Early atrophy in disease.",
    es: "Hipocampo: Esencial para la memoria. Atrofia temprana en la enfermedad.",
  },
  ventricles: {
    pt: "Ventrículos: Aumentam devido à perda de tecido cerebral em Alzheimer.",
    en: "Ventricles: Enlarge due to brain tissue loss in Alzheimer's.",
    es: "Ventrículos: Aumentan por la pérdida de tejido cerebral.",
  },
};

const REGION_IMAGE = {
  cortex: cortexImg,
  hippocampus: hippocampusImg,
  ventricles: ventriclesImg,
};

export default function Cerebro3DComparativo({ lang = "pt" }) {
  const [showLayer, setShowLayer] = useState("all");
  const [compare, setCompare] = useState(true);

  function removeSelection() {
    setShowLayer("all");
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 flex gap-2 flex-wrap justify-center">
        <button className={`btn btn-outline ${showLayer === "all" ? "active" : ""}`} onClick={() => setShowLayer("all")}>Tudo</button>
        <button className={`btn btn-outline ${showLayer === "cortex" ? "active" : ""}`} onClick={() => setShowLayer("cortex")}>Córtex</button>
        <button className={`btn btn-outline ${showLayer === "hippocampus" ? "active" : ""}`} onClick={() => setShowLayer("hippocampus")}>Hipocampo</button>
        <button className={`btn btn-outline ${showLayer === "ventricles" ? "active" : ""}`} onClick={() => setShowLayer("ventricles")}>Ventrículos</button>
        <button className="btn btn-outline" onClick={() => setCompare(c => !c)}>
          {compare ? "Modo Único" : "Modo Comparativo"}
        </button>
        {showLayer !== "all" && (
          <button className="btn btn-outline text-danger" onClick={removeSelection}>Remover Seleção</button>
        )}
      </div>

      {/* Mostra apenas IMAGEM E TEXTO ao selecionar região */}
          {showLayer !== "all" && REGION_IMAGE[showLayer] && (
              <div className="mb-3 flex flex-col items-center">
                  <img
                      src={REGION_IMAGE[showLayer]}
                      alt={showLayer}
                      style={{
                          width: 520,    // Aumente aqui se quiser ainda maior (ex: 600)
                          maxWidth: "96vw",
                          height: "auto",
                          borderRadius: 16,
                          boxShadow: "0 2px 16px #0003"
                      }}
                  />
                  
              </div>
          )}


      {/* Só exibe o Canvas se showLayer === "all" */}
      {showLayer === "all" && (
        <div style={{ width: "100%", maxWidth: 900, height: 420, display: "flex", gap: 16, justifyContent: "center" }}>
          {compare ? (
            <>
              <div className="w-1/2">
                <Canvas camera={{ position: [0, 0, 4] }}>
                  <Suspense fallback={<Html>Carregando...</Html>}>
                    <Stage environment={null}>
                      <BrainModel url="/models/brain_normal.glb" highlight={false} />
                    </Stage>
                    <OrbitControls enablePan enableZoom enableRotate />
                  </Suspense>
                </Canvas>
                <div className="text-center">Normal</div>
              </div>
              <div className="w-1/2">
                <Canvas camera={{ position: [0, 0, 4] }}>
                  <Suspense fallback={<Html>Carregando...</Html>}>
                    <Stage environment={null}>
                      <BrainModel url="/models/brainalzheimer.glb" highlight={false} />
                    </Stage>
                    <OrbitControls enablePan enableZoom enableRotate />
                  </Suspense>
                </Canvas>
                <div className="text-center">Alzheimer</div>
              </div>
            </>
          ) : (
            <div className="w-full">
              <Canvas camera={{ position: [0, 0, 4] }}>
                <Suspense fallback={<Html>Carregando...</Html>}>
                  <Stage environment={null}>
                    <BrainModel
                      url={compare ? "/models/brain_normal.glb" : "/models/brainalzheimer.glb"}
                      highlight={false}
                    />
                  </Stage>
                  <OrbitControls enablePan enableZoom enableRotate />
                </Suspense>
              </Canvas>
              <div className="text-center">{compare ? "Normal" : "Alzheimer"}</div>
            </div>
          )}
        </div>
      )}

      {/* Texto informativo para "Tudo" */}
      <div className="mt-4 text-base font-semibold text-center" style={{ maxWidth: 600 }}>
        {REGIONS_INFO[showLayer][lang]}
      </div>
    </div>
  );
}
