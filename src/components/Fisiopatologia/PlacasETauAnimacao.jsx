
import React from "react";
import { useTranslation } from "react-i18next";

export default function PlacasETauAnimacao() {
  const { t } = useTranslation();

  return (
    <section className="my-5">
      <h2 className="fw-bold text-primary text-center mb-4">{t("fisiopatologia.placas_tau_titulo")}</h2>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        <div className="text-center">
          <div style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#f9b233",
            margin: "auto"
          }} />
          <div className="fw-bold mt-2">{t("fisiopatologia.beta_amiloide")}</div>
          <div className="text-muted small">{t("fisiopatologia.beta_amiloide_desc")}</div>
        </div>
        <div className="text-center">
          <div style={{
            width: 32,
            height: 60,
            borderRadius: 20,
            background: "#63b3ed",
            margin: "auto"
          }} />
          <div className="fw-bold mt-2">{t("fisiopatologia.tau")}</div>
          <div className="text-muted small">{t("fisiopatologia.tau_desc")}</div>
        </div>
      </div>
    </section>
  );
}
