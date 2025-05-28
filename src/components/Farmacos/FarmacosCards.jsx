import React from "react";
import FarmacoEnsaiosClinicos from "../components/Farmacos/FarmacoEnsaiosClinicos";
import imgDonepezila from "../assets/donepezila.jpg";
import imgMemantina from "../assets/memantina.jpg";
import imgLecanemabe from "../assets/lecanemabe.jpg";

// Lista fixa
const FARMACOS = [
  {
    nome: "Donepezila",
    categoria: "Inibidor de Colinesterase",
    descricao: "Inibidor da acetilcolinesterase usado em estágios leves a moderados.",
    imagem: imgDonepezila
  },
  {
    nome: "Memantina",
    categoria: "Modulador Glutamatérgico",
    descricao: "Modulador do receptor NMDA para sintomas moderados a graves.",
    imagem: imgMemantina
  },
  {
    nome: "Lecanemabe",
    categoria: "Anticorpo Monoclonal",
    descricao: "Anticorpo monoclonal indicado para remoção de placas beta-amiloides.",
    imagem: imgLecanemabe
  }
];

export default function FarmacosPage() {
  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">Fármacos no Tratamento do Alzheimer</h1>
      <div className="row g-4">
        {FARMACOS.map((f) => (
          <div className="col-md-4" key={f.nome}>
            <div className="card h-100 shadow">
              <img src={f.imagem} alt={f.nome} className="card-img-top" style={{height: 150, objectFit: "cover"}} />
              <div className="card-body">
                <h5 className="card-title">{f.nome}</h5>
                <p className="card-text">{f.descricao}</p>
                <span className="badge bg-secondary mb-2">{f.categoria}</span>
                {/* Ensaios clínicos SEMPRE visíveis */}
                <div className="mt-3">
                  <FarmacoEnsaiosClinicos nome={f.nome} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
