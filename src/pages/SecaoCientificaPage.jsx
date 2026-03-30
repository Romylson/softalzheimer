import React, { useMemo, useState } from "react";
import "./SectionPages.css";

// ===== DADOS EXPANDIDOS =====
const estudos = [
  {
    planta: "Curcuma longa",
    modelo: "Clínico",
    dose: "500–1000 mg/dia",
    resultado: "Redução inflamatória",
    mecanismo: "NF-κB / Nrf2",
    link: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    planta: "Rosmarinus officinalis",
    modelo: "In vivo",
    dose: "100 mg/kg",
    resultado: "Melhora de memória",
    mecanismo: "AChE / MAPK",
    link: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    planta: "Ginkgo biloba",
    modelo: "Clínico",
    dose: "120–240 mg/dia",
    resultado: "Apoio cognitivo",
    mecanismo: "Microcirculação",
    link: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    planta: "Centella asiatica",
    modelo: "In vivo",
    dose: "200 mg/kg",
    resultado: "Neuroplasticidade",
    mecanismo: "Neurogênese",
    link: "https://pubmed.ncbi.nlm.nih.gov/",
  },
];

const compostos = [
  { nome: "Curcumina", origem: "Curcuma longa", mecanismo: "NF-κB, Nrf2", classe: "Polifenol" },
  { nome: "Resveratrol", origem: "Vitis vinifera", mecanismo: "SIRT1", classe: "Polifenol" },
  { nome: "EGCG", origem: "Camellia sinensis", mecanismo: "Antioxidante", classe: "Flavonoide" },
  { nome: "Linalol", origem: "Lavandula", mecanismo: "Ansiolítico", classe: "Monoterpeno" },
  { nome: "α-Pineno", origem: "Pinus", mecanismo: "AChE", classe: "Monoterpeno" },
  { nome: "Limoneno", origem: "Citrus", mecanismo: "Anti-inflamatório", classe: "Monoterpeno" },
  { nome: "Bacopasídeos", origem: "Bacopa monnieri", mecanismo: "Plasticidade", classe: "Saponina" },
];

export default function SecaoCientificaPage() {
  const [busca, setBusca] = useState("");
  const [filtroClasse, setFiltroClasse] = useState("Todos");

  const dadosFiltrados = useMemo(() => {
    return compostos.filter((item) => {
      const matchBusca =
        item.nome.toLowerCase().includes(busca.toLowerCase()) ||
        item.origem.toLowerCase().includes(busca.toLowerCase());

      const matchClasse = filtroClasse === "Todos" || item.classe === filtroClasse;

      return matchBusca && matchClasse;
    });
  }, [busca, filtroClasse]);

  const contagemClasses = useMemo(() => {
    const contagem = {};
    compostos.forEach((c) => {
      contagem[c.classe] = (contagem[c.classe] || 0) + 1;
    });
    return contagem;
  }, []);

  return (
    <main className="section-page">
      <h1>Seção Científica (Base para Pesquisa)</h1>

      {/* ===== FILTROS ===== */}
      <section className="section-card">
        <h3>Busca e Filtros</h3>
        <input
          type="text"
          placeholder="Buscar composto ou planta..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <select onChange={(e) => setFiltroClasse(e.target.value)}>
          <option>Todos</option>
          <option>Monoterpeno</option>
          <option>Polifenol</option>
          <option>Flavonoide</option>
          <option>Saponina</option>
        </select>
      </section>

      {/* ===== GRÁFICO SIMPLES ===== */}
      <section className="section-card">
        <h3>Distribuição de Compostos</h3>
        <div>
          {Object.entries(contagemClasses).map(([classe, valor]) => (
            <div key={classe} style={{ marginBottom: "8px" }}>
              <strong>{classe}</strong>
              <div
                style={{
                  height: "10px",
                  width: `${valor * 40}px`,
                  background: "black",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== TABELA DE ESTUDOS ===== */}
      <section className="section-card">
        <h3>Banco de Estudos</h3>
        <table>
          <thead>
            <tr>
              <th>Planta</th>
              <th>Modelo</th>
              <th>Dose</th>
              <th>Resultado</th>
              <th>Mecanismo</th>
              <th>Artigo</th>
            </tr>
          </thead>
          <tbody>
            {estudos.map((e, i) => (
              <tr key={i}>
                <td>{e.planta}</td>
                <td>{e.modelo}</td>
                <td>{e.dose}</td>
                <td>{e.resultado}</td>
                <td>{e.mecanismo}</td>
                <td>
                  <a href={e.link} target="_blank" rel="noreferrer">
                    Ver estudo
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ===== TABELA DE COMPOSTOS ===== */}
      <section className="section-card">
        <h3>Compostos Naturais</h3>
        <table>
          <thead>
            <tr>
              <th>Composto</th>
              <th>Origem</th>
              <th>Mecanismo</th>
              <th>Classe</th>
            </tr>
          </thead>
          <tbody>
            {dadosFiltrados.map((c, i) => (
              <tr key={i}>
                <td>{c.nome}</td>
                <td>{c.origem}</td>
                <td>{c.mecanismo}</td>
                <td>{c.classe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
