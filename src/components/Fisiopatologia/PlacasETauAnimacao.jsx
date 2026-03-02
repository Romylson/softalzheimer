import React from "react";
import { useTranslation } from "react-i18next";
import "./PlacasETauAnimacao.css";
import "./fisiopatologia.css";
import { autoresFisiopatologia } from "../../data/fisiopatologia";

const autorBetaAmiloide = autoresFisiopatologia.placasETauAnimacao.betaAmiloide;
const autorTau = autoresFisiopatologia.placasETauAnimacao.tau;

export default function PlacasETauAnimacao() {
  const { t } = useTranslation();

  return (
    <section className="fisio-section">
      <h2 className="fw-bold text-primary text-center mb-4">
        {t("fisiopatologia.placas_tau_titulo")}
      </h2>

      <div className="fisio-grid-2">
        {/* Bloco βeta-Amiloide */}
        <div className="fisio-card">
          <img
            src="/images/beta-amiloide.png"
            alt="βeta-Amiloide"
            className="molecule-move fisio-image-large"
          />
          <h4 className="fw-bold">{t("fisiopatologia.beta_amiloide")}</h4>
          <p className="text-muted small">{t("fisiopatologia.beta_amiloide_desc")}</p>
          <p className="text-muted small mt-2">Imagem: βeta-Amiloide - Autor: {autorBetaAmiloide}</p>
        </div>

        {/* Bloco Tau */}
        <div className="fisio-card">
          <img
            src="/images/tau.png"
            alt="Tau"
            className="molecule-move fisio-image-large"
          />
          <h4 className="fw-bold">{t("fisiopatologia.tau")}</h4>
          <p className="text-muted small">{t("fisiopatologia.tau_desc")}</p>
          <p className="text-muted small mt-2">Imagem: Tau - Autor: {autorTau}</p>
        </div>
      </div>
    </section>
  );
}
