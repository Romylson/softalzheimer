import React from "react";
import { Card } from "../components/ui/card";

const ultimasNoticias = [
  {
    titulo: "Biomarcadores sanguíneos avançam na triagem precoce",
    descricao:
      "Novos estudos reforçam o uso combinado de p-tau e NfL para identificar risco de declínio cognitivo em fases iniciais.",
    data: "10 de janeiro de 2026",
    imagem: "/images/alzheimer.png",
    link: "https://alz-journals.onlinelibrary.wiley.com/",
  },
  {
    titulo: "Sono de má qualidade é associado à pior progressão cognitiva",
    descricao:
      "Revisões recentes destacam o impacto do sono fragmentado na consolidação de memória e em indicadores de risco para demência.",
    data: "24 de janeiro de 2026",
    imagem: "/images/fisiopatologia.png",
    link: "https://www.thelancet.com/journals/laneur/home",
  },
  {
    titulo: "Intervenções multidomínio mostram melhores resultados",
    descricao:
      "Programas que combinam dieta, atividade física e treino cognitivo apresentaram ganhos superiores aos protocolos isolados.",
    data: "07 de fevereiro de 2026",
    imagem: "/images/leve.png",
    link: "https://www.alzheimersanddementia.com/",
  },
  {
    titulo: "IA em neuroimagem reduz tempo de apoio diagnóstico",
    descricao:
      "Ferramentas assistivas estão reduzindo tempo de análise e apoiando equipes clínicas na avaliação de padrões de neurodegeneração.",
    data: "21 de fevereiro de 2026",
    imagem: "/images/beta-amiloide.png",
    link: "https://www.nature.com/subjects/alzheimers-disease",
  },
  {
    titulo: "Neuroinflamação ganha destaque como alvo terapêutico",
    descricao:
      "Publicações recentes mostram avanço na compreensão das vias inflamatórias e de potenciais terapias adjuvantes.",
    data: "05 de março de 2026",
    imagem: "/images/tau.png",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=alzheimer+neuroinflammation+2026",
  },
  {
    titulo: "Tecnologias digitais ampliam monitoramento remoto",
    descricao:
      "Wearables e apps de rotina cognitiva mostram utilidade para detectar mudanças sutis e acompanhar pacientes à distância.",
    data: "18 de março de 2026",
    imagem: "/images/grave.png",
    link: "https://www.who.int/news-room/fact-sheets/detail/dementia",
  },
];

export default function NoticiasAvancosAlzheimer() {
  return (
    <section className="container py-4">
      <h2 className="fw-bold mb-4 text-center">📰 Últimas notícias sobre Alzheimer</h2>
      <p className="text-center text-muted mb-4">
        Seleção de atualizações recentes com foco em diagnóstico, prevenção, tecnologia e neuroproteção.
      </p>
      <div className="row g-4">
        {ultimasNoticias.map((item) => (
          <div className="col-12 col-md-6 col-lg-4" key={item.titulo}>
            <Card className="shadow-sm h-100 overflow-hidden">
              <img src={item.imagem} alt={item.titulo} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div className="p-3 d-flex flex-column h-100">
                <h6 className="fw-bold mb-2">{item.titulo}</h6>
                <small className="text-muted">{item.data}</small>
                <p className="mt-2 mb-3 small">{item.descricao}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm mt-auto">
                  Ler notícia
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
