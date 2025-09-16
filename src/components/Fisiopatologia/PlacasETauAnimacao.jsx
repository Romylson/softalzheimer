import React from "react";
import { useTranslation } from "react-i18next";
import "./PlacasETauAnimacao.css";
import { autoresFisiopatologia } from "../../data/fisiopatologia";

const autorBetaAmiloide = autoresFisiopatologia.placasETauAnimacao.betaAmiloide;
const autorTau = autoresFisiopatologia.placasETauAnimacao.tau;

export default function PlacasETauAnimacao() {
  const { t } = useTranslation();

  return (
    <section className="my-5">
      <h2 className="fw-bold text-primary text-center mb-4">
        {t("fisiopatologia.placas_tau_titulo")}
      </h2>

      <div className="d-flex flex-wrap justify-content-center gap-5">
        {/* Bloco βeta-Amiloide */}
        <div className="text-center">
          <img
            src="/images/beta-amiloide.png"
            alt="βeta-Amiloide"
            className="molecule-move"
            style={{ width: 400, height: 400, objectFit: "contain" }}
          />
          <div className="fw-bold mt-2">{t("fisiopatologia.beta_amiloide")}</div>
          <div className="text-muted small">{t("fisiopatologia.beta_amiloide_desc")}</div>
          <p className="text-muted small mt-2">Imagem: βeta-Amiloide - Autor: {autorBetaAmiloide}</p>
        </div>

        {/* Bloco Tau */}
        <div className="text-center">
          <img
            src="/images/tau.png"
            alt="Tau"
            className="molecule-move"
            style={{ width: 400, height: 400, objectFit: "contain" }}
          />
          <div className="fw-bold mt-2">{t("fisiopatologia.tau")}</div>
          <div className="text-muted small">{t("fisiopatologia.tau_desc")}</div>
          <p className="text-muted small mt-2">Imagem: Tau - Autor: {autorTau}</p>
        </div>
      </div>
    </section>
  );
}
