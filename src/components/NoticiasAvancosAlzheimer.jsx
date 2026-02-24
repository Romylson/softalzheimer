import React from "react";
import { Card } from "../components/ui/card";
import { useTranslation } from "react-i18next";

const noticias = [
  {
    titulo: "noticia_1_titulo",
    descricao: "noticia_1_desc",
    data: "08 de janeiro de 2026"
  },
  {
    titulo: "noticia_2_titulo",
    descricao: "noticia_2_desc",
    data: "15 de janeiro de 2026"
  },
  {
    titulo: "noticia_3_titulo",
    descricao: "noticia_3_desc",
    data: "22 de janeiro de 2026"
  },
  {
    titulo: "noticia_4_titulo",
    descricao: "noticia_4_desc",
    data: "29 de janeiro de 2026"
  },
  {
    titulo: "noticia_5_titulo",
    descricao: "noticia_5_desc",
    data: "05 de fevereiro de 2026"
  },
  {
    titulo: "noticia_6_titulo",
    descricao: "noticia_6_desc",
    data: "12 de fevereiro de 2026"
  },
  {
    titulo: "noticia_7_titulo",
    descricao: "noticia_7_desc",
    data: "19 de fevereiro de 2026"
  },
  {
    titulo: "noticia_8_titulo",
    descricao: "noticia_8_desc",
    data: "26 de fevereiro de 2026"
  },
  {
    titulo: "noticia_9_titulo",
    descricao: "noticia_9_desc",
    data: "05 de março de 2026"
  },
  {
    titulo: "noticia_10_titulo",
    descricao: "noticia_10_desc",
    data: "12 de março de 2026"
  },
  {
    titulo: "noticia_11_titulo",
    descricao: "noticia_11_desc",
    data: "19 de março de 2026"
  },
  {
    titulo: "noticia_12_titulo",
    descricao: "noticia_12_desc",
    data: "26 de março de 2026"
  }
];


const eventos = [
  {
    nome: "Alzheimer's Association International Conference (AAIC) 2026",
    local: "Washington, EUA",
    data: "26 a 30 de julho de 2026",
    link: "https://alz.org/aaic/"
  },
  {
    nome: "Congresso GERO USP 2026",
    local: "São Paulo, Brasil",
    data: "24 a 26 de abril de 2026",
    link: "https://congressogerousp.com.br/"
  },
  {
    nome: "Dementia World Conference 2026",
    local: "Barcelona, Espanha",
    data: "20 a 23 de agosto de 2026",
    link: "https://www.dementiaworldconference.com/"
  },
  {
    nome: "ECNP Congress 2026",
    local: "Viena, Áustria",
    data: "24 a 27 de outubro de 2026",
    link: "https://www.ecnp.eu/congress2026/"
  },
  {
    nome: "CINETS 2026 — Congresso Internacional de Neurociência Translacional",
    local: "Online",
    data: "03 a 05 de setembro de 2026",
    link: "https://doity.com.br/congressocinets"
  },
  {
    nome: "Simpósio UERJ de Alzheimer e Envelhecimento",
    local: "Rio de Janeiro, Brasil",
    data: "17 a 19 de setembro de 2026",
    link: "https://www.cepuerj.uerj.br/"
  },
  {
    nome: "EndoDebate Neurodegeneração 2026",
    local: "São Paulo, Brasil",
    data: "09 de outubro de 2026",
    link: "https://www.endodebate.com.br/"
  },
  {
    nome: "Neuropharma International Meeting 2026",
    local: "Londres, Inglaterra",
    data: "06 a 08 de novembro de 2026",
    link: "https://neuro.pharmaceuticalconferences.com/"
  },
  {
    nome: "Brain Disorders Congress 2026",
    local: "Las Vegas, EUA",
    data: "19 a 21 de novembro de 2026",
    link: "https://braindisorders.neuroconferences.com/"
  },
  {
    nome: "Global Dementia Collaboration Forum (ADI)",
    local: "Online",
    data: "03 a 05 de dezembro de 2026",
    link: "https://www.alzint.org/"
  },
  {
    nome: "Brazilian Meeting on Cognitive Aging 2026",
    local: "São Paulo, Brasil",
    data: "24 a 26 de abril de 2026",
    link: "https://congressogerousp.com.br/"
  },
  {
    nome: "World Alzheimer Month 2026 (ADI)",
    local: "Global / Online",
    data: "Setembro de 2026 (agenda oficial no link)",
    link: "https://www.alzint.org/"
  }
];


export default function NoticiasAvancosAlzheimer() {
  const { t } = useTranslation();

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-center">📅 {t("noticias_titulo")}</h2>
      <div className="row g-4 mb-5">
        {noticias.map((n, i) => (
          <div className="col-12 col-md-6 col-lg-4" key={i}>
            <Card className="p-3 shadow-sm h-100">
              <h5 className="text-primary fw-bold">{t(n.titulo)}</h5>
              <small className="text-muted">{n.data}</small>

              <p className="mt-2 small">{t(n.descricao)}</p>
            </Card>
          </div>
        ))}
      </div>

      <h3 className="fw-bold mb-3 text-center">🧠 {t("eventos_titulo")}</h3>
      <div className="row g-4 mb-4">
        {eventos.map((e, i) => (
          <div className="col-12 col-md-6 col-lg-4" key={i}>
            <Card className="p-3 shadow-sm h-100">
              <h6 className="text-dark fw-bold">{e.nome}</h6>
              <p className="mb-1"><strong>{t("local")}:</strong> {e.local}</p>
              <p className="mb-1"><strong>{t("data")}:</strong> {e.data}</p>
              {e.link && (
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  {t("acessar_evento")}
                </a>
              )}
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=pt.brazilian%23holiday%40group.v.calendar.google.com&ctz=America%2FSao_Paulo"
          style={{ border: 0, width: "100%", height: "500px" }}
          frameBorder="0"
          scrolling="no"
          title="Calendário de Eventos"
        ></iframe>
      </div>
    </div>
  );
}
