import React, { useMemo, useState } from "react";
import "./SectionPages.css";

const categorias = {
  Fisiopatologia: ["Cascata amiloide", "Hiperfosforilação de tau", "Neuroinflamação", "Disfunção colinérgica", "Estresse oxidativo"],
  "Compostos Naturais": ["Monoterpenos", "Sesquiterpenos", "Flavonoides", "Alcaloides", "Fenilpropanoides"],
};

const estudos = [
  { planta: "Curcuma longa", modelo: "Clínico", dose: "500–1000 mg/dia", resultado: "Redução inflamatória", mecanismo: "NF-κB / Nrf2", doi: "10.1000/curcuma-neuro" },
  { planta: "Rosmarinus officinalis", modelo: "In vivo", dose: "100 mg/kg", resultado: "Melhora de memória", mecanismo: "AChE / MAPK", doi: "10.1000/rosmarinus-memory" },
  { planta: "Ginkgo biloba", modelo: "Clínico", dose: "120–240 mg/dia", resultado: "Apoio cognitivo", mecanismo: "Microcirculação", doi: "10.1000/ginkgo-cognition" },
  { planta: "Crocus sativus", modelo: "Clínico", dose: "30 mg/dia", resultado: "Apoio em função cognitiva", mecanismo: "Antioxidante / anti-inflamatório", doi: "10.1000/crocus-cognition" },
  { planta: "Centella asiatica", modelo: "In vivo", dose: "200 mg/kg", resultado: "Melhora de memória e plasticidade", mecanismo: "Neurogênese / antioxidante", doi: "10.1000/centella-neuro" },
];

const produtosIsolados = [
  ["Curcumina", "Curcuma longa", "NF-κB, Nrf2, anti-inflamatório"],
  ["Resveratrol", "Vitis vinifera", "SIRT1, antioxidante, anti-inflamatório"],
  ["EGCG", "Camellia sinensis", "Nrf2, redução de estresse oxidativo"],
  ["Linalol", "Lavandula spp.", "Modulação neuroinflamatória e ansiolítica"],
  ["Ácido rosmarínico", "Rosmarinus/Salvia", "Ação antioxidante e neuroprotetora"],
  ["Bacosídeos", "Bacopa monnieri", "Modulação sináptica e plasticidade"],
  ["Crocinas", "Crocus sativus", "Antioxidante e potencial antiamiloide"],
];

const artigos2026 = [
  "Atualização contínua 2026: rastreamento quinzenal de ensaios clínicos e revisões de compostos naturais em Alzheimer.",
  "Linha editorial 2026: monoterpenos, flavonoides, alcaloides e produtos isolados com foco translacional.",
];

export default function SecaoCientificaPage() {
  const [filtro, setFiltro] = useState("");
  const filtrados = useMemo(() => {
    const q = filtro.toLowerCase();
    if (!q) return estudos;
    return estudos.filter((e) => Object.values(e).some((v) => String(v).toLowerCase().includes(q)));
  }, [filtro]);

  return (
    <main className="section-page">
      <h1>Seção Científica (Base para Pesquisa)</h1>
      <p className="section-lead">Biblioteca organizada, banco de estudos, produtos isolados naturais e atualização 2026.</p>

      <section className="section-grid">
        {Object.entries(categorias).map(([nome, itens]) => (
          <article key={nome} className="section-card">
            <h3>{nome}</h3>
            <ul>{itens.map((i) => <li key={i}>{i}</li>)}</ul>
            <p>Modelo de página: resumo técnico, mecanismo molecular, vias, artigos-chave e lacunas.</p>
          </article>
        ))}
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Banco de Estudos</h3>
        <input value={filtro} onChange={(e) => setFiltro(e.target.value)} placeholder="Buscar por planta, modelo, mecanismo ou DOI" style={{ width: "100%", marginBottom: "0.8rem", padding: "0.5rem" }} />
        <div className="table-wrap">
          <table>
            <thead><tr><th>Planta</th><th>Modelo</th><th>Dose</th><th>Resultado principal</th><th>Mecanismo sugerido</th><th>DOI</th></tr></thead>
            <tbody>
              {filtrados.map((e) => (
                <tr key={e.doi}><td>{e.planta}</td><td>{e.modelo}</td><td>{e.dose}</td><td>{e.resultado}</td><td>{e.mecanismo}</td><td>{e.doi}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Produtos isolados de origem natural frente ao Alzheimer</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Produto isolado</th><th>Origem</th><th>Mecanismo sugerido</th></tr></thead>
            <tbody>
              {produtosIsolados.map(([produto, origem, mecanismo]) => (
                <tr key={produto}><td>{produto}</td><td>{origem}</td><td>{mecanismo}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Artigos e atualizações 2026</h3>
        <ul>
          {artigos2026.map((item) => <li key={item}>{item}</li>)}
          <li>Veja também a aba <strong>Monoterpenos</strong> em Artigos Científicos para os links enviados.</li>
        </ul>
      </section>
    </main>
  );
}
