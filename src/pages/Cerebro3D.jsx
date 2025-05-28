import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";
import { useTranslation } from "react-i18next";

// Chaves das regiões
const REGIONS = ["cortex", "hipocampo", "ventriculos"];

// Ícones para cada região
const REGION_ICONS = {
  cortex: "🧠",
  hipocampo: "🔵",
  ventriculos: "🟦",
};

function RegionTooltip({ regionKey, infoType, color }) {
  const { t } = useTranslation();
  return (
    <Html position={[0, 1.1, 0]}>
      <div style={{
        color: "#fff",
        background: color || "#222c",
        padding: 10,
        borderRadius: 8,
        minWidth: 180,
        border: `2px solid ${color}`,
        fontSize: 15,
        boxShadow: "0 4px 16px #0008"
      }}>
        <div style={{ fontWeight: "bold", fontSize: 20 }}>
          {REGION_ICONS[regionKey]} {t(`regions.${regionKey}.name`)}
        </div>
        <div style={{ marginTop: 8 }}>
          <span style={{ fontWeight: "bold", color: infoType === "normal" ? "#287" : "#c33" }}>
            {infoType === "normal" ? t("normal") + ": " : t("alzheimer") + ": "}
          </span>
          {infoType === "normal"
            ? t(`regions.${regionKey}.diffNormal`)
            : t(`regions.${regionKey}.diffAlzheimer`)}
        </div>
      </div>
    </Html>
  );
}

function BrainModel({ modelPath, highlightRegion, infoType, showTooltips }) {
  const { nodes } = useGLTF(modelPath);

  return (
    <group>
      {Object.entries(nodes).map(([name, mesh]) => {
        const regionKey = REGIONS.find(key =>
          name.toLowerCase().includes(key)
        );
        const isHighlighted = highlightRegion && regionKey === highlightRegion;
        // Cor personalizada ou padrão
        const color = regionKey === "cortex" ? "#5AD2F4"
          : regionKey === "hipocampo" ? "#FF708A"
            : regionKey === "ventriculos" ? "#FCEB8A"
              : "#b6ccd2";
        return (
          <mesh
            key={name}
            geometry={mesh.geometry}
            material={mesh.material}
            material-color={isHighlighted ? color : "#b6ccd2"}
            castShadow
            receiveShadow
          >
            {showTooltips && isHighlighted && (
              <RegionTooltip regionKey={regionKey} infoType={infoType} color={color} />
            )}
          </mesh>
        );
      })}
    </group>
  );
}

export default function BrainCompare3D() {
  const { t } = useTranslation();
  const [highlight, setHighlight] = useState("");
  const [sideBySide, setSideBySide] = useState(true);

  // Texto abaixo: informações da região selecionada
  const differencesText = highlight ? (
    <div className="row justify-content-center mb-3">
      <div className="col-md-10">
        <div className="alert alert-info text-start" style={{ fontSize: "1.13rem" }}>
          <div className="mb-2">
            <span style={{ fontSize: 22 }}>{REGION_ICONS[highlight]}</span>{" "}
            <b>{t(`regions.${highlight}.name`)}</b>
          </div>
          <div>
            <b>{t("function")}:</b> {t(`regions.${highlight}.desc`)}
          </div>
          <div className="mt-2">
            <b>{t("diff_healthy")}:</b><br />
            <span style={{ color: "#278" }}>{t(`regions.${highlight}.diffNormal`)}</span>
          </div>
          <div className="mt-2">
            <b>{t("diff_alzheimer")}:</b><br />
            <span style={{ color: "#b00" }}>{t(`regions.${highlight}.diffAlzheimer`)}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="alert alert-secondary text-center" style={{ fontSize: "1.08rem" }}>
      {t("select_region_to_compare")}
    </div>
  );

  return (
    <div className="container py-4">
      <h1 className="fw-bold text-center mb-4">{t("brain3d")}</h1>
      {/* Botões das regiões */}
      <div className="mb-3 d-flex justify-content-center gap-2 flex-wrap">
        {REGIONS.map(regionKey => (
          <button
            key={regionKey}
            className={`btn btn-outline-primary${highlight === regionKey ? " active" : ""}`}
            onClick={() => setHighlight(regionKey)}
          >
            {REGION_ICONS[regionKey]} {t(`regions.${regionKey}.name`)}
          </button>
        ))}
        <button className="btn btn-outline-secondary" onClick={() => setHighlight("")}>
          {t("clear_selection")}
        </button>
        <button
          className="btn btn-success ms-3"
          onClick={() => setSideBySide(s => !s)}
        >
          {sideBySide ? t("single_mode") : t("comparison_mode")}
        </button>
      </div>
      {/* Canvas com comparação dos cérebros */}
      <div
        style={{
          width: "100%",
          height: "450px",
          background: "#0b1a2e",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 7]} intensity={0.9} />
          <Suspense fallback={<Html><div style={{ color: "white" }}>{t("loading")}</div></Html>}>
            {sideBySide ? (
              <>
                {/* Cérebro Normal */}
                <group position={[-1.2, 0, 0]}>
                  <BrainModel
                    modelPath="/assets/Brain.glb"
                    highlightRegion={highlight}
                    infoType="normal"
                    showTooltips={!!highlight}
                  />
                </group>
                {/* Cérebro Alzheimer */}
                <group position={[1.2, 0, 0]}>
                  <BrainModel
                    modelPath="/assets/BrainAlzheimer.glb"
                    highlightRegion={highlight}
                    infoType="alzheimer"
                    showTooltips={!!highlight}
                  />
                </group>
              </>
            ) : (
              <BrainModel
                modelPath="/assets/Brain.glb"
                highlightRegion={highlight}
                infoType="normal"
                showTooltips={!!highlight}
              />
            )}
          </Suspense>
          <OrbitControls enablePan enableZoom enableRotate />
        </Canvas>
      </div>
      {/* Informações abaixo dos cérebros */}
      <div className="mt-4">
        {differencesText}
      </div>
      <div className="text-center mt-3 text-muted">
        {t("brain3d_desc")}
      </div>
    </div>
  );
}

// Pré-carrega os modelos
useGLTF.preload("/assets/Brain.glb");
useGLTF.preload("/assets/BrainAlzheimer.glb");
