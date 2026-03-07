import React from "react";
import "./SectionPages.css";
import plantas from "../data/plantas";

const plantasDestaque = [
  {
    nome: "Rosmarinus officinalis (Alecrim)",
    imagem: "/images/alecrim.jpg",
    historia:
      "Uso tradicional mediterrâneo em culinária e práticas de cuidado; ganhou atenção em estudos de neuroproteção.",
    mecanismo:
      "Ácido rosmarínico/carnosol associados à modulação de estresse oxidativo, neuroinflamação e possível ação sobre AChE.",
    potencial:
      "Candidato adjuvante em estratégias de prevenção integradas com exercício, dieta e estimulação cognitiva.",
    evidencia: "Evidência pré-clínica moderada; ensaios clínicos ainda limitados para desfechos cognitivos de longo prazo.",
    seguranca: "Geralmente seguro em uso alimentar; extratos concentrados exigem cautela clínica e avaliação de interações.",
  },
  {
    nome: "Curcuma longa (Cúrcuma)",
    imagem: "/images/curcuma.jpg",
    historia:
      "Amplamente utilizada na medicina tradicional asiática e em alimentação funcional.",
    mecanismo:
      "Curcuminóides com ação anti-inflamatória (NF-κB), antioxidante e potencial modulação de agregação proteica.",
    potencial:
      "Interessante para protocolos de neuroinflamação e suporte metabólico em envelhecimento cerebral.",
    evidencia: "Boa base pré-clínica e estudos clínicos heterogêneos; necessidade de padronização de formulação/biodisponibilidade.",
    seguranca: "Bem tolerada em doses usuais; atenção para uso com anticoagulantes e doenças biliares.",
  },
  {
    nome: "Ginkgo biloba",
    imagem: "/images/ginkgo.jpg",
    historia:
      "Emprego tradicional e farmacêutico consolidado em diferentes países para circulação e cognição.",
    mecanismo:
      "Efeito sobre microcirculação, defesa antioxidante e modulação de mediadores inflamatórios.",
    potencial:
      "Pode contribuir para sintomas cognitivos leves quando inserido em abordagem multiprofissional.",
    evidencia: "Há ensaios clínicos e metanálises, com resultados dependentes de extrato padronizado e perfil do paciente.",
    seguranca: "Precisa de triagem de risco hemorrágico e revisão de interação medicamentosa.",
  },
  {
    nome: "Bacopa monnieri",
    imagem: "/images/bacopa.jpg",
    historia:
      "Planta da tradição ayurvédica, historicamente ligada a memória e aprendizado.",
    mecanismo:
      "Bacosídeos associados a modulação colinérgica, sinalização sináptica e redução de dano oxidativo.",
    potencial:
      "Aplicável em protocolos de performance cognitiva e atenção, com monitoramento individual.",
    evidencia: "Evidência clínica inicial para cognição em alguns contextos; ainda insuficiente para recomendações universais.",
    seguranca: "Possíveis efeitos gastrointestinais leves; monitorar sedação e interações em polifarmácia.",
  },
];

const simuladorMecanismos = [
  {
    etapa: "Formação de placa amiloide",
    detalhe: "Agregação progressiva de peptídeos β-amiloide, disfunção sináptica e sinalização pró-inflamatória.",
    icone: "🧩",
    alvo: "Aβ42, clivagem APP",
    impacto: "Risco de perda de plasticidade",
  },
  {
    etapa: "Atuação antioxidante",
    detalhe: "Neutralização de radicais livres e suporte a vias endógenas de defesa redox.",
    icone: "🛡️",
    alvo: "Nrf2 / GSH",
    impacto: "Menor dano oxidativo neuronal",
  },
  {
    etapa: "Inibição da AChE",
    detalhe: "Aumento relativo de acetilcolina na fenda sináptica e suporte à neurotransmissão colinérgica.",
    icone: "⚙️",
    alvo: "AChE",
    impacto: "Melhor sinalização cognitiva",
  },
  {
    etapa: "Redução de citocinas",
    detalhe: "Modulação de citocinas pró-inflamatórias e redução de neuroinflamação persistente.",
    icone: "🌿",
    alvo: "IL-1β, TNF-α",
    impacto: "Ambiente neuroimune mais estável",
  },
];

const areaPesquisadores = [
  {
    titulo: "Submissão de artigos",
    descricao: "Fluxo editorial para revisão, relatos experimentais e materiais educacionais com avaliação técnica.",
    campos: ["Título", "Resumo estruturado", "Palavras-chave", "DOI/Preprint", "Conflito de interesse"],
    pratica: "Triagem inicial em até 7 dias e parecer técnico em até 21 dias.",
  },
  {
    titulo: "Divulgação de projetos",
    descricao: "Vitrine para grupos divulgarem projetos em andamento, recrutamento e resultados preliminares.",
    campos: ["Instituição", "Linha de pesquisa", "Status", "Equipe", "Contato"],
    pratica: "Publicação em formato de ficha padrão para facilitar colaboração entre laboratórios.",
  },
  {
    titulo: "Chamadas para colaboração",
    descricao: "Mural de coautoria e colaboração interinstitucional para projetos translacionais e revisões sistemáticas.",
    campos: ["Tema", "Perfil procurado", "Entregáveis", "Prazo", "Modalidade (remoto/presencial)"],
    pratica: "Chamadas com prazo e requisitos claros para acelerar matching entre pesquisadores.",
  },
  {
    titulo: "Banco de ideias de TCC/mestrado/doutorado",
    descricao: "Repositório de temas com lacunas científicas, hipótese central e proposta metodológica inicial.",
    campos: ["Problema", "Hipótese", "Método sugerido", "Nível (TCC/MSc/PhD)", "Referências-chave"],
    pratica: "Cada ideia inclui escopo mínimo viável para facilitar início rápido do projeto.",
  },
];

const expansaoEstrategica = [
  "Versão em inglês para internacionalização dos conteúdos.",
  "DOI para materiais educativos (guias, infográficos, mapas mentais e trilhas de estudo).",
  "Indexação como repositório educacional para ampliar alcance e citabilidade.",
  "Parcerias com universidades, ligas acadêmicas e grupos de pesquisa translacional.",
  "Presença ativa no Instagram com cortes científicos curtos e linguagem acessível.",
];

export default function DiferenciaisInovadoresPage() {
  return (
    <main className="section-page diferenciais-page">
      <h1>Diferenciais Inovadores</h1>
      <p className="section-lead">Módulos práticos para conectar ciência, educação e colaboração acadêmica no PlantaMente.</p>

      <section className="bloco-diferencial">
        <h2>Planta da Semana</h2>
        <p className="bloco-subtitulo">
          Curadoria rotativa com mais opções de plantas e ficha técnica resumida.
        </p>

        <div className="grid-plantas-semana">
          {plantasDestaque.map((planta) => (
            <article className="card-planta-semana" key={planta.nome}>
              <div className="planta-imagem-wrap">
                <img
                  src={planta.imagem}
                  alt={planta.nome}
                  className="planta-imagem"
                />
              </div>

              <div className="planta-conteudo">
                <h3>{planta.nome}</h3>

                <p><strong>História:</strong> {planta.historia}</p>
                <p><strong>Mecanismo molecular:</strong> {planta.mecanismo}</p>
                <p><strong>Potencial terapêutico:</strong> {planta.potencial}</p>
                <p><strong>Grau de evidência:</strong> {planta.evidencia}</p>
                <p><strong>Alvo:</strong> {planta.alvo}</p>
                <p><strong>Impacto:</strong> {planta.impacto}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Simulador de Mecanismos</h3>
        <p className="simulador-lead">Animação em etapas com alvos biológicos e impacto esperado em neuroproteção.</p>
        <div className="simulador-animado" aria-label="Simulador visual de mecanismos">
          <div className="simulador-trilho" />
          {simuladorMecanismos.map((item, idx) => (
            <article key={item.etapa} className="simulador-etapa" style={{ animationDelay: `${idx * 0.25}s` }}>
              <span className="simulador-icone" aria-hidden="true">{item.icone}</span>
              <h4>{item.etapa}</h4>
              <p>{item.detalhe}</p>
              <p className="simulador-meta"><strong>Alvo:</strong> {item.alvo}</p>
              <p className="simulador-meta"><strong>Impacto:</strong> {item.impacto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Área para Pesquisadores</h3>
        <div className="pesquisadores-grid">
          {areaPesquisadores.map((item) => (
            <article key={item.titulo} className="pesquisadores-card">
              <h4>{item.titulo}</h4>
              <p>{item.descricao}</p>
              <p className="pesquisa-pratica"><strong>Como funciona na prática:</strong> {item.pratica}</p>
              <p><strong>Campos recomendados:</strong></p>
              <ul>
                {item.campos.map((campo) => (
                  <li key={campo}>{campo}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Expansão Estratégica</h3>
        <p>Roadmap para tornar o PlantaMente referência em educação e divulgação científica sobre saúde cerebral.</p>
        <ul className="expansao-lista">
          {expansaoEstrategica.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>Indicadores de implementação (2026)</h3>
        <div className="section-grid">
          <article className="section-card">
            <h4>Meta editorial</h4>
            <p>2 publicações/mês com revisão técnica e linguagem acessível.</p>
          </article>
          <article className="section-card">
            <h4>Meta de colaboração</h4>
            <p>1 chamada bimestral para projetos interinstitucionais.</p>
          </article>
          <article className="section-card">
            <h4>Meta educacional</h4>
            <p>Atualização trimestral de materiais com DOI e versão bilingue.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
