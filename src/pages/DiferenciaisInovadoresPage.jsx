import React from "react";
import "./SectionPages.css";

const plantaSemana = {
  nome: "Rosmarinus officinalis (Alecrim)",
  historia:
    "Usado tradicionalmente em práticas culinárias e medicinais no Mediterrâneo, o alecrim foi incorporado em estudos de neuroproteção por seu perfil antioxidante.",
  mecanismo:
    "Compostos como ácido rosmarínico e carnosol são associados à modulação do estresse oxidativo, redução de mediadores inflamatórios e possível ação sobre AChE.",
  potencial:
    "Promissor como suporte adjuvante em estratégias de prevenção e envelhecimento saudável, principalmente em protocolos combinados com estilo de vida neuroprotetor.",
  evidencia:
    "Predominantemente pré-clínica (in vitro/in vivo), com necessidade de mais ensaios clínicos padronizados para desfechos cognitivos de longo prazo.",
  seguranca:
    "Em uso alimentar, costuma ser bem tolerado. Extratos concentrados exigem cautela em pessoas com comorbidades e em uso de múltiplos fármacos.",
};

const simuladorMecanismos = [
  { etapa: "Formação de placa amiloide", detalhe: "Agregação progressiva de peptídeos β-amiloide e impacto sináptico.", icone: "🧩" },
  { etapa: "Atuação antioxidante", detalhe: "Neutralização de radicais livres e menor dano celular oxidativo.", icone: "🛡️" },
  { etapa: "Inibição da AChE", detalhe: "Maior disponibilidade de acetilcolina na fenda sináptica.", icone: "⚙️" },
  { etapa: "Redução de citocinas", detalhe: "Modulação de vias pró-inflamatórias e menor neuroinflamação.", icone: "🌿" },
];

const areaPesquisadores = [
  {
    titulo: "Submissão de artigos",
    descricao: "Canal para submissão de revisões, relatos de pesquisa e materiais de apoio didático com curadoria editorial.",
  },
  {
    titulo: "Divulgação de projetos",
    descricao: "Espaço para laboratórios e grupos compartilharem protocolos, resultados preliminares e oportunidades acadêmicas.",
  },
  {
    titulo: "Chamadas para colaboração",
    descricao: "Mural para coautorias, parcerias multi-institucionais e integração entre graduação, pós e pesquisadores independentes.",
  },
  {
    titulo: "Banco de ideias de TCC/mestrado/doutorado",
    descricao: "Repositório temático com perguntas de pesquisa, lacunas científicas e sugestões de desenho metodológico.",
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

      <section className="section-card">
        <h3>6.1 Planta da Semana</h3>
        <article className="planta-semana-card">
          <h4>{plantaSemana.nome}</h4>
          <p><strong>História:</strong> {plantaSemana.historia}</p>
          <p><strong>Mecanismo molecular:</strong> {plantaSemana.mecanismo}</p>
          <p><strong>Potencial terapêutico:</strong> {plantaSemana.potencial}</p>
          <p><strong>Grau de evidência:</strong> {plantaSemana.evidencia}</p>
          <p><strong>Segurança:</strong> {plantaSemana.seguranca}</p>
        </article>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>6.2 Simulador de Mecanismos</h3>
        <p className="simulador-lead">Animação simples do percurso neurobiológico e dos pontos de intervenção.</p>
        <div className="simulador-animado" aria-label="Simulador visual de mecanismos">
          <div className="simulador-trilho" />
          {simuladorMecanismos.map((item, idx) => (
            <article key={item.etapa} className="simulador-etapa" style={{ animationDelay: `${idx * 0.25}s` }}>
              <span className="simulador-icone" aria-hidden="true">{item.icone}</span>
              <h4>{item.etapa}</h4>
              <p>{item.detalhe}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" style={{ marginTop: "1rem" }}>
        <h3>6.3 Área para Pesquisadores</h3>
        <div className="pesquisadores-grid">
          {areaPesquisadores.map((item) => (
            <article key={item.titulo} className="pesquisadores-card">
              <h4>{item.titulo}</h4>
              <p>{item.descricao}</p>
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
