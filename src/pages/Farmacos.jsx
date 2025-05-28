import React, { useState } from "react";
import FarmacoEnsaiosClinicos from "../components/Farmacos/FarmacoEnsaiosClinicos";
import imgDonepezila from "../assets/donepezila.jpg";
import imgMemantina from "../assets/memantina.jpg";
import imgLecanemabe from "../assets/lecanemabe.jpg";

// Adicione aqui outros fármacos conforme desejar
const FARMACOS = [
  {
    nome: "Donepezila",
    categoria: "Inibidor de Colinesterase",
    descricao: "Inibidor da acetilcolinesterase usado em estágios leves a moderados.",
    imagem: imgDonepezila,
  },
  {
    nome: "Memantina",
    categoria: "Modulador Glutamatérgico",
    descricao: "Modulador do receptor NMDA para sintomas moderados a graves.",
    imagem: imgMemantina,
  },
  {
    nome: "Lecanemabe",
    categoria: "Anticorpo Monoclonal",
    descricao: "Anticorpo monoclonal indicado para remoção de placas beta-amiloides.",
    imagem: imgLecanemabe,
  },
];

export default function FarmacosPage() {
  const [selecionado, setSelecionado] = useState(FARMACOS[0].nome);

  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">Fármacos no Tratamento do Alzheimer</h1>
      <div className="row g-4">
        {FARMACOS.map((f) => (
          <div className="col-md-4" key={f.nome}>
            <div className={`card h-100 shadow ${selecionado === f.nome ? "border-primary" : ""}`}>
              <img src={f.imagem} alt={f.nome} className="card-img-top" style={{ height: 150, objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{f.nome}</h5>
                <p className="card-text">{f.descricao}</p>
                <span className="badge bg-secondary mb-2">{f.categoria}</span>
                <button className={`btn btn-sm ${selecionado === f.nome ? "btn-primary" : "btn-outline-primary"} mt-2`}
                  onClick={() => setSelecionado(f.nome)}>
                  {selecionado === f.nome ? "Selecionado" : "Ver Ensaios Clínicos"}
                </button>
              </div>
            </div>
            {/* Exibe os ensaios só do fármaco selecionado */}
            {selecionado === f.nome && (
              <div className="card card-body border mt-2">
                <FarmacoEnsaiosClinicos nome={f.nome} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
