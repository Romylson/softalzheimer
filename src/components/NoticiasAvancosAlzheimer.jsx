import React from "react";
import { Card } from "../components/ui/card";
import { useTranslation } from "react-i18next";

const noticias = [
  {
    titulo: "noticia_1_titulo",
    descricao: "noticia_1_desc",
    data: "10 de junho de 2025"
  },
  {
    titulo: "noticia_2_titulo",
    descricao: "noticia_2_desc",
    data: "2 de junho de 2025"
  },
  {
    titulo: "noticia_3_titulo",
    descricao: "noticia_3_desc",
    data: "28 de maio de 2025"
  },
  {
    titulo: "noticia_4_titulo",
    descricao: "noticia_4_desc",
    data: "12 de junho de 2025"
  },
  {
    titulo: "noticia_5_titulo",
    descricao: "noticia_5_desc",
    data: "8 de junho de 2025"
  },
  {
    titulo: "noticia_6_titulo",
    descricao: "noticia_6_desc",
    data: "6 de junho de 2025"
  },
  {
    titulo: "noticia_7_titulo",
    descricao: "noticia_7_desc",
    data: "1 de junho de 2025"
  },
  {
    titulo: "noticia_8_titulo",
    descricao: "noticia_8_desc",
    data: "30 de maio de 2025"
  },
  {
    titulo: "noticia_9_titulo",
    descricao: "noticia_9_desc",
    data: "27 de maio de 2025"
  },
  {
    titulo: "noticia_10_titulo",
    descricao: "noticia_10_desc",
    data: "25 de maio de 2025"
  },
  {
    titulo: "noticia_11_titulo",
    descricao: "noticia_11_desc",
    data: "20 de maio de 2025"
  },
  {
    titulo: "noticia_12_titulo",
    descricao: "noticia_12_desc",
    data: "18 de maio de 2025"
  }
];

const eventos = [
  {
    nome: "evento_1_nome",
    local: "evento_1_local",
    data: "15 a 18 de julho de 2025"
  },
  {
    nome: "evento_2_nome",
    local: "evento_2_local",
    data: "3 a 6 de agosto de 2025"
  },
  {
    nome: "evento_3_nome",
    local: "evento_3_local",
    data: "25 a 27 de setembro de 2025"
  },
  {
    nome: "evento_4_nome",
    local: "evento_4_local",
    data: "27 Julho a 31 setembro de 2025",
    link: "https://www.conferenceregistration.org/aaic/"
  },
  {
    nome: "evento_5_nome",
    local: "evento_5_local",
    data: "5 a 7 de setembro de 2025",
    link: "https://www.dementiaworldconference.com/"
  },
  {
    nome: "evento_6_nome",
    local: "evento_6_local",
    data: "29 a 31 de julho de 2025",
    link: "https://www.cepuerj.uerj.br/cursos2.php?tipo=eventos&curso=S01370&ano=2025"
  },
  {
    nome: "evento_7_nome",
    local: "evento_7_local",
    data: "25 a 27 de setembro de 2025",
    link: "https://congressogerousp.com.br/"
  },
  {
    nome: "evento_8_nome",
    local: "evento_8_local",
    data: "29 de setembro de 2025",
    link: "https://www.endodebate.com.br/produto/endodebate-alzheimer-online-2025/"
  },
  {
    nome: "evento_9_nome",
    local: "evento_9_local",
    data: "11 a 14 de outubro de 2025",
    link: "https://www.ecnp.eu/congress2025/"
  },
  {
    nome: "evento_10_nome",
    local: "evento_10_local",
    data: "25 a 26 de agosto de 2025",
    link: "https://neuro.pharmaceuticalconferences.com/"
  },
  {
    nome: "evento_11_nome",
    local: "evento_11_local",
    data: "06 a 07 de outubro de 2025",
    link: "https://braindisorders.neuroconferences.com/"
  },
  {
    nome: "evento_12_nome",
    local: "evento_12_local",
    data: "06 a 08 de novembro de 2025",
    link: "https://doity.com.br/congressocinets"
  }
];

export default function NoticiasAvancosAlzheimer() {
  const { t } = useTranslation();

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-center">📅 {t("noticias_titulo")}</h2>
      <div className="row g-4 mb-5">
        {noticias.map((n, i) => (
          <div className="col-md-4" key={i}>
            <Card className="p-3 shadow-sm h-100">
              <h5 className="text-primary fw-bold">{t(n.titulo)}</h5>
              <small className="text-muted">{t(n.data)}</small>

              <p className="mt-2 small">{t(n.descricao)}</p>
            </Card>
          </div>
        ))}
      </div>

      <h3 className="fw-bold mb-3 text-center">🧠 {t("eventos_titulo")}</h3>
      <div className="row g-4 mb-4">
        {eventos.map((e, i) => (
          <div className="col-md-4" key={i}>
            <Card className="p-3 shadow-sm h-100">
              <h6 className="text-dark fw-bold">{t(e.nome)}</h6>
              <p className="mb-1"><strong>{t("local")}:</strong> {t(e.local)}</p>
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
