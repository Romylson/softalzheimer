import React from "react";
import "./SectionPages.css";

const materiais = [
  {
    titulo: "Mapas mentais",
    icone: "🧩",
    descricao:
      "Síntese visual dos eixos centrais da doença de Alzheimer para revisão rápida antes de provas e apresentações.",
    itens: [
      "Fisiopatologia: amiloide, tau, neuroinflamação e estresse oxidativo.",
      "Diagnóstico: sinais clínicos, avaliação cognitiva e biomarcadores.",
      "Intervenções: farmacológicas, não farmacológicas e prevenção.",
    ],
  },
  {
    titulo: "Resumos em PDF",
    icone: "📄",
    descricao:
      "Materiais objetivos em linguagem acadêmica para estudo progressivo (básico → avançado), com tópicos-chave.",
    itens: [
      "Resumo técnico de fisiopatologia e vias moleculares.",
      "Resumo aplicado de qualidade de vida e prevenção.",
      "Resumo de fitoterápicos e compostos naturais em evidência.",
    ],
  },
  {
    titulo: "Fluxogramas",
    icone: "🔀",
    descricao:
      "Modelos visuais para entender sequências de eventos biológicos e raciocínio clínico.",
    itens: [
      "Progressão da doença: pré-clínico → CCL → demência.",
      "Tomada de decisão em triagem e acompanhamento cognitivo.",
      "Fluxo de estudo de artigos (pergunta, método, resultado, limitação).",
    ],
  },
  {
    titulo: "Linha do tempo da doença",
    icone: "🕰️",
    descricao:
      "Visão cronológica da progressão clínica e dos marcos de pesquisa para apoiar revisão histórica e científica.",
    itens: [
      "Fase silenciosa com alterações biológicas iniciais.",
      "Comprometimento cognitivo leve com autonomia parcial.",
      "Fases de maior dependência funcional e suporte multiprofissional.",
    ],
  },
];

const quizNiveis = [
  {
    nivel: "Básico",
    objetivo: "Consolidar conceitos essenciais.",
    foco: "Definição, prevalência, sinais iniciais e fatores de risco.",
    exemplo: "Ex.: Qual mecanismo está mais associado à formação de placas?",
  },
  {
    nivel: "Intermediário",
    objetivo: "Conectar mecanismos, clínica e prevenção.",
    foco: "Relação entre vias moleculares, sintomas e hábitos neuroprotetores.",
    exemplo: "Ex.: Como sono inadequado pode impactar memória e progressão cognitiva?",
  },
  {
    nivel: "Avançado",
    objetivo: "Treinar leitura crítica e raciocínio científico.",
    foco: "Interpretação de evidências, limitações metodológicas e aplicabilidade clínica.",
    exemplo: "Ex.: Qual o principal viés em estudos pré-clínicos de neuroproteção?",
  },
];

export default function EducacionalPage() {
  return (
    <main className="section-page educacional-page">
      <h1>Seção Educacional (Para estudantes)</h1>
      <p className="section-lead">
        Trilhas didáticas para aprender Alzheimer de forma estruturada, do essencial ao nível avançado.
      </p>

      <section className="section-grid">
        {materiais.map((material) => (
          <article key={material.titulo} className="section-card educacional-card">
            <h3>
              <span aria-hidden="true" className="educacional-icone">{material.icone}</span>
              <span>{material.titulo}</span>
            </h3>
            <p>{material.descricao}</p>
            <ul>
              {material.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Quiz por nível</h3>
        <p className="section-lead">Percurso recomendado: Básico → Intermediário → Avançado.</p>

        <div className="quiz-level-grid">
          {quizNiveis.map((quiz) => (
            <article key={quiz.nivel} className="quiz-level-card">
              <h4>{quiz.nivel}</h4>
              <p><strong>Objetivo:</strong> {quiz.objetivo}</p>
              <p><strong>Foco:</strong> {quiz.foco}</p>
              <p><strong>Exemplo:</strong> {quiz.exemplo}</p>
            </article>
          ))}
        </div>

        <div className="pills" style={{ marginTop: "0.8rem" }}>
          <span>Mapas mentais</span>
          <span>Resumos em PDF</span>
          <span>Fluxogramas</span>
          <span>Linha do tempo da doença</span>
          <span>Quiz básico</span>
          <span>Quiz intermediário</span>
          <span>Quiz avançado</span>
        </div>
      </section>
    </main>
  );
}
