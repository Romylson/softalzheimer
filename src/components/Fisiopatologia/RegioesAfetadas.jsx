import React from "react";
import imgVolume from "/src/assets/volume.png";
import imgHipocampo from "/src/assets/hipocamporegiao.png";
import imgCortex from "/src/assets/cortexregiao.png";
import imgSulcos from "/src/assets/sulcos.png";
import { autoresFisiopatologia } from "../../data/fisiopatologia";
import "./fisiopatologia.css";

const autorVolume = autoresFisiopatologia.regioesAfetadas.volume;
const autorHipocampo = autoresFisiopatologia.regioesAfetadas.hipocampo;
const autorCortex = autoresFisiopatologia.regioesAfetadas.cortex;
const autorSulcos = autoresFisiopatologia.regioesAfetadas.sulcos;


const RegioesAfetadas = () => {
  return (
    <div className="regioes-afetadas mt-4">
      {/* Volume cerebral */}
       <div className="regiao-item">
        <div className="regiao-linha">
          <img src={imgVolume} alt="Volume cerebral" />
          <p><strong>Volume cerebral:</strong> No Alzheimer há redução global de volume cerebral (atrofia), visível principalmente em regiões específicas.</p>
        </div>
        <p className="text-muted small mt-2">Imagem: Volume cerebral - Autor: {autorVolume}</p>
      </div>
      {/* Hipocampo */}
       <div className="regiao-item">
        <div className="regiao-linha">
          <img src={imgHipocampo} alt="Hipocampo" />
          <p><strong>Hipocampo:</strong> O hipocampo é essencial para memória e sofre atrofia precoce na doença.</p>
        </div>
        <p className="text-muted small mt-2">Imagem: Hipocampo - Autor: {autorHipocampo}</p>
         </div>
      {/* Córtex */}
      <div className="regiao-item">
        <div className="regiao-linha">
          <img src={imgCortex} alt="Córtex cerebral" />
          <p><strong>Córtex:</strong> O córtex é responsável pela cognição e é uma das regiões mais afetadas pelo Alzheimer.</p>
        </div>
        <p className="text-muted small mt-2">Imagem: Córtex cerebral - Autor: {autorCortex}</p>
         </div>
      {/* Sulcos e Giros */}
      <div className="regiao-item">
        <div className="regiao-linha">
          <img src={imgSulcos} alt="Sulcos e giros" />
          <p><strong>Sulcos e giros:</strong> Alargamento dos sulcos e diminuição dos giros são sinais clássicos, deixando o cérebro com aspecto murcho.</p>
        </div>
        <p className="text-muted small mt-2">Imagem: Sulcos e giros - Autor: {autorSulcos}</p>
      </div>

      {/* Dica */}
      <p style={{ fontSize: "0.9rem", color: "gray", marginTop: "1rem" }}>
        <strong>Dica:</strong> As alterações começam anos antes dos sintomas. O diagnóstico precoce ajuda no tratamento.
      </p>
    </div>
  );
};

export default RegioesAfetadas;
