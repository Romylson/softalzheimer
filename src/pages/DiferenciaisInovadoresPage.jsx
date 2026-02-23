import React from "react";
import "./SectionPages.css";

export default function DiferenciaisInovadoresPage() {
  return (
    <main className="section-page">
      <h1>Diferenciais Inovadores</h1>
      <p className="section-lead">Módulos de inovação para transformar o portal em referência.</p>
      <section className="section-grid">
        <article className="section-card">
          <h3>Planta da Semana</h3>
          <p>História, mecanismo molecular, potencial terapêutico, evidência e segurança.</p>
        </article>
        <article className="section-card">
          <h3>Simulador de Mecanismos</h3>
          <p>Animação com placa amiloide, antioxidantes, inibição de AChE e citocinas.</p>
        </article>
        <article className="section-card">
          <h3>Área para Pesquisadores</h3>
          <p>Submissão de artigos, colaboração e banco de ideias de TCC/mestrado/doutorado.</p>
        </article>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Expansão Estratégica</h3>
        <ul>
          <li>Versão em inglês</li>
          <li>DOI para materiais educativos</li>
          <li>Indexação como repositório educacional</li>
          <li>Parcerias com universidades</li>
          <li>Presença no Instagram com cortes científicos</li>
        </ul>
      </section>
    </main>
  );
}
