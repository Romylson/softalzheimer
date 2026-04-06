// src/components/NoticiasAvancosAlzheimer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/ui/card";
import "./NoticiasAvancosAlzheimer.css";
import { ultimasNoticias } from "../data/noticias";



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
             {/* NOTÍCIAS */}
      <section className="noticias-wrap">
        <div className="noticias-inner">
          <div className="noticias-head">
            <h2 className="noticias-title">Últimas notícias</h2>
            <p className="noticias-subtitle">
              Seleção de atualizações com foco em diagnóstico, prevenção, tecnologia, nutrição e neuroproteção.
            </p>
            <Link to="/noticias" className="noticias-all">
              Ver todas <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="noticias-grid">
            {ultimasNoticias.map((item) => (
              <Link key={item.slug} to={`/noticias/${item.slug}`} className="noticia-card-pro">
                <div className="noticia-img">
                  <img src={item.imagem} alt={item.titulo} />
                </div>

                <div className="noticia-body-pro">
                  <div className="noticia-meta-pro">
                    <span className="badge-pro">{item.categoria}</span>
                    <span className="date-pro">{item.data}</span>
                    <span className="read-pro">{item.leituraMin} min</span>
                  </div>

                  <h3 className="noticia-title-pro">{item.titulo}</h3>
                  <p className="noticia-desc-pro">{item.resumo}</p>

                  <span className="btn-pro">
                    Ler notícia <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
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

    </div>
  );
}