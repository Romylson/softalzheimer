import React from "react";
import imgVolume from "/src/assets/volume.png";
import imgHipocampo from "/src/assets/hipocamporegiao.png";
import imgCortex from "/src/assets/cortexregiao.png";
import imgSulcos from "/src/assets/sulcos.png";

const RegioesAfetadas = () => {
  return (
    <div className="regioes-afetadas" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
      {/* Volume cerebral */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={imgVolume} alt="Volume cerebral" style={{ width: "300px", borderRadius: "40px" }} />
        <p><strong>Volume cerebral:</strong> No Alzheimer há redução global de volume cerebral (atrofia), visível principalmente em regiões específicas.</p>
      </div>

      {/* Hipocampo */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={imgHipocampo} alt="Hipocampo" style={{ width: "300px", borderRadius: "6px" }} />
        <p><strong>Hipocampo:</strong> O hipocampo é essencial para memória e sofre atrofia precoce na doença.</p>
      </div>

      {/* Córtex */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={imgCortex} alt="Córtex cerebral" style={{ width: "300px", borderRadius: "6px" }} />
        <p><strong>Córtex:</strong> O córtex é responsável pela cognição e é uma das regiões mais afetadas pelo Alzheimer.</p>
      </div>

      {/* Sulcos e Giros */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={imgSulcos} alt="Sulcos e giros" style={{ width: "300px", borderRadius: "6px" }} />
        <p><strong>Sulcos e giros:</strong> Alargamento dos sulcos e diminuição dos giros são sinais clássicos, deixando o cérebro com aspecto murcho.</p>
      </div>

      {/* Dica */}
      <p style={{ fontSize: "0.9rem", color: "gray", marginTop: "1rem" }}>
        <strong>Dica:</strong> As alterações começam anos antes dos sintomas. O diagnóstico precoce ajuda no tratamento.
      </p>
    </div>
  );
};

export default RegioesAfetadas;
