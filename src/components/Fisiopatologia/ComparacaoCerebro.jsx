import React from "react";
import imgNormal from "../../assets/cerebro_normal_rx.jpg";
import imgAlzheimer from "../../assets/cerebro_alzheimer_rx.jpg";
import { useTranslation } from "react-i18next";
import { autoresFisiopatologia } from "../../data/fisiopatologia";
import "./fisiopatologia.css";
const autorImgNormal = autoresFisiopatologia.comparacaoCerebro.normal;
const autorImgAlzheimer = autoresFisiopatologia.comparacaoCerebro.alzheimer;



export default function ComparacaoCerebro() {
  const { t } = useTranslation();

  return (
    <section className="fisio-section text-center">
      <h2 className="fw-bold mb-4">{t("comparacao_cerebro.titulo")}</h2>
      <div className="fisio-grid-2">
        <div className="fisio-card">
          <img
            src={imgNormal}
            alt={t("comparacao_cerebro.normal_alt")}
            className="fisio-image"
          />
          <h4 className="mt-2">{t("comparacao_cerebro.normal")}</h4>
          <p className="text-muted small">
            Imagem: {t("comparacao_cerebro.normal")} - Autor: {autorImgNormal}
          </p>
        </div>
        <div className="fisio-card">
          <img
            src={imgAlzheimer}
            alt={t("comparacao_cerebro.alzheimer_alt")}
            className="fisio-image"
          />
          <h4 className="mt-2">{t("comparacao_cerebro.alzheimer")}</h4>
          <p className="text-muted small">
            Imagem: {t("comparacao_cerebro.alzheimer")} - Autor: {autorImgAlzheimer}
          </p>
        </div>
      </div>
      <div className="mt-3 text-muted">{t("comparacao_cerebro.desc")}</div>
    </section>
  );
}
