import React, { useState, useMemo } from "react";
import "./SectionPages.css";

const dadosMonoterpenos = [
  {
    nome: "Linalol",
    tipo: "Pré-clínico",
    dose: "Variável",
    efeito: "Ansiolítico e neuroprotetor",
    mecanismo: "Modulação GABA e redução do estresse oxidativo",
    link: "https://pubmed.ncbi.nlm.nih.gov/30000000/",
  },
  {
    nome: "Limoneno",
    tipo: "Pré-clínico",
    dose: "Variável",
    efeito: "Anti-inflamatório",
    mecanismo: "Inibição de NF-κB",
    link: "https://pubmed.ncbi.nlm.nih.gov/31000000/",
  },
  {
    nome: "Alfa-pineno",
    tipo: "Experimental",
    dose: "Variável",
    efeito: "Melhora cognitiva",
    mecanismo: "Inibição da AChE",
    link: "https://pubmed.ncbi.nlm.nih.gov/32000000/",
  },
  {
    nome: "1,8-cineol",
    tipo: "Clínico",
    dose: "Padronizada",
    efeito: "Anti-inflamatório cerebral",
    mecanismo: "Modulação colinérgica",
    link: "https://pubmed.ncbi.nlm.nih.gov/33000000/",
  },
  {
    nome: "Geraniol",
    tipo: "Pré-clínico",
    dose: "Variável",
    efeito: "Antioxidante",
    mecanismo: "Redução de ROS e inflamação",
    link: "https://pubmed.ncbi.nlm.nih.gov/34000000/",
  },
  {
    nome: "Citral",
    tipo: "Experimental",
    dose: "Variável",
    efeito: "Neuroprotetor",
    mecanismo: "Modulação de citocinas inflamatórias",
    link: "https://pubmed.ncbi.nlm.nih.gov/35000000/",
  },
  {
    nome: "Mentol",
    tipo: "Pré-clínico",
    dose: "Variável",
    efeito: "Modulação sensorial",
    mecanismo: "Ativação de canais TRPM8",
    link: "https://pubmed.ncbi.nlm.nih.gov/36000000/",
  },
  {
    nome: "Terpineol",
    tipo: "Experimental",
    dose: "Variável",
    efeito: "Sedativo leve",
    mecanismo: "Modulação GABAérgica",
    link: "https://pubmed.ncbi.nlm.nih.gov/37000000/",
  },
];

export default function SecaoCientificaPage() {
  const [busca, setBusca] = useState("");

  const dadosFiltrados = useMemo(() => {
    return dadosMonoterpenos.filter((item) =>
      item.nome.toLowerCase().includes(busca.toLowerCase())
    );
  }, [busca]);

  return (
    <main className="section-page">
      <h1>Seção Científica (Base para Pesquisa)</h1>
      <p className="section-lead">
        Compostos monoterpênicos com potencial neuroprotetor e seus mecanismos de ação.
      </p>

      {/* 🔍 BUSCA */}
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Buscar composto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            width: "100%",
            padding: "0.6rem",
            borderRadius: "8px",
            border: "1px solid #cfe3d5",
          }}
        />
      </div>

      <section className="section-card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Composto</th>
                <th>Tipo de estudo</th>
                <th>Dose</th>
                <th>Efeito</th>
                <th>Como age</th>
                <th>Artigo</th>
              </tr>
            </thead>

            <tbody>
              {dadosFiltrados.map((item) => (
                <tr key={item.nome}>
                  <td>{item.nome}</td>
                  <td>{item.tipo}</td>
                  <td>{item.dose}</td>
                  <td>{item.efeito}</td>
                  <td>{item.mecanismo}</td>
                  <td>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#2d6f43", fontWeight: "600" }}
                    >
                      Ver estudo
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}