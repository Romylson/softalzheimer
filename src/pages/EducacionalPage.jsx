import React from "react";
import "./SectionPages.css";

const mapasMentais = [
  {
    titulo: "Mapa mental: Fisiopatologia do Alzheimer",
    descricao: "Visão em nós: amiloide, tau, neuroinflamação, estresse oxidativo e disfunção colinérgica.",
    link: "https://app.diagrams.net/",
  },
  {
    titulo: "Mapa mental: Diagnóstico e progressão",
    descricao: "Conecta sinais clínicos, triagem cognitiva, estágios da doença e condutas de acompanhamento.",
    link: "https://www.mindmeister.com/pt",
  },
  {
    titulo: "Mapa mental: Prevenção e qualidade de vida",
    descricao: "Relaciona exercício, dieta, sono e estímulo cognitivo com marcadores de risco.",
    link: "https://xmind.app/",
  },
];

const resumosPdf = [
  {
    titulo: "OMS — Global action plan on the public health response to dementia",
    descricao: "Documento-base internacional com políticas e prioridades para demência.",
    link: "https://iris.who.int/bitstream/handle/10665/259615/9789241513487-eng.pdf",
  },
  {
    titulo: "OMS — Risk reduction of cognitive decline and dementia",
    descricao: "Diretriz com recomendações para redução de risco e prevenção.",
    link: "https://apps.who.int/iris/bitstream/handle/10665/312180/9789241550543-eng.pdf",
  },
  {
    titulo: "Alzheimer’s Association — Facts and Figures",
    descricao: "Panorama epidemiológico e clínico anual para estudo e discussão.",
    link: "https://alz-journals.onlinelibrary.wiley.com/doi/pdf/10.1002/alz.13809",
  },
];

const fluxogramas = [
  {
    titulo: "Fluxograma 1 — Triagem cognitiva inicial",
    passos: [
      "Queixa de memória/atenção",
      "Avaliação clínica + anamnese",
      "Teste cognitivo breve",
      "Risco baixo: acompanhamento",
      "Risco moderado/alto: investigação ampliada",
    ],
  },
  {
    titulo: "Fluxograma 2 — Interpretação de artigo científico",
    passos: [
      "Pergunta de pesquisa",
      "Modelo experimental (in vitro/in vivo/clínico)",
      "Desfechos principais",
      "Mecanismo proposto",
      "Limitações e aplicabilidade",
    ],
  },
  {
    titulo: "Fluxograma 3 — Plano neuroprotetor semanal",
    passos: [
      "Autoavaliação de hábitos",
      "Definição de meta prioritária",
      "Ação prática (sono/dieta/exercício/cognitivo)",
      "Monitoramento por 4 semanas",
      "Revisão e ajuste do plano",
    ],
  },
];

const linhaTempoModelo = [
  { fase: "Pré-clínico", foco: "Mudanças biológicas iniciais sem sintomas evidentes" },
  { fase: "CCL", foco: "Queixas cognitivas leves com autonomia ainda preservada" },
  { fase: "Demência leve", foco: "Déficit funcional em atividades instrumentais" },
  { fase: "Demência moderada", foco: "Maior dependência e necessidade de suporte familiar" },
  { fase: "Demência avançada", foco: "Comprometimento funcional amplo e cuidado contínuo" },
];

const quizNiveis = [
  {
    nivel: "Básico",
    objetivo: "Consolidar conceitos essenciais.",
    foco: "Definição, prevalência, sinais iniciais e fatores de risco.",
  },
  {
    nivel: "Intermediário",
    objetivo: "Conectar mecanismos, clínica e prevenção.",
    foco: "Relação entre vias moleculares, sintomas e hábitos neuroprotetores.",
  },
  {
    nivel: "Avançado",
    objetivo: "Treinar leitura crítica e raciocínio científico.",
    foco: "Interpretação de evidências, limitações metodológicas e aplicabilidade.",
  },
];

export default function EducacionalPage() {
  return (
    <main className="section-page educacional-page">
      <h1>Seção Educacional (Para estudantes)</h1>
      <p className="section-lead">Materiais didáticos com links de estudo, exemplos visuais e trilha progressiva de aprendizagem.</p>

      <section className="section-card">
        <h3>Mapas mentais (com links)</h3>
        <div className="resource-grid">
          {mapasMentais.map((item) => (
            <article key={item.titulo} className="resource-card">
              <h4>{item.titulo}</h4>
              <p>{item.descricao}</p>
              <a href={item.link} target="_blank" rel="noreferrer">Abrir recurso</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Resumos em PDF (com links)</h3>
        <div className="resource-grid">
          {resumosPdf.map((item) => (
            <article key={item.titulo} className="resource-card">
              <h4>{item.titulo}</h4>
              <p>{item.descricao}</p>
              <a href={item.link} target="_blank" rel="noreferrer">Ler PDF</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Exemplos de fluxogramas</h3>
        <div className="flow-grid">
          {fluxogramas.map((fluxo) => (
            <article key={fluxo.titulo} className="flow-card">
              <h4>{fluxo.titulo}</h4>
              <ol>
                {fluxo.passos.map((passo) => (
                  <li key={passo}>{passo}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Modelo de linha do tempo da doença</h3>
        <div className="timeline-model-grid">
          {linhaTempoModelo.map((item, idx) => (
            <article key={item.fase} className="timeline-model-card">
              <span className="timeline-model-step">{idx + 1}</span>
              <h4>{item.fase}</h4>
              <p>{item.foco}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Quiz por nível</h3>
        <div className="quiz-level-grid">
          {quizNiveis.map((quiz) => (
            <article key={quiz.nivel} className="quiz-level-card">
              <h4>{quiz.nivel}</h4>
              <p><strong>Objetivo:</strong> {quiz.objetivo}</p>
              <p><strong>Foco:</strong> {quiz.foco}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
