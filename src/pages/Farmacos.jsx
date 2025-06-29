import React from "react";
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

export default function FarmacosPage() {
  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">Fármacos no Tratamento do Alzheimer</h1>
      <div className="row g-4">
        {farmacos.map((f) => (
          <div className="col-md-4" key={f.nome}>
            <div className="card h-100 shadow">
              <FarmacoCard farmaco={f} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
