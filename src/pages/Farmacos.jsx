// src/pages/FarmacosPage.jsx

import React, { useState } from "react";
import FarmacoEnsaiosClinicos from "../components/Artigos/ArtigosPubMed";
import { FaBrain, FaBolt, FaShieldAlt, FaCapsules, FaLeaf } from "react-icons/fa";
import { farmacos } from "../data/farmacos";
import FarmacoCard from "../components/Farmacos/FarmacoCard";

export const ALVOS = {
  "Colinesterase": {
    nome: "Colinesterase",
    icone: <FaBolt color="#fbbf24" />,
    desc: "Inibe a enzima que degrada acetilcolina."
  },
  "Glutamatérgico (NMDA)": {
    nome: "Receptor NMDA",
    icone: <FaBrain color="#06b6d4" />,
    desc: "Bloqueia receptores glutamatérgicos NMDA."
  },
  "Anticorpo Monoclonal": {
    nome: "Placa Beta-amiloide",
    icone: <FaShieldAlt color="#60a5fa" />,
    desc: "Age sobre placas beta-amiloides."
  },
  "Fitoterápico": {
    nome: "Fitoterápico",
    icone: <FaLeaf color="#22c55e" />,
    desc: "Ação antioxidante e neuroprotetora."
  },
  "Outro": {
    nome: "Outro",
    icone: <FaCapsules color="#64748b" />,
    desc: ""
  }
};

// Exemplo de lista de fármacos (pode ajustar conforme seu data/farmacos.js)
export default function FarmacosPage() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">Fármacos no Tratamento do Alzheimer</h1>
      <div className="row g-4">
        {farmacos.map((f) => (
          <div className="col-md-4" key={f.nome}>
            <div className={`card h-100 shadow ${selecionado === f.nome ? "border-primary" : ""}`}>
              {/* FarmacoCard exibe imagem, nome, descrição e alvo (já vem do seu componente personalizado) */}
              <FarmacoCard farmaco={f}>
                {/* Botão de seleção */}
                <button
                  className={`btn btn-sm ${selecionado === f.nome ? "btn-primary" : "btn-outline-primary"} mt-2`}
                  onClick={() => {
                    // Se clicar de novo no mesmo fármaco, desmarca; caso contrário, marca este
                    if (selecionado === f.nome) {
                      setSelecionado(null);
                    } else {
                      setSelecionado(f.nome);
                    }
                  }}
                >
                  {selecionado === f.nome ? "Selecionado" : "Ver Ensaios Clínicos"}
                </button>

                {/* ← Aqui: Só renderiza o componente de Ensaios Clínicos se este fármaco estiver selecionado */}
                {selecionado === f.nome && (
                  <div className="mt-3">
                    {/* ⚠️ Atenção: troquei `nome={f.nome}` para `nomeFarmaco={f.nome}` */}
                    <FarmacoEnsaiosClinicos nomeFarmaco={f.nome} />
                  </div>
                )}
              </FarmacoCard>
            </div>
          </div>
        ))}
      </div>

      {/* Botão para “Limpar seleção” */}
      <div className="text-center mt-4">
        <button className="btn btn-outline-secondary" onClick={() => setSelecionado(null)}>
          Limpar seleção
        </button>
      </div>
    </div>
  );
}
