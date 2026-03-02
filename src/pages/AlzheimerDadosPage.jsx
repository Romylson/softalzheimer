import React, { useMemo, useState } from "react";
import "./SectionPages.css";

const cardsBase = [
  {
    id: "conceito",
    icon: "🧠",
    titulo: "O que é?",
    resumo:
      "O Alzheimer é uma doença neurodegenerativa progressiva, multifatorial, que afeta memória, linguagem, funções executivas e autonomia funcional.",
    detalhes: [
      "Curso clínico lento, com fase pré-clínica longa.",
      "Compromete redes neuronais do hipocampo e córtex associativo.",
      "Exige abordagem integrada: diagnóstico precoce, prevenção e suporte contínuo.",
    ],
  },
  {
    id: "prevalencia",
    icon: "🌍",
    titulo: "Prevalência",
    resumo:
      "Mais de 55 milhões de pessoas vivem com demência no mundo; Alzheimer é a principal causa (aprox. 60–70% dos casos).",
    detalhes: [
      "Tendência de crescimento com envelhecimento populacional.",
      "Maior impacto em sistemas de saúde e cuidadores familiares.",
      "Prevenção de fatores de risco modificáveis pode reduzir carga futura.",
    ],
  },
  {
    id: "mecanismos",
    icon: "⚙️",
    titulo: "Principais mecanismos",
    resumo:
      "A fisiopatologia envolve múltiplas vias que se retroalimentam: amiloide, tau, estresse oxidativo e neuroinflamação.",
    detalhes: [
      "Cascata amiloide: agregação de Aβ e disfunção sináptica.",
      "Tau: hiperfosforilação, perda de estabilidade microtubular e emaranhados.",
      "Estresse oxidativo e neuroinflamação: dano mitocondrial, citocinas e ativação glial.",
    ],
  },
  {
    id: "impacto",
    icon: "📉",
    titulo: "Impacto funcional",
    resumo:
      "A progressão da doença compromete atividades instrumentais e depois atividades básicas da vida diária.",
    detalhes: [
      "Declínio cognitivo e comportamental progressivo.",
      "Sobrecarga de cuidadores e necessidade de rede multiprofissional.",
      "Intervenções precoces podem preservar independência por mais tempo.",
    ],
  },
];

const timeline = [
  {
    fase: "Pré-clínico",
    janela: "10–20 anos antes dos sintomas",
    pontos: ["Mudanças biológicas silenciosas", "Possível acúmulo inicial de Aβ", "Sem perda funcional evidente"],
  },
  {
    fase: "CCL (Comprometimento Cognitivo Leve)",
    janela: "Fase inicial sintomática",
    pontos: ["Queixas de memória", "Autonomia ainda preservada em grande parte", "Janela estratégica para rastreio e intervenção"],
  },
  {
    fase: "Demência leve/moderada",
    janela: "Progressão clínica",
    pontos: ["Déficits cognitivos mais claros", "Dificuldade em tarefas instrumentais", "Maior necessidade de suporte familiar"],
  },
  {
    fase: "Demência avançada",
    janela: "Fase de maior dependência",
    pontos: ["Comprometimento funcional amplo", "Alterações comportamentais e neuropsiquiátricas", "Cuidado contínuo e planejamento integral"],
  },
];

export default function AlzheimerDadosPage() {
  const [cardAtivo, setCardAtivo] = useState(cardsBase[0].id);

  const cardSelecionado = useMemo(
    () => cardsBase.find((card) => card.id === cardAtivo) ?? cardsBase[0],
    [cardAtivo]
  );

  return (
    <main className="section-page alzheimer-page">
      <h1>Alzheimer em Dados</h1>
      <p className="section-lead">
        Painel interativo com visão científica rápida: conceito, prevalência, mecanismos biológicos e linha do tempo
        da progressão.
      </p>

      <section className="section-grid alzheimer-grid" aria-label="Cards interativos de Alzheimer em dados">
        {cardsBase.map((card) => (
          <article
            key={card.id}
            className={`section-card alzheimer-card ${cardAtivo === card.id ? "ativo" : ""}`}
            onMouseEnter={() => setCardAtivo(card.id)}
            onFocus={() => setCardAtivo(card.id)}
            tabIndex={0}
          >
            <div className="alzheimer-card-header">
              <span className="alzheimer-icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3>{card.titulo}</h3>
            </div>
            <p>{card.resumo}</p>
          </article>
        ))}
      </section>

      <section className="section-card alzheimer-detalhe" aria-live="polite">
        <h3>{cardSelecionado.titulo}</h3>
        <ul>
          {cardSelecionado.detalhes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="alzheimer-timeline" aria-label="Linha do tempo da progressão">
        <h2>Linha do tempo da progressão</h2>
        <div className="timeline-grid">
          {timeline.map((etapa, index) => (
            <article key={etapa.fase} className="timeline-card">
              <span className="timeline-marker" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{etapa.fase}</h3>
              <p className="timeline-janela">{etapa.janela}</p>
              <ul>
                {etapa.pontos.map((ponto) => (
                  <li key={ponto}>{ponto}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
