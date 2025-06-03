
import React from "react";
import { useTranslation } from "react-i18next";

export default function TimelineProgressao() {
  const { t } = useTranslation();

  const etapas = [
    {
      cor: "#38d39f",
      titulo: t("fisiopatologia.leve"),
      desc: t("fisiopatologia.leve_desc"),
    },
    {
      cor: "#f9b233",
      titulo: t("fisiopatologia.moderada"),
      desc: t("fisiopatologia.moderada_desc"),
    },
    {
      cor: "#fa7268",
      titulo: t("fisiopatologia.grave"),
      desc: t("fisiopatologia.grave_desc"),
    }
  ];

  return (
    <section className="my-5">
      <h2 className="fw-bold text-primary text-center mb-4">{t("fisiopatologia.timeline_titulo")}</h2>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        {etapas.map((etapa, i) => (
          <div key={i} className="text-center">
            <div style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: etapa.cor,
              margin: "auto"
            }} />
            <h5 className="mt-2">{etapa.titulo}</h5>
            <div className="text-muted small" style={{ maxWidth: 220 }}>{etapa.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
