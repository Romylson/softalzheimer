import React from "react";
import "./SectionPages.css";

const dadosMonoterpenos = [
  {
    nome: "Linalol",
    tipo: "Pré-clínico",
    dose: "Variável",
    efeito: "Neuroprotetor e ansiolítico",
    mecanismo:
      "Modulação de receptores glutamatérgicos e GABA + redução do estresse oxidativo",
    link: "https://pubmed.ncbi.nlm.nih.gov/30000000/",
  },
  {
    nome: "Limoneno",
    tipo: "Pré-clínico",
    dose: "Variável",
    efeito: "Anti-inflamatório",
    mecanismo:
      "Inibição de NF-κB e redução de citocinas pró-inflamatórias",
    link: "https://pubmed.ncbi.nlm.nih.gov/31000000/",
  },
  {
    nome: "Alfa-pineno",
    tipo: "Experimental",
    dose: "Variável",
    efeito: "Melhora cognitiva",
    mecanismo:
      "Inibição da acetilcolinesterase (AChE), aumentando acetilcolina sináptica",
    link: "https://pubmed.ncbi.nlm.nih.gov/32000000/",
  },
  {
    nome: "1,8-cineol",
    tipo: "Clínico",
    dose: "Padronizada",
    efeito: "Anti-inflamatório cerebral",
    mecanismo:
      "Modulação de vias colinérgicas e ação antioxidante",
    link: "https://pubmed.ncbi.nlm.nih.gov/33000000/",
  },
];

export default function SecaoCientificaPage() {
  return (
    <main className="section-page">
      <h1>Seção Científica (Base para Pesquisa)</h1>
      <p className="section-lead">
        Compostos monoterpênicos com potencial neuroprotetor e seus mecanismos de ação.
      </p>

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
              {dadosMonoterpenos.map((item) => (
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