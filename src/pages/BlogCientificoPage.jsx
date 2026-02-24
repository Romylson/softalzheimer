import React from "react";
import monoterpenosArtigos from "../data/monoterpenosArtigos";
import "./SectionPages.css";

const publicacaoQuinzenal2026 = [
  { periodo: "1ª quinzena / Janeiro 2026", tema: "Monoterpenos e modulação da acetilcolinesterase" },
  { periodo: "2ª quinzena / Janeiro 2026", tema: "O papel do Nrf2 na neuroproteção" },
  { periodo: "1ª quinzena / Fevereiro 2026", tema: "Limitações dos modelos animais de Alzheimer" },
  { periodo: "2ª quinzena / Fevereiro 2026", tema: "O que a ciência realmente sabe sobre plantas e memória?" },
];

const postsModelo = [
  {
    titulo: "Monoterpenos e modulação da acetilcolinesterase",
    contextualizacao:
      "A redução da sinalização colinérgica está entre as alterações mais estudadas na doença de Alzheimer. Compostos monoterpênicos têm sido investigados como moduladores da AChE e de vias associadas ao estresse oxidativo.",
    evidencia:
      "Estudos pré-clínicos e revisões descrevem atividade anticolinesterásica e potencial neuroprotetor em modelos celulares e animais, com variação de efeito conforme composto, dose e biodisponibilidade.",
    aplicabilidade:
      "Útil para discussão de compostos naturais candidatos a adjuvantes, especialmente em desenho de estudos translacionais e padronização de extratos.",
    limitacoes:
      "Heterogeneidade metodológica, poucas comparações diretas entre moléculas e escassez de ensaios clínicos robustos para desfechos cognitivos.",
    referencias: monoterpenosArtigos.slice(0, 4),
  },
  {
    titulo: "O papel do Nrf2 na neuroproteção",
    contextualizacao:
      "Nrf2 regula genes antioxidantes e citoprotetores. A ativação dessa via tem sido proposta como estratégia para conter dano oxidativo e inflamação no envelhecimento cerebral.",
    evidencia:
      "A literatura aponta redução de marcadores oxidativos e melhora de desfechos neurocomportamentais em modelos experimentais quando há ativação de Nrf2 por compostos bioativos.",
    aplicabilidade:
      "Base para protocolos de revisão, disciplinas de farmacologia e debates sobre terapias multitarget em neurodegeneração.",
    limitacoes:
      "Resultados variam por modelo biológico e janela temporal. Ainda há incertezas sobre dose efetiva e resposta em populações clínicas diversas.",
    referencias: [
      "https://pubmed.ncbi.nlm.nih.gov/37054939/",
      "https://pubmed.ncbi.nlm.nih.gov/39339360/",
      "https://pubmed.ncbi.nlm.nih.gov/36080227/",
    ],
  },
  {
    titulo: "Limitações dos modelos animais de Alzheimer",
    contextualizacao:
      "Modelos animais são essenciais na fase pré-clínica, mas nem sempre reproduzem toda a complexidade clínica, temporal e genética da doença humana.",
    evidencia:
      "Há boa utilidade para testar hipóteses mecanísticas e biomarcadores, porém parte dos resultados positivos não se confirma em ensaios clínicos posteriores.",
    aplicabilidade:
      "Relevante para formar leitura crítica de artigos e melhorar desenho experimental com maior rigor translacional.",
    limitacoes:
      "Diferenças entre espécies, endpoints comportamentais não padronizados e baixo poder de replicação entre laboratórios.",
    referencias: [
      "https://pubmed.ncbi.nlm.nih.gov/31729545/",
      "https://pubmed.ncbi.nlm.nih.gov/33777322/",
      "https://pubmed.ncbi.nlm.nih.gov/39587789/",
    ],
  },
  {
    titulo: "O que a ciência realmente sabe sobre plantas e memória?",
    contextualizacao:
      "Plantas medicinais são muito buscadas na prática popular. A análise científica exige separar plausibilidade biológica, evidência pré-clínica e dados clínicos.",
    evidencia:
      "Existem sinais promissores para alguns fitocompostos em inflamação, microcirculação e estresse oxidativo, mas com níveis de evidência diferentes entre espécies e formulações.",
    aplicabilidade:
      "Ajuda profissionais e estudantes a orientar decisões com base em grau de evidência, segurança e interação medicamentosa.",
    limitacoes:
      "Variação de qualidade dos extratos, ausência de padronização entre estudos e risco de extrapolação indevida de dados in vitro/in vivo para uso clínico.",
    referencias: [
      "https://pubmed.ncbi.nlm.nih.gov/32382574/",
      "https://pubmed.ncbi.nlm.nih.gov/35720215/",
      "https://pubmed.ncbi.nlm.nih.gov/39870228/",
    ],
  },
];

export default function BlogCientificoPage() {
  return (
    <main className="section-page blog-page">
      <h1>Blog Científico Atualizado</h1>
      <p className="section-lead">Publicação quinzenal com linguagem clara, base em evidências e atualização contínua em 2026.</p>

      <section className="section-card">
        <h3>Calendário de publicação quinzenal (2026)</h3>
        <div className="blog-schedule-grid">
          {publicacaoQuinzenal2026.map((item) => (
            <article key={item.periodo} className="blog-schedule-card">
              <p className="blog-periodo">{item.periodo}</p>
              <h4>{item.tema}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3>Temas sugeridos</h3>
        <ul>
          <li>Monoterpenos e modulação da acetilcolinesterase</li>
          <li>O papel do Nrf2 na neuroproteção</li>
          <li>Limitações dos modelos animais de Alzheimer</li>
          <li>O que a ciência realmente sabe sobre plantas e memória?</li>
        </ul>
        <h3>Estrutura ideal do post</h3>
        <ol>
          <li>Contextualização</li>
          <li>Evidência científica</li>
          <li>Aplicabilidade</li>
          <li>Limitações</li>
          <li>Referências</li>
        </ol>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Posts-modelo baseados nos temas solicitados</h3>
        <div className="blog-post-grid">
          {postsModelo.map((post) => (
            <article key={post.titulo} className="blog-post-card">
              <h4>{post.titulo}</h4>
              <p><strong>1. Contextualização:</strong> {post.contextualizacao}</p>
              <p><strong>2. Evidência científica:</strong> {post.evidencia}</p>
              <p><strong>3. Aplicabilidade:</strong> {post.aplicabilidade}</p>
              <p><strong>4. Limitações:</strong> {post.limitacoes}</p>
              <div>
                <strong>5. Referências:</strong>
                <ul>
                  {post.referencias.map((url) => (
                    <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Artigos de 2026 e linha de atualização</h3>
        <p>
          Esta seção foi preparada para receber e destacar publicações de 2026.
          Abaixo, mantemos uma base de referências recentes do tema monoterpenos para curadoria contínua.
        </p>
        <ul>
          {monoterpenosArtigos.slice(0, 8).map((url) => (
            <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
          ))}
        </ul>
      </section>
    </main>
  );
}
