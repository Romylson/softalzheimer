import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./SectionPages.css";

// ================== COMPOSTOS EXPANDIDOS ==================
const compostos = [
  // MONOTERPENOS
  {
    nome: "Linalol",
    origem: "Lavandula",
    mecanismo: "Modulação GABA / efeito ansiolítico",
    classe: "Monoterpeno",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=linalool+brain",
  },
  {
    nome: "α-Pineno",
    origem: "Pinus",
    mecanismo: "Inibição da acetilcolinesterase (AChE)",
    classe: "Monoterpeno",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=alpha+pinene+acetylcholinesterase",
  },
  {
    nome: "Limoneno",
    origem: "Citrus",
    mecanismo: "Ação anti-inflamatória e antioxidante",
    classe: "Monoterpeno",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=limonene+neuroprotection",
  },
  {
    nome: "Geraniol",
    origem: "Rosa / óleos essenciais",
    mecanismo: "Redução de estresse oxidativo",
    classe: "Monoterpeno",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=geraniol+brain",
  },
  {
    nome: "Mentol",
    origem: "Mentha",
    mecanismo: "Modulação de canais TRPM8",
    classe: "Monoterpeno",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=menthol+neuro",
  },

  // POLIFENÓIS
  {
    nome: "Curcumina",
    origem: "Curcuma longa",
    mecanismo: "Ativação Nrf2 / inibição NF-κB",
    classe: "Polifenol",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=curcumin+alzheimer",
  },
  {
    nome: "Resveratrol",
    origem: "Vitis vinifera",
    mecanismo: "Ativação SIRT1 / anti-inflamatório",
    classe: "Polifenol",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=resveratrol+brain",
  },

  // FLAVONOIDES
  {
    nome: "EGCG",
    origem: "Chá verde",
    mecanismo: "Antioxidante potente / modulação Nrf2",
    classe: "Flavonoide",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=egcg+brain",
  },
  {
    nome: "Quercetina",
    origem: "Frutas",
    mecanismo: "Anti-inflamatório / proteção neuronal",
    classe: "Flavonoide",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=quercetin+brain",
  },

  // SAPONINAS
  {
    nome: "Bacopasídeos",
    origem: "Bacopa monnieri",
    mecanismo: "Aumento da plasticidade sináptica",
    classe: "Saponina",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=bacopa+memory",
  },
];

// ================== COMPONENTE ==================
export default function SecaoCientificaPage() {
  const [busca, setBusca] = useState("");
  const [filtroClasse, setFiltroClasse] = useState("Todos");

  // FILTRO
  const filtrados = useMemo(() => {
    return compostos.filter((c) => {
      const matchBusca =
        c.nome.toLowerCase().includes(busca.toLowerCase()) ||
        c.origem.toLowerCase().includes(busca.toLowerCase());

      const matchClasse =
        filtroClasse === "Todos" || c.classe === filtroClasse;

      return matchBusca && matchClasse;
    });
  }, [busca, filtroClasse]);

  // DADOS GRÁFICO
  const dadosGrafico = useMemo(() => {
    const contagem = {};
    compostos.forEach((c) => {
      contagem[c.classe] = (contagem[c.classe] || 0) + 1;
    });

    return Object.keys(contagem).map((key) => ({
      classe: key,
      quantidade: contagem[key],
    }));
  }, []);

  return (
    <main className="section-page">
      <h1>Dashboard Científico – Compostos Naturais</h1>

      {/* ================= FILTROS ================= */}
      <section className="section-card">
        <h3>Busca Inteligente</h3>

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

      {/* ================= GRÁFICO REAL ================= */}
      <section className="section-card">
        <h3>Distribuição de Compostos</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dadosGrafico}>
            <XAxis dataKey="classe" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantidade" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* ================= TABELA ================= */}
      <section className="section-card">
        <h3>Compostos Naturais e Como Agem</h3>

        <table>
          <thead>
            <tr>
              <th>Composto</th>
              <th>Origem</th>
              <th>Como age</th>
              <th>Classe</th>
              <th>Artigo</th>
            </tr>
          </thead>

          <tbody>
            {filtrados.map((c, i) => (
              <tr key={i}>
                <td>{c.nome}</td>
                <td>{c.origem}</td>
                <td>{c.mecanismo}</td>
                <td>{c.classe}</td>
                <td>
                  <a href={c.link} target="_blank" rel="noreferrer">
                    🔗 Ver estudo
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}