import React from "react";
import "./SectionPages.css";

const dados = [
  ["O que é?", "Doença neurodegenerativa progressiva que compromete memória e funções cognitivas."],
  ["Prevalência", "Mais de 55 milhões de pessoas vivem com demência no mundo."],
  ["Mecanismos", "Cascata amiloide, tau, estresse oxidativo e neuroinflamação."],
  ["Linha do tempo", "Pré-clínico → CCL → demência estabelecida."],
];

export default function AlzheimerDadosPage() {
  return (
    <main className="section-page">
      <h1>Alzheimer em Dados</h1>
      <p className="section-lead">Visual interativo com os principais marcos para compreensão rápida.</p>
      <section className="section-grid">
        {dados.map(([titulo, descricao]) => (
          <article key={titulo} className="section-card">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
