import React, { useState, useEffect } from "react";
import FarmacoEnsaiosClinicos from "../components/Farmacos/FarmacoEnsaiosClinicos";
import imgDonepezila from "../assets/donepezila.jpg";
import imgMemantina from "../assets/memantina.jpg";
import imgLecanemabe from "../assets/lecanemabe.jpg";
import { FaBrain, FaBolt, FaShieldAlt, FaCapsules, FaLeaf } from "react-icons/fa";
import { farmacos } from "../data/farmacos";
import FarmacoCard from "../components/Farmacos/FarmacoCard";

export const ALVOS = {
  "Colinesterase": { nome: "Colinesterase", icone: <FaBolt color="#fbbf24" />, desc: "Inibe a enzima que degrada acetilcolina." },
  "Glutamatérgico (NMDA)": { nome: "Receptor NMDA", icone: <FaBrain color="#06b6d4" />, desc: "Bloqueia receptores glutamatérgicos NMDA." },
  "Anticorpo Monoclonal": { nome: "Placa Beta-amiloide", icone: <FaShieldAlt color="#60a5fa" />, desc: "Age sobre placas beta-amiloides." },
  "Fitoterápico": { nome: "Fitoterápico", icone: <FaLeaf color="#22c55e" />, desc: "Ação antioxidante e neuroprotetora." },
  "Outro": { nome: "Outro", icone: <FaCapsules color="#64748b" />, desc: "" }
};
// Adicione mais imagens e fármacos conforme quiser!


  
  // Adicione aqui outros fármacos conforme sua necessidade!


export default function FarmacosPage() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">Fármacos no Tratamento do Alzheimer</h1>
      <div className="row g-4">
        {farmacos.map((f) => (
          <div className="col-md-4" key={f.nome}>
            <div className={`card h-100 shadow ${selecionado === f.nome ? "border-primary" : ""}`}>
              <FarmacoCard farmaco={f}>
                <button
                  className={`btn btn-sm ${selecionado === f.nome ? "btn-primary" : "btn-outline-primary"} mt-2`}
                  onClick={() => setSelecionado(f.nome)}
                >
                  {selecionado === f.nome ? "Selecionado" : "Ver Ensaios Clínicos"}
                </button>
                {/* Só mostra ensaios do selecionado */}
                {selecionado === f.nome && (
                  <div className="mt-3">
                    <FarmacoEnsaiosClinicos nome={f.nome} />
                  </div>
                )}
              </FarmacoCard>
            </div>
          </div>
        ))}
      </div>
      {/* Limpar seleção */}
      <div className="text-center mt-4">
        <button className="btn btn-outline-secondary" onClick={() => setSelecionado(null)}>
          Limpar seleção
        </button>
      </div>
    </div>
  );
}