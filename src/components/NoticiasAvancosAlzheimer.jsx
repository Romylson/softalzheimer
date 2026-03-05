import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/ui/card";
import "./NoticiasAvancosAlzheimer.css";
import { ultimasNoticias } from "../data/noticias";


/*const ultimasNoticias = [
  {
    titulo: "Biomarcadores sanguíneos avançam na triagem precoce",
    descricao:
      "Novos estudos reforçam o uso combinado de p-tau e NfL para identificar risco de declínio cognitivo em fases iniciais.",
    data: "10 de janeiro de 2026",
    imagem: "/images/biomarcadores-noticia.jpg",
    link: "/noticias/biomarcadores-sanguineos-triagem-precoce",

  },
  {
    titulo: "Sono de má qualidade é associado à pior progressão cognitiva",
    descricao:
      "Revisões recentes destacam o impacto do sono fragmentado na consolidação de memória e em indicadores de risco para demência.",
    data: "24 de janeiro de 2026",
    imagem: "/images/sono.jpg",
    link: "/noticias/sono-qualidade-progressao-cognitiva",
  },
  {
    titulo: "Intervenções multidomínio mostram melhores resultados",
    descricao:
      "Programas que combinam dieta, atividade física e treino cognitivo apresentaram ganhos superiores aos protocolos isolados.",
    data: "07 de fevereiro de 2026",
    imagem: "/images/intervencao.jpg",
    link: "/noticias/intervencoes-multidominio-melhores-resultados",
  },
  {
    titulo: "IA em neuroimagem reduz tempo de apoio diagnóstico",
    descricao:
      "Ferramentas assistivas estão reduzindo tempo de análise e apoiando equipes clínicas na avaliação de padrões de neurodegeneração.",
    data: "21 de fevereiro de 2026",
    imagem: "/images/Ia.jpg",
    link: "/noticias/ia-neuroimagem-reduz-tempo-apoio-diagnostico",
  },
  {
    titulo: "Prevenção com atividade física ganha novas evidências",
    descricao:
      "Meta-análises recentes reforçam que exercícios aeróbicos regulares podem reduzir risco de declínio cognitivo em idosos.",
    data: "04 de março de 2026",
    imagem: "/images/prevencao.jpg",
    link: "/noticias/atividade-fisica-prevencao-novas-evidencias",
  },
  {
    titulo: "Avanços em terapias antiamiloide seguem em avaliação",
    descricao:
      "Novos resultados de acompanhamento mostram benefícios clínicos em subgrupos e destacam necessidade de monitoramento contínuo.",
    data: "19 de março de 2026",
    imagem: "/images/avancos.jpg",
    link: "/noticias/terapias-antiamiloide-em-avaliacao",
  },
  {
    titulo: "Estimulação cognitiva domiciliar melhora adesão",
    descricao:
      "Protocolos com tarefas guiadas por aplicativo aumentaram a frequência de treino cognitivo em cuidadores e pacientes.",
    data: "02 de abril de 2026",
    imagem: "/images/protocolos.jpg",
    link: "/noticias/estimulacao-cognitiva-domiciliar-adesao",
  },
  {
    titulo: "Nutrição e microbiota entram no foco da neuroproteção",
    descricao:
      "Estudos observacionais apontam associação entre padrões alimentares anti-inflamatórios e melhor desempenho cognitivo.",
    data: "16 de abril de 2026",
    imagem: "/images/microbiota.jpg",
    link: "/noticias/nutricao-microbiota-neuroprotecao",
  },
];
*/
const eventos = [
  {
    nome: "Alzheimer's Association International Conference®",
    local: "Toronto, Canadá",
    data: "12 a 15 de julho de 2026",
    link: "https://www.alz.org/aaic/",
  },
  {
    nome: "EndoDebate Neurodegeneração 2026",
    local: "Online, Brasil",
    data: "24 a 25 de julho de 2026",
    link: "https://www.endodebate.com.br/",
  },
  {
    nome: "Dementia World Conference 2026",
    local: "Dubai, Emirados Árabes Unidos",
    data: "21 a 23 de agosto de 2026",
    link: "https://www.dementiaworldconference.com/",
  },
  {
    nome: "Ibero-American Forum on Neuroprotection 2026",
    local: "Dubai, Emirados Árabes Unidos",
    data: "21 a 23 de agosto de 2026",
    link: "https://www.dementiaworldconference.com/",
  },
  {
    nome: "Brain Disorders Congress 2026",
    local: "Londres, Reino Unido",
    data: "24 a 25 de agosto de 2026",
    link: "https://braindisorders.neuroconferences.com/",
  },
  {
    nome: "Neuropharma International Meeting 2026",
    local: "Paris, France",
    data: "17 a 18 de setembro de 2026",
    link: "https://neuro.pharmaceuticalconferences.com/",
  },
  {
    nome: "ECNP Congress 2026",
    local: "Europa",
    data: "10 a 13 de outubro de 2026",
    link: "https://www.ecnp.eu/congress2026/",
  },
  {
    nome: "Congresso GERO USP 2026",
    local: "São Paulo, Brasil",
    data: "15 a 17 de outubro de 2026",
    link: "https://congressogerousp.com.br/",
  },
  {
    nome: "CINETS 2026 — Congresso Internacional de Neurociência Translacional",
    local: "Brasil",
    data: "06 a 08 de novembro de 2026",
    link: "https://doity.com.br/congressocinets",
  },
];

export default function NoticiasAvancosAlzheimer() {
  return (
    <div className="p-3">
      {/* EVENTOS */}
      <h3 className="fw-bold mt-5 mb-3 text-center">🧠 Eventos e calendário científico</h3>

      <div className="row g-4 mb-4">
        {eventos.map((evento) => (
          <div className="col-12 col-md-6 col-lg-4" key={evento.nome}>
            <Card className="p-3 shadow-sm h-100">
              <h6 className="text-dark fw-bold">{evento.nome}</h6>
              <p className="mb-1">
                <strong>Local:</strong> {evento.local}
              </p>
              <p className="mb-2">
                <strong>Data:</strong> {evento.data}
              </p>
              <a
                href={evento.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success btn-sm"
              >
                Acessar evento
              </a>
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center mt-2">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=pt.brazilian%23holiday%40group.v.calendar.google.com&ctz=America%2FSao_Paulo"
          style={{ border: 0, width: "100%", height: "500px" }}
          frameBorder="0"
          scrolling="no"
          title="Calendário de Eventos"
        />
      </div>

      {/* NOTÍCIAS */}
      <section className="noticias-wrap">
        <div className="noticias-inner container">
          <h2 className="noticias-title mb-2">Últimas notícias</h2>

          <div className="row g-4">
            {ultimasNoticias.map((item) => (
              <div className="col-12 col-md-6 col-lg-3" key={item.slug}>
                <Link
                  to={`/noticias/${item.slug}`}
                  className="text-decoration-none d-block"
                >
                  <Card className="noticia-card h-100 overflow-hidden">
                    <img src={item.imagem} alt={item.titulo} />
                    <div className="noticia-body">
                      <h6 className="noticia-titulo">{item.titulo}</h6>
                      <small className="noticia-meta">{item.data}</small>
                      <p className="noticia-desc">{item.resumo || item.descricao}</p>

                      <span className="btn btn-leia-mais">
                        Ler notícia <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}