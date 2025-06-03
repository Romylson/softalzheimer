import React from "react";

// Exemplo com <model-viewer>, requer instalação do pacote e inclusão no index.html
export default function Cerebro3DRA({ model = "normal" }) {
  return (
    <div style={{ width: "100%", maxWidth: 480, margin: "auto" }}>
      <model-viewer
        src={model === "normal"
          ? "/models/brain_normal.glb"
          : "/models/brain_alzheimer.glb"
        }
        alt="Cérebro 3D"
        ar
        auto-rotate
        camera-controls
        style={{ width: "100%", height: 400 }}
        ar-modes="webxr scene-viewer quick-look"
        ios-src="/models/brain_normal.usdz"
      ></model-viewer>
      <div className="text-center mt-1">
        Aponte a câmera para ver em realidade aumentada!
      </div>
    </div>
  );
}
