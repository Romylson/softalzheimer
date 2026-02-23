import React, { useMemo, useState } from "react";
import "./SectionPages.css";

const topicos = [
  "Exercício físico e BDNF",
  "Dieta neuroprotetora (Mediterrânea, MIND)",
  "Sono e consolidação de memória",
  "Contato com a natureza e neuroplasticidade",
];

export default function QualidadeVidaPage() {
  const [habitos, setHabitos] = useState({ sono: 3, alimentacao: 3, atividade: 3, cognitivo: 3 });
  const pontuacao = useMemo(() => Object.values(habitos).reduce((a, b) => a + Number(b), 0), [habitos]);
  const perfil = pontuacao >= 15 ? "Cérebro em Equilíbrio" : pontuacao >= 10 ? "Risco Moderado" : "Alto Potencial de Melhora";

  return (
    <main className="section-page">
      <h1>Qualidade de Vida e Prevenção</h1>
      <p className="section-lead">Conexão entre ciência e prática para a saúde cerebral no dia a dia.</p>

      <section className="section-grid">
        {topicos.map((tema) => (
          <article key={tema} className="section-card">
            <h3>{tema}</h3>
            <p>Inclui base científica, dicas práticas e infográfico resumido.</p>
          </article>
        ))}
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Autoavaliação: Hábitos Neuroprotetores</h3>
        <div className="range-list">
          {[["sono", "Sono"], ["alimentacao", "Alimentação"], ["atividade", "Atividade física"], ["cognitivo", "Estímulo cognitivo"]].map(([chave, label]) => (
            <label key={chave}>
              <span>{label}</span>
              <input type="range" min="1" max="5" value={habitos[chave]} onChange={(e) => setHabitos((prev) => ({ ...prev, [chave]: Number(e.target.value) }))} />
              <span>{habitos[chave]}/5</span>
            </label>
          ))}
        </div>
        <p><strong>Pontuação:</strong> {pontuacao}/20</p>
        <p><strong>Perfil:</strong> {perfil}</p>
      </section>
    </main>
  );
}
