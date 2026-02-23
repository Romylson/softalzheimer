import React from "react";
import "./SectionPages.css";

export default function EducacionalPage() {
  return (
    <main className="section-page">
      <h1>Seção Educacional (Para estudantes)</h1>
      <p className="section-lead">Materiais didáticos organizados para estudo progressivo.</p>
      <div className="pills">
        <span>Mapas mentais</span>
        <span>Resumos em PDF</span>
        <span>Fluxogramas</span>
        <span>Linha do tempo da doença</span>
        <span>Quiz básico</span>
        <span>Quiz intermediário</span>
        <span>Quiz avançado</span>
      </div>
    </main>
  );
}
